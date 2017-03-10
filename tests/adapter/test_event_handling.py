import pytest
import logging

from scout.models.event import VERBS_MAP

from scout.models import Case

logger = logging.getLogger(__name__)

def test_create_event(adapter, institute_obj, case_obj, user_obj):
    institute_obj['_id'] = institute_obj['internal_id']
    user_obj['_id'] = user_obj['email']
    
    ## GIVEN a database without any events
    
    assert adapter.event_collection.find().count() == 0
    
    ## WHEN inserting a event
    verb = "status"
    adapter.create_event(
        institute=institute_obj, 
        case=case_obj, 
        user=user_obj, 
        link='a link', 
        category='case', 
        verb=verb,
        subject='a subject', 
        level='specific'
    )
    
    # THEN assert that the event was added to the database
    
    adapter.event_collection.find().count() == 1
    res = adapter.event_collection.find_one()
    
    assert res['verb'] == VERBS_MAP[verb]

def test_assign(case_database, institute_obj, case_obj, user_obj):
    adapter = case_database
    logger.info("Testing assign a user to a case")
    assert adapter.event_collection.find().count() == 0
    # GIVEN a populated databas
    institute = adapter.institute(
        institute_id=institute_obj['internal_id']
    )
    assert institute

    case = adapter.case(
        case_id=case_obj['_id']
    )
    assert case
    
    user = adapter.user(
        email = user_obj['email']
    )
    assert user

    link = 'assignlink'
    ## WHEN assigning a user to a case
    updated_case = adapter.assign(
        institute=institute,
        case=case,
        user=user,
        link=link
    )
    # THEN the case should have the user assigned
    assert updated_case['assignee'] == user['_id']
    # THEN an event should have been created
    assert adapter.event_collection.find().count() == 1
    
    event_obj = adapter.event_collection.find_one()
    assert event_obj['link'] == link


def test_unassign(case_database, institute_obj, case_obj, user_obj):
    adapter = case_database
    print('')
    
    updated_case = adapter.assign(
        institute=institute_obj,
        case=case_obj,
        user=user_obj,
        link='assignlink'
    )
    #The user should be added as assignee to the case
    # GIVEN a assigned case
    assert updated_case['assignee'] == user_obj['_id']

    # WHEN unassigning a user from a case
    updated_case = adapter.unassign(
         institute=institute_obj,
         case=case_obj,
         user=user_obj,
         link='unassignlink'
    )

    # THEN the two events should have been created
    assert adapter.event_collection.find().count() == 2
    
    # THEN the case should not be assigned
    assert updated_case.get('assignee') == None
    # THEN a unassign event should be created
    event = adapter.event_collection.find_one({'verb': 'was unassigned from'})
    assert event['link'] == 'unassignlink'


def test_update_synopsis(case_database, institute_obj, case_obj, user_obj):
    adapter = case_database
    synopsis = "The updated synopsis"
    # GIVEN a populated database without events
    assert adapter.event_collection.find().count() == 0

    link = 'synopsislink'
    # WHEN updating synopsis for a case
    updated_case = adapter.update_synopsis(
        institute=institute_obj,
        case=case_obj,
        user=user_obj,
        link=link,
        content=synopsis
    )
    # THEN the case should have the synopsis added
    assert updated_case['synopsis'] == synopsis

    # THEN an event for synopsis should have been added
    event = adapter.event_collection.find_one({'link': link})
    assert event['content'] == synopsis

def test_archive_case(case_database, institute_obj, case_obj, user_obj):
    adapter = case_database
    logger.info("Set a case to archive status")
    # GIVEN a populated database without events
    assert adapter.event_collection.find().count() == 0
    
    # WHEN setting a case in archive status
    link = 'archivelink'
    updated_case = adapter.archive_case(
        institute=institute_obj,
        case=case_obj,
        user=user_obj,
        link=link,
    )
    # THEN the case status should be archived
    assert updated_case['status'] == 'archived'

    # THEN a event for archiving should be added
    event = adapter.event_collection.find_one({'link': link})
    assert event['link'] == link

def test_open_research(case_database, institute_obj, case_obj, user_obj):
    adapter = case_database
    # GIVEN a populated database without events
    assert adapter.event_collection.find().count() == 0
    assert adapter.case_collection.find_one({'_id': case_obj['_id']}).get('research_requested', False) == False 
    
    
    # WHEN setting opening research for a case
    link = 'openresearchlink'
    updated_case = adapter.open_research(
        institute=institute_obj,
        case=case_obj,
        user=user_obj,
        link=link,
    )
    # THEN research_requested should be True
    assert updated_case['research_requested'] == True

    # THEN an event for opening research should be created
    event = adapter.event_collection.find_one({'link': link})
    assert event['link'] == 'openresearchlink'

def test_add_hpo(case_database, institute_obj, case_obj, user_obj):
    adapter = case_database
    logger.info("Add a HPO term for a case")
    # GIVEN a populated database
    gene_obj = dict(
        hgnc_id = 1,
        hgnc_symbol = 'test',
        ensembl_id = 'anothertest',
        chromosome = '1',
        start = 10,
        end = 20,
        build = '37'
    )
    adapter.load_hgnc_gene(gene_obj)

    hpo_obj = dict(
        _id = 'HP:0000878',
        hpo_id = 'HP:0000878',
        description = 'A term',
        genes = [1]
    )

    adapter.load_hpo_term(hpo_obj)

    hpo_term = hpo_obj['hpo_id']

    # WHEN adding a hpo term for a case
    link = 'addhpolink'
    
    updated_case = adapter.add_phenotype(
        institute=institute_obj,
        case=case_obj,
        user=user_obj,
        link=link,
        hpo_term=hpo_term
    )
    print(updated_case)
    # THEN the case should have a hpo term
    for term in updated_case['phenotype_terms']:
        assert term['phenotype_id'] == hpo_term

    # THEN a event should have been created
    event = adapter.event_collection.find_one({'link': link})
    assert event['link'] == link

def test_add_wrong_hpo(populated_database, institute_obj, case_obj, user_obj):
    logger.info("Add a HPO term for a case")
    # GIVEN a populated database
    hpo_term = 'k'
    # WHEN adding a wrong hpo term for a case
    with pytest.raises(ValueError):
    # THEN a value error should be raised
        populated_database.add_phenotype(
            institute=institute_obj,
            case=case_obj,
            user=user_obj,
            link='addhpolink',
            hpo_term=hpo_term
        )

def test_add_no_term(populated_database, institute_obj, case_obj, user_obj):
    logger.info("Add a HPO term for a case")
    # GIVEN a populated database
    # WHEN adding hpo term without a term
    with pytest.raises(ValueError):
        # THEN a value error should be raised
        populated_database.add_phenotype(
            institute=institute_obj,
            case=case_obj,
            user=user_obj,
            link='addhpolink',
        )

def test_add_non_existing_mim(populated_database, institute_obj, case_obj, user_obj):
    adapter = populated_database
    logger.info("Add OMIM term for a case")
    #Non existing mim phenotype
    mim_term = 'MIM:0000002'
    # GIVEN a populated database
    
    # WHEN adding a non existing phenotype term
    updated_case = adapter.add_phenotype(
        institute=institute_obj,
        case=case_obj,
        user=user_obj,
        link='mimlink',
        omim_term=mim_term
    )
    # THEN the case should not have any phenotypes
    assert len(updated_case.get('phenotype_terms', [])) == 0

    # THEN there should not exist any events
    assert adapter.event_collection.find().count() == 0

# def test_add_mim(populated_database, institute_obj, case_obj, user_obj):
#     adapter = populated_database
#     logger.info("Add OMIM term for a case")
#     #Existing mim phenotype
#     mim_term = 'OMIM:613855'
#     assert adapter.hpo_term_collection.find().count() > 0
#     # GIVEN a populated database
#     assert adapter.event_collection.find().count() == 0
#
#     # WHEN adding a existing phenotype term
#     updated_case = adapter.add_phenotype(
#         institute=institute_obj,
#         case=case_obj,
#         user=user_obj,
#         link='mimlink',
#         omim_term=mim_term
#     )
#     # THEN the case should have phenotypes
#     assert len(updated_case['phenotype_terms']) > 0
#
#     # THEN there should be phenotypes
#     assert adapter.event_collection.find().count() == 1
# #
# # def test_remove_hpo(case_database, institute_obj, case_obj, user_obj):
# #     adapter = case_database
# #     logger.info("Add a HPO term for a case")
# #
# #     gene_obj = dict(
# #         hgnc_id = 1,
# #         hgnc_symbol = 'test',
# #         ensembl_id = 'anothertest',
# #         chromosome = '1',
# #         start = 10,
# #         end = 20,
# #     )
# #     adapter.load_hgnc_gene(gene_obj)
# #
# #     hpo_obj = HpoTerm(
# #         hpo_id = 'HP:0000878',
# #         description = 'A term',
# #         genes = [1]
# #     )
# #
# #     adapter.load_hpo_term(hpo_obj)
# #
# #     hpo_term = hpo_obj.hpo_id
# #
# #     institute = adapter.institute(
# #         institute_id=institute_obj.internal_id
# #     )
# #     case = adapter.case(
# #         institute_id=institute_obj.internal_id,
# #         case_id=case_obj.display_name
# #     )
# #     user = adapter.user(
# #         email = user_obj.email
# #     )
# #     adapter.add_phenotype(
# #         institute=institute,
# #         case=case,
# #         user=user,
# #         link='addhpolink',
# #         hpo_term=hpo_term
# #     )
# #
# #     #Assert that the term was added to the case
# #     updated_case = Case.objects.get(case_id=case_obj.case_id)
# #     for term in updated_case.phenotype_terms:
# #         assert term.phenotype_id == hpo_term
# #
# #     #Check that the event exists
# #     event = Event.objects.get(verb='add_phenotype')
# #     assert event.link == 'addhpolink'
# #
# #     # WHEN removing the phenotype term
# #     adapter.remove_phenotype(
# #         institute=institute,
# #         case=updated_case,
# #         user=user,
# #         link='removehpolink',
# #         phenotype_id=hpo_term
# #     )
# #     # THEN the case should not have phenotype terms
# #     updated_case = Case.objects.get(case_id=case_obj.case_id)
# #     assert len(updated_case.phenotype_terms) == 0
# #
# #     # THEN an event should have been created
# #     event = Event.objects.get(verb='remove_phenotype')
# #     assert event.link == 'removehpolink'
# #     event.delete()
# #
# # # def test_specific_comment(variant_database, institute_obj, case_obj, user_obj):
# # #     logger.info("Add specific comment for a variant")
# # #     content = "hello"
# # #     # GIVEN a populated database with variants
# # #     institute = variant_database.institute(
# # #         institute_id=institute_obj.internal_id
# # #     )
# # #     case = variant_database.case(
# # #         institute_id=institute_obj.internal_id,
# # #         case_id=case_obj.display_name
# # #     )
# # #     user = variant_database.user(
# # #         email = user_obj.email
# # #     )
# # #     variant =  Variant.objects.first()
# # #     variant_id = variant.id
# # #
# # #     # WHEN commenting on a variant
# # #     variant_database.comment(
# # #         institute=institute,
# # #         case=case,
# # #         user=user,
# # #         link='commentlink',
# # #         variant=variant,
# # #         content=content,
# # #         comment_level='specific'
# # #     )
# # #     # THEN the variant should have comments
# # #     updated_variant = variant_database.variant(variant_id)
# # #     assert updated_variant.has_comments(case=case) == True
# # #
# # #     # THEN a event should have been created
# # #     event = Event.objects.get(verb='comment')
# # #     assert event.link == 'commentlink'
