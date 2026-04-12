from qdrant_client import QdrantClient
from qdrant_client.http import models as qmodels


class QdrantService:
    def __init__(self, url: str, api_key: str | None, collection_name: str) -> None:
        self.collection_name = collection_name
        self.client = QdrantClient(url=url, api_key=api_key)

    def ensure_collection(self, vector_size: int) -> None:
        if self.client.collection_exists(collection_name=self.collection_name):
            return

        self.client.create_collection(
            collection_name=self.collection_name,
            vectors_config=qmodels.VectorParams(size=vector_size, distance=qmodels.Distance.COSINE)
        )

    def upsert_product(self, product_id: int, vector: list[float], payload: dict) -> bool:
        self.client.upsert(
            collection_name=self.collection_name,
            points=[
                qmodels.PointStruct(
                    id=product_id,
                    vector=vector,
                    payload=payload
                )
            ]
        )
        return True

    def delete_product(self, product_id: int) -> bool:
        if not self.client.collection_exists(collection_name=self.collection_name):
            return False

        self.client.delete(
            collection_name=self.collection_name,
            points_selector=qmodels.PointIdsList(points=[product_id]),
            wait=True
        )
        return True

    def search_similar(
        self,
        query_vector: list[float],
        category: str = 'bangles',
        limit: int = 20,
        occasion_filters: list[str] | None = None
    ) -> list[dict]:
        if not self.client.collection_exists(collection_name=self.collection_name):
            return []

        must_conditions = [
            qmodels.FieldCondition(
                key='category',
                match=qmodels.MatchValue(value=category)
            )
        ]

        normalized_occasions = [
            str(item).strip()
            for item in (occasion_filters or [])
            if str(item).strip()
        ]
        if normalized_occasions:
            must_conditions.append(
                qmodels.FieldCondition(
                    key='occasion',
                    match=qmodels.MatchAny(any=normalized_occasions)
                )
            )

        search_result = self.client.search(
            collection_name=self.collection_name,
            query_vector=query_vector,
            limit=limit,
            query_filter=qmodels.Filter(must=must_conditions),
            with_payload=True,
            with_vectors=False
        )

        return [
            {
                'id': point.id,
                'similarity': float(point.score),
                'payload': point.payload or {}
            }
            for point in search_result
        ]
