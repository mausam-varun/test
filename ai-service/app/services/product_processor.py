import asyncio
import logging

from app.models.schemas import ProcessProductRequest
from app.services.color_service import ColorService
from app.services.embedding_service import EmbeddingService
from app.services.image_service import ImageService
from app.services.qdrant_service import QdrantService
from app.services.ranking_service import RankingService

logger = logging.getLogger(__name__)


class ProductProcessor:
    def __init__(
        self,
        image_service: ImageService,
        embedding_service: EmbeddingService,
        color_service: ColorService,
        qdrant_service: QdrantService,
        ranking_service: RankingService
    ) -> None:
        self.image_service = image_service
        self.embedding_service = embedding_service
        self.color_service = color_service
        self.qdrant_service = qdrant_service
        self.ranking_service = ranking_service

    async def process(self, request_data: ProcessProductRequest) -> dict:
        image = await asyncio.to_thread(self.image_service.download_image, str(request_data.image_url))
        preprocessed = await asyncio.to_thread(self.image_service.preprocess_image, image, (224, 224))

        embedding = await asyncio.to_thread(self.embedding_service.image_to_vector, preprocessed)
        extracted_colors = await asyncio.to_thread(self.color_service.extract_dominant_colors, preprocessed, 3)

        color_names = [c.name for c in extracted_colors]
        color_hexes = [c.hex for c in extracted_colors]
        
        # Merge user-provided colors and hex values with extracted ones
        merged_colors = self._merge_colors(request_data.metadata.colors, color_names)
        merged_hex = self._merge_color_hex(request_data.metadata.color_hex, color_hexes)

        payload = {
            'product_id': request_data.product_id,
            'colors': merged_colors,
            'color_hex': merged_hex,
            'category': request_data.metadata.category,
            'size': request_data.metadata.size,
            'design': request_data.metadata.design,
            'pattern': request_data.metadata.pattern,
            'style': request_data.metadata.style,
            'material': request_data.metadata.material
        }

        await asyncio.to_thread(
            self.qdrant_service.ensure_collection,
            len(embedding)
        )

        stored = await asyncio.to_thread(
            self.qdrant_service.upsert_product,
            request_data.product_id,
            embedding,
            payload
        )

        logger.info('Product processed and upserted. product_id=%s stored=%s', request_data.product_id, stored)

        return {
            'status': 'success',
            'product_id': request_data.product_id,
            'stored': bool(stored),
            'payload': payload
        }

    async def delete(self, product_id: int) -> dict:
        deleted = await asyncio.to_thread(self.qdrant_service.delete_product, product_id)
        return {
            'status': 'success',
            'product_id': product_id,
            'deleted': bool(deleted)
        }

    async def match(
        self,
        image_url: str | None,
        image_bytes: bytes | None,
        design: str | None,
        style: str | None
    ) -> list[dict]:
        image = await self._resolve_input_image(image_url=image_url, image_bytes=image_bytes)
        preprocessed = await asyncio.to_thread(self.image_service.preprocess_image, image, (224, 224))

        query_embedding = await asyncio.to_thread(self.embedding_service.image_to_vector, preprocessed)
        extracted_colors = await asyncio.to_thread(self.color_service.extract_dominant_colors, preprocessed, 3)
        query_color_names = [c.name for c in extracted_colors]

        candidates = await asyncio.to_thread(
            self.qdrant_service.search_similar,
            query_embedding,
            'bangles',
            20
        )

        if not candidates:
            return []

        ranked_results = await asyncio.to_thread(
            self.ranking_service.rank,
            candidates,
            query_color_names,
            design,
            style,
            10
        )

        return [item.model_dump() for item in ranked_results]

    async def _resolve_input_image(self, image_url: str | None, image_bytes: bytes | None):
        if image_bytes:
            return await asyncio.to_thread(self.image_service.load_image_from_bytes, image_bytes)

        if image_url:
            return await asyncio.to_thread(self.image_service.download_image, image_url)

        raise ValueError('Provide either image_url or image file')

    @staticmethod
    def _merge_colors(input_colors: list[str], extracted_colors: list[str]) -> list[str]:
        normalized = [c.strip().lower() for c in input_colors if c and c.strip()]
        normalized.extend(c.lower() for c in extracted_colors if c)

        deduped = []
        for color in normalized:
            if color not in deduped:
                deduped.append(color)

        return deduped[:3]

    @staticmethod
    def _merge_color_hex(input_hex: list[str], extracted_hex: list[str]) -> list[str]:
        """Merge user-provided hex values with extracted hex values."""
        normalized = [h.strip().upper() for h in input_hex if h and h.strip()]
        normalized.extend(h.upper() for h in extracted_hex if h)

        deduped = []
        for hex_val in normalized:
            if hex_val not in deduped:
                deduped.append(hex_val)

        return deduped[:3]
