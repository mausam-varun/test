from functools import lru_cache

from app.core.config import get_settings
from app.services.color_service import ColorService
from app.services.embedding_service import EmbeddingService
from app.services.image_service import ImageService
from app.services.product_processor import ProductProcessor
from app.services.qdrant_service import QdrantService
from app.services.ranking_service import RankingService


@lru_cache
def get_image_service() -> ImageService:
    settings = get_settings()
    return ImageService(timeout=settings.http_request_timeout)


@lru_cache
def get_embedding_service() -> EmbeddingService:
    settings = get_settings()
    return EmbeddingService(model_name=settings.clip_model_name)


@lru_cache
def get_color_service() -> ColorService:
    return ColorService()


@lru_cache
def get_qdrant_service() -> QdrantService:
    settings = get_settings()
    api_key = settings.qdrant_api_key or None
    return QdrantService(
        url=settings.qdrant_url,
        api_key=api_key,
        collection_name=settings.qdrant_collection
    )


@lru_cache
def get_ranking_service() -> RankingService:
    return RankingService()


def get_product_processor() -> ProductProcessor:
    return ProductProcessor(
        image_service=get_image_service(),
        embedding_service=get_embedding_service(),
        color_service=get_color_service(),
        qdrant_service=get_qdrant_service(),
        ranking_service=get_ranking_service()
    )
