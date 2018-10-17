import logging
from datetime import datetime

from bson import ObjectId
import pymongo

from scout.constants import REV_ACMG_MAP

SANGER_OPTIONS = ['True positive', 'False positive', 'Not validated']

LOG = logging.getLogger(__name__)

class VariantEventHandler(object):
    """Class to handle variant events for the mongo adapter"""

    def pin_variant(self, institute, case, user, link, variant):
        """Create an event for pinning a variant.

        Arguments:
            institute (dict): A Institute object
            case (dict): Case object
            user (dict): A User object
            link (str): The url to be used in the event
            variant (dict): A variant object

        Returns:
            updated_case
        """
        LOG.info("Creating event for pinning variant {0}".format(
            variant['display_name']))

        # add variant to list of pinned references in the case model
        updated_case = self.case_collection.find_one_and_update(
            {'_id': case['_id']},
            {'$push': {'suspects': variant['_id']}},
            return_document=pymongo.ReturnDocument.AFTER
        )

        kwargs = dict(
            institute=institute,
            case=case,
            user=user,
            link=link,
            verb='pin',
            variant=variant,
            subject=variant['display_name'],
        )
        self.create_event(category='variant', **kwargs)
        self.create_event(category='case', **kwargs)

        return updated_case

    def unpin_variant(self, institute, case, user, link, variant):
        """Create an event for unpinning a variant.

        Arguments:
            institute (dict): A Institute object
            case (dict): Case object
            user (dict): A User object
            link (str): The url to be used in the event
            variant (dict): A variant object

        Returns:
            updated_case(dict)
        """
        LOG.info("Creating event for unpinning variant {0}".format(
            variant['display_name']))

        LOG.info("Remove variant from list of references in the case" \
                    " model")

        updated_case = self.case_collection.find_one_and_update(
            {'_id': case['_id']},
            {'$pull': {'suspects': variant['_id']}},
            return_document=pymongo.ReturnDocument.AFTER
        )

        self.create_event(
            institute=institute,
            case=case,
            user=user,
            link=link,
            category='variant',
            verb='unpin',
            variant=variant,
            subject=variant['display_name'],
        )

        return updated_case

    def order_verification(self, institute, case, user, link, variant):
        """Create an event for a variant verification for a variant
        and an event for a variant verification for a case

        Arguments:
            institute (dict): A Institute object
            case (dict): Case object
            user (dict): A User object
            variant (dict): A variant object

        Returns:
            updated_variant(dict)
        """
        LOG.info("Creating event for ordering validation for variant" \
                    " {0}".format(variant['display_name']))

        updated_variant = self.variant_collection.find_one_and_update(
            {'_id': variant['_id']},
            {'$set': {'sanger_ordered': True}},
            return_document=pymongo.ReturnDocument.AFTER
        )

        self.create_event(
            institute=institute,
            case=case,
            user=user,
            link=link,
            category='variant',
            verb='sanger',
            variant=variant,
            subject=variant['display_name'],
        )

        LOG.info("Creating event for ordering sanger for case" \
                    " {0}".format(case['display_name']))

        self.create_event(
            institute=institute,
            case=case,
            user=user,
            link=link,
            category='case',
            verb='sanger',
            variant=variant,
            subject=variant['display_name'],
        )
        return updated_variant

    def cancel_verification(self, institute, case, user, link, variant):
        """Create an event for cancellation of a verification of a variant

        Arguments:
            institute (dict): A Institute object
            case (dict): Case object
            user (dict): A User object
            link (str): The url to be used in the event
            variant (dict): A variant object

        Returns:
            updated_variant(dict)
        """
        LOG.info("Creating event for cancellation of ordering sanger for variant" \
                    " {0}".format(variant['display_name']))

        updated_variant = self.variant_collection.find_one_and_update(
            {'_id': variant['_id']},
            {'$set': {'sanger_ordered': False}},
            return_document=pymongo.ReturnDocument.AFTER
        )

        self.create_event(
            institute=institute,
            case=case,
            user=user,
            link=link,
            category='variant',
            verb='cancel_sanger',
            variant=variant,
            subject=variant['display_name'],
        )

        LOG.info("Creating event for cancellation of ordering verification for case" \
                    " {0}".format(case['display_name']))

        self.create_event(
            institute=institute,
            case=case,
            user=user,
            link=link,
            category='case',
            verb='cancel_sanger',
            variant=variant,
            subject=variant['display_name'],
        )
        return updated_variant

    def sanger_ordered(self, institute_id=None, user_id=None):
        """Get all variants with validations ever ordered.

        Args:
            institute_id(str) : The id of an institute
            user_id(str) : The id of an user

        Returns:
            sanger_ordered(list) : a list of dictionaries, each with "case_id" as keys and list of variant ids as values
        """
        query = {'$match': {
                '$and': [
                    {'verb': 'sanger'},
                ],
            }}

        if institute_id:
            query['$match']['$and'].append({'institute': institute_id})
        if user_id:
            query['$match']['$and'].append({'user_id': user_id})

        # Get all sanger ordered variants grouped by case_id
        results = self.event_collection.aggregate([
            query,
            {'$group': {
                '_id': "$case",
                'vars': {'$addToSet' : '$variant_id'}
            }}
        ])

        sanger_ordered =  [item for item in results]
        return sanger_ordered

    def validate(self, institute, case, user, link, variant, validate_type):
        """Mark validation status for a variant.

        Arguments:
            institute (dict): A Institute object
            case (dict): Case object
            user (dict): A User object
            link (str): The url to be used in the event
            variant (dict): A variant object
            validate_type(str): The outcome of validation.
                                choices=('True positive', 'False positive')

        Returns:
            updated_variant(dict)
        """
        if not validate_type in SANGER_OPTIONS:
            LOG.warning("Invalid validation string: %s", validate_type)
            LOG.info("Validation options: %s", ', '.join(SANGER_OPTIONS))
            return

        updated_variant = self.variant_collection.find_one_and_update(
            {'_id': variant['_id']},
            {'$set': {'validation': validate_type}},
            return_document=pymongo.ReturnDocument.AFTER
        )

        self.create_event(
            institute=institute,
            case=case,
            user=user,
            link=link,
            category='variant',
            verb='validate',
            variant=variant,
            subject=variant['display_name'],
        )
        return updated_variant

    def mark_causative(self, institute, case, user, link, variant):
        """Create an event for marking a variant causative.

        Arguments:
          institute (dict): A Institute object
          case (dict): Case object
          user (dict): A User object
          link (str): The url to be used in the event
          variant (variant): A variant object

        Returns:
            updated_case(dict)
        """
        display_name = variant['display_name']
        LOG.info("Mark variant {0} as causative in the case {1}".format(
            display_name, case['display_name']))

        LOG.info("Adding variant to causatives in case {0}".format(
            case['display_name']))

        LOG.info("Marking case {0} as solved".format(
            case['display_name']))

        updated_case = self.case_collection.find_one_and_update(
            {'_id': case['_id']},
            {
                '$push': {'causatives': variant['_id']},
                '$set': {'status': 'solved'}
            },
            return_document=pymongo.ReturnDocument.AFTER
        )

        LOG.info("Creating case event for marking {0}" \
                    " causative".format(variant['display_name']))

        self.create_event(
            institute=institute,
            case=case,
            user=user,
            link=link,
            category='case',
            verb='mark_causative',
            variant=variant,
            subject=variant['display_name'],
        )

        LOG.info("Creating variant event for marking {0}" \
                    " causative".format(case['display_name']))

        self.create_event(
            institute=institute,
            case=case,
            user=user,
            link=link,
            category='variant',
            verb='mark_causative',
            variant=variant,
            subject=variant['display_name'],
        )
        return updated_case

    def unmark_causative(self, institute, case, user, link, variant):
        """Create an event for unmarking a variant causative

        Arguments:
            institute (dict): A Institute object
            case (dict): Case object
            user (dict): A User object
            link (str): The url to be used in the event
            variant (dict): A variant object

        Returns:
            updated_case(dict)

        """
        display_name = variant['display_name']
        LOG.info("Remove variant {0} as causative in case {1}".format(
            display_name, case['display_name']))

        updated_case = self.case_collection.find_one_and_update(
            {'_id': case['_id']},
            {
                '$pull': {'causatives': variant['_id']},
            },
            return_document=pymongo.ReturnDocument.AFTER
        )

        # mark the case as active again
        if len(updated_case.get('causatives', [])) == 0:
            LOG.info("Marking case as 'active'")
            updated_case = self.case_collection.find_one_and_update(
                {'_id': case['_id']},
                {
                    '$set': {'status': 'active'}
                },
                return_document=pymongo.ReturnDocument.AFTER
            )

        LOG.info("Creating events for unmarking variant {0} " \
                    "causative".format(display_name))

        self.create_event(
            institute=institute,
            case=case,
            user=user,
            link=link,
            category='case',
            verb='unmark_causative',
            variant=variant,
            subject=variant['display_name'],
        )

        self.create_event(
            institute=institute,
            case=case,
            user=user,
            link=link,
            category='variant',
            verb='unmark_causative',
            variant=variant,
            subject=variant['display_name'],
        )

        return updated_case

    def update_manual_rank(self, institute, case, user, link, variant,
                           manual_rank):
        """Create an event for updating the manual rank of a variant

          This function will create a event and update the manual rank
          of the variant.

        Arguments:
            institute (dict): A Institute object
            case (dict): Case object
            user (dict): A User object
            link (str): The url to be used in the event
            variant (dict): A variant object
            manual_rank (int): The new manual rank

        Return:
            updated_variant

        """
        LOG.info("Creating event for updating manual rank for "
                    "variant {0}".format(variant['display_name']))

        self.create_event(
            institute=institute,
            case=case,
            user=user,
            link=link,
            category='variant',
            verb='manual_rank',
            variant=variant,
            subject=variant['display_name'],
        )

        if manual_rank:
            LOG.info("Setting manual rank to {0} for variant {1}"
                        .format(manual_rank, variant['display_name']))
            action = '$set'
        else:
            LOG.info("Reset manual rank from {0} for variant {1}"
                        .format(variant.get('manual_rank', 'NA'), variant['display_name']))
            action = '$unset'

        updated_variant = self.variant_collection.find_one_and_update(
            {'_id': variant['_id']},
            {action: {'manual_rank': manual_rank}},
            return_document=pymongo.ReturnDocument.AFTER
        )
        LOG.debug("Variant updated")
        return updated_variant

    def update_dismiss_variant(self, institute, case, user, link, variant,
                               dismiss_variant):
        """Create an event for updating the manual dismiss variant entry

          This function will create a event and update the dismiss variant
          field of the variant.

        Arguments:
            institute (dict): A Institute object
            case (dict): Case object
            user (dict): A User object
            link (str): The url to be used in the event
            variant (dict): A variant object
            dismiss_variant (list): The new dismiss variant list

        Return:
            updated_variant

        """
        LOG.info("Creating event for updating dismiss variant for "
                    "variant {0}".format(variant['display_name']))

        self.create_event(
            institute=institute,
            case=case,
            user=user,
            link=link,
            category='variant',
            verb='dismiss_variant',
            variant=variant,
            subject=variant['display_name'],
        )

        if dismiss_variant:
            LOG.info("Setting dismiss variant to {0} for variant {1}"
                        .format(dismiss_variant, variant['display_name']))
            action = '$set'
        else:
            LOG.info("Reset dismiss variant from {0} for variant {1}"
                        .format(variant['dismiss_variant'], variant['display_name']))
            action = '$unset'

        updated_variant = self.variant_collection.find_one_and_update(
            {'_id': variant['_id']},
            {action: {'dismiss_variant': dismiss_variant}},
            return_document=pymongo.ReturnDocument.AFTER
        )
        LOG.debug("Variant updated")
        return updated_variant

    def update_acmg(self, institute_obj, case_obj, user_obj, link, variant_obj, acmg_str):
        """Create an event for updating the ACMG classification of a variant.

        Arguments:
            institute_obj (dict): A Institute object
            case_obj (dict): Case object
            user_obj (dict): A User object
            link (str): The url to be used in the event
            variant_obj (dict): A variant object
            acmg_str (str): The new ACMG classification string

        Returns:
            updated_variant
        """
        self.create_event(
            institute=institute_obj,
            case=case_obj,
            user=user_obj,
            link=link,
            category='variant',
            verb='acmg',
            variant=variant_obj,
            subject=variant_obj['display_name'],
        )
        LOG.info("Setting ACMG to {} for: {}".format(acmg_str, variant_obj['display_name']))

        if acmg_str is None:
            updated_variant = self.variant_collection.find_one_and_update(
                {'_id': variant_obj['_id']},
                {'$unset': {'acmg_classification': 1}},
                return_document=pymongo.ReturnDocument.AFTER
            )
        else:
            updated_variant = self.variant_collection.find_one_and_update(
                {'_id': variant_obj['_id']},
                {'$set': {'acmg_classification': REV_ACMG_MAP[acmg_str]}},
                return_document=pymongo.ReturnDocument.AFTER
            )

        LOG.debug("Variant updated")
        return updated_variant
