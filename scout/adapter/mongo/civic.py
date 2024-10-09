import logging
from datetime import datetime
from typing import List, Optional, Dict, Union

import pymongo
from pymongo.collection import Collection

from scout.exceptions import IntegrityError

LOG = logging.getLogger(__name__)


class CivicHandler:
    def __init__(self, database):
        self.database = database
        self.civic_collection: Collection = database.civic_collection

    def add_civic_variant(self, variant_obj: Dict[str, any]) -> None:
        """Add a CIViC variant to the database.

        Args:
            variant_obj (dict): CIViC variant object
        """
        variant_id = variant_obj.get("variant_id")

        if self.civic_variant(variant_id=variant_id):
            raise IntegrityError(f"CIViC variant {variant_id} already exists in database")

        variant_obj["created_at"] = datetime.now()
        variant_obj["updated_at"] = datetime.now()

        self.civic_collection.insert_one(variant_obj)

    def update_civic_variant(
        self,
        variant_id: int,
        variant_civic_url: Optional[str] = None,
        gene: Optional[str] = None,
        entrez_id: Optional[str] = None,
        variant: Optional[str] = None,
        variant_groups: Optional[str] = None,
        chromosome: Optional[str] = None,
        start: Optional[int] = None,
        stop: Optional[int] = None,
        reference_bases: Optional[str] = None,
        variant_bases: Optional[str] = None,
        representative_transcript: Optional[str] = None,
        ensembl_version: Optional[str] = None,
        reference_build: Optional[str] = None,
        chromosome2: Optional[str] = None,
        start2: Optional[int] = None,
        stop2: Optional[int] = None,
        representative_transcript2: Optional[str] = None,
        variant_types: Optional[str] = None,
        hgvs_descriptions: Optional[List[str]] = None,
        last_review_date: Optional[datetime] = None,
        allele_registry_id: Optional[str] = None,
        clinvar_ids: Optional[str] = None,
        variants_aliases: Optional[List[str]] = None,
        is_flagged: Optional[bool] = None,
        single_variant_molecular_profile_id: Optional[int] = None,
    ) -> Union[Dict[str, any], None]:
        """Update the information for a CIViC variant."""

        variant_obj = self.civic_variant(variant_id)
        if not variant_obj:
            raise IntegrityError(f"CIViC variant {variant_id} does not exist in database")

        updates = {"$set": {}}

        fields_to_update = {
            "variant_civic_url": variant_civic_url,
            "gene": gene,
            "entrez_id": entrez_id,
            "variant": variant,
            "variant_groups": variant_groups,
            "chromosome": chromosome,
            "start": start,
            "stop": stop,
            "reference_bases": reference_bases,
            "variant_bases": variant_bases,
            "representative_transcript": representative_transcript,
            "ensembl_version": ensembl_version,
            "reference_build": reference_build,
            "chromosome2": chromosome2,
            "start2": start2,
            "stop2": stop2,
            "representative_transcript2": representative_transcript2,
            "variant_types": variant_types,
            "hgvs_decriptions": hgvs_descriptions,
            "last_review_date": last_review_date,
            "allele_registry_id": allele_registry_id,
            "clinvar_ids": clinvar_ids,
            "variants_aliases": variants_aliases,
            "is_flagged": is_flagged,
            "single_variant_molecular_profile_id": single_variant_molecular_profile_id,
        }

        for key, value in fields_to_update.items():
            if value is not None:
                updates["$set"][key] = value

        if updates["$set"]:
            updates["$set"]["updated_at"] = datetime.now()
            updated_variant = self.civic_collection.find_one_and_update(
                {"variant_id": variant_id},
                updates,
                return_document=pymongo.ReturnDocument.AFTER,
            )

            LOG.info(f"CIViC variant {variant_id} updated")
            return updated_variant

        return None

    def civic_variant(self, variant_id: str) -> Optional[Dict[str, any]]:
        """Fetch a single CIViC variant from the database.

        Args:
            variant_id (str): The CIViC variant ID

        Returns:
            dict or None: The CIViC variant object if found, None otherwise
        """
        variant_obj = self.civic_collection.find_one({"variant_id": variant_id})
        if variant_obj is None:
            LOG.debug(f"Could not find CIViC variant {variant_id}")

        return variant_obj

    def civic_variants(self, query: Optional[Dict[str, any]] = None) -> pymongo.cursor:
        """Fetch CIViC variants from the database.

        Args:
            query (dict, optional): A query to filter CIViC variants

        Returns:
            pymongo.Cursor: A cursor to iterate over the matching CIViC variants
        """
        if query is None:
            query = {}
        return self.civic_collection.find(query)

    def delete_civic_variant(self, variant_id: str) -> bool:
        """Delete a CIViC variant from the database.

        Args:
            variant_id (str): The CIViC variant ID to delete

        Returns:
            bool: True if the variant was deleted, False otherwise
        """
        result = self.civic_collection.delete_one({"variant_id": variant_id})
        if result.deleted_count > 0:
            LOG.info(f"Deleted CIViC variant {variant_id}")
            return True
        LOG.warning(f"Failed to delete CIViC variant {variant_id}: not found")
        return False

    def civic_variants_by_gene(self, gene: str) -> pymongo.cursor:
        """Fetch CIViC variants for a specific gene.

        Args:
            gene (str): The gene symbol

        Returns:
            pymongo.Cursor: A cursor to iterate over the matching CIViC variants
        """
        return self.civic_collection.find({"gene": gene})

    def bulk_insert_civic_variants(self, variants: List[Dict[str, any]]) -> None:
        """Insert multiple CIViC variants into the database.

        Args:
            variants (List[Dict[str, Any]]): A list of CIViC variant objects
        """
        if not variants:
            LOG.warning("No variants provided for bulk insert")
            return

        result = self.civic_collection.insert_many(variants)
        LOG.info(f"Bulk inserted {len(result.inserted_ids)} CIViC variants")
