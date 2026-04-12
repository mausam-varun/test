import asyncio
import logging

from app.models.schemas import ProcessProductRequest, ProductMetadata, normalize_color_name
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
        # Remove background before processing for cleaner color extraction and embeddings
        preprocessed = await asyncio.to_thread(self.image_service.preprocess_image, image, (224, 224), remove_bg=True)

        image_embedding = await asyncio.to_thread(self.embedding_service.image_to_vector, preprocessed)
        extracted_colors = await asyncio.to_thread(self.color_service.extract_dominant_colors, preprocessed, 3)

        color_names = [c.name for c in extracted_colors]
        color_hexes = [c.hex for c in extracted_colors]

        merged_colors = self._merge_colors(request_data.metadata.colors, color_names)
        merged_hex = self._merge_color_hex(request_data.metadata.color_hex, color_hexes)
        primary_color = request_data.metadata.primary_color or (merged_colors[0] if merged_colors else '')
        secondary_colors = request_data.metadata.secondary_colors or [
            color for color in merged_colors if color != primary_color
        ]

        spec_view = request_data.metadata.spec_view or self._build_spec_view(request_data.metadata, merged_colors, primary_color)
        intent_view = request_data.metadata.intent_view or self._build_intent_view(request_data.metadata, primary_color)
        semantic_query = request_data.metadata.semantic_query or self._build_semantic_query(
            request_data.metadata,
            merged_colors,
            primary_color
        )

        semantic_embedding = await asyncio.to_thread(self.embedding_service.text_to_vector, semantic_query)
        spec_embedding = await asyncio.to_thread(self.embedding_service.text_to_vector, spec_view)
        intent_embedding = await asyncio.to_thread(self.embedding_service.text_to_vector, intent_view)
        embedding = await asyncio.to_thread(
            self.embedding_service.combine_vectors,
            [image_embedding, semantic_embedding, spec_embedding, intent_embedding],
            [0.35, 0.30, 0.20, 0.15]
        )

        payload = {
            'product_id': request_data.product_id,
            'title': request_data.metadata.title or f'Divara product {request_data.product_id}',
            'description': request_data.metadata.description,
            'colors': merged_colors,
            'primary_color': primary_color,
            'secondary_colors': secondary_colors[:4],
            'color_hex': merged_hex,
            'category': request_data.metadata.category,
            'size': request_data.metadata.size,
            'design': request_data.metadata.design,
            'pattern': request_data.metadata.pattern,
            'style': request_data.metadata.style,
            'material': request_data.metadata.material,
            'occasion': request_data.metadata.occasion,
            'craft_type': request_data.metadata.craft_type,
            'usage': request_data.metadata.usage,
            'target_gender': request_data.metadata.target_gender or 'women',
            'complementary_dress_colors': request_data.metadata.complementary_dress_colors,
            'matching_notes': request_data.metadata.matching_notes,
            'semantic_query': semantic_query,
            'price': request_data.metadata.price,
            'image_url': request_data.metadata.image_url or str(request_data.image_url),
            'spec_view': spec_view,
            'intent_view': intent_view,
            'search_document': f'{semantic_query}\n\n{spec_view}\n\n{intent_view}'.strip(),
            'embedding_modes': ['image', 'semantic_query', 'spec_view', 'intent_view']
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
        style: str | None,
        query_metadata: ProductMetadata | None = None
    ) -> list[dict]:
        image = await self._resolve_input_image(image_url=image_url, image_bytes=image_bytes)
        # Remove background for cleaner color extraction and better matching
        preprocessed = await asyncio.to_thread(self.image_service.preprocess_image, image, (224, 224), remove_bg=True)

        image_embedding = await asyncio.to_thread(self.embedding_service.image_to_vector, preprocessed)
        extracted_colors = await asyncio.to_thread(self.color_service.extract_dominant_colors, preprocessed, 3)
        extracted_color_names = [c.name for c in extracted_colors]

        extracted_color_hexes = [c.hex for c in extracted_colors]
        metadata = query_metadata or ProductMetadata(
            title='Uploaded image query',
            category='bangles',
            colors=extracted_color_names,
            primary_color=extracted_color_names[0] if extracted_color_names else '',
            color_hex=extracted_color_hexes,
            design=[design] if design else [],
            style=[style] if style else []
        )

        query_colors = self._merge_colors(metadata.colors, extracted_color_names)
        query_color_hex = self._merge_color_hex(metadata.color_hex, extracted_color_hexes)
        query_primary_color = self._pick_priority_color(metadata.primary_color, query_colors)
        spec_view = metadata.spec_view or self._build_spec_view(metadata, query_colors, query_primary_color)
        intent_view = metadata.intent_view or self._build_intent_view(metadata, query_primary_color)
        semantic_query = metadata.semantic_query or self._build_semantic_query(metadata, query_colors, query_primary_color)

        semantic_embedding = await asyncio.to_thread(self.embedding_service.text_to_vector, semantic_query)
        spec_embedding = await asyncio.to_thread(self.embedding_service.text_to_vector, spec_view)
        intent_embedding = await asyncio.to_thread(self.embedding_service.text_to_vector, intent_view)
        query_embedding = await asyncio.to_thread(
            self.embedding_service.combine_vectors,
            [image_embedding, semantic_embedding, spec_embedding, intent_embedding],
            [0.35, 0.30, 0.20, 0.15]
        )

        candidates = await asyncio.to_thread(
            self.qdrant_service.search_similar,
            query_embedding,
            metadata.category or 'bangles',
            20,
            metadata.occasion or None
        )
        candidates = self._filter_by_target_gender(candidates, metadata.target_gender or 'women')

        if not candidates:
            return []

        ranked_results = await asyncio.to_thread(
            self.ranking_service.rank,
            candidates,
            query_colors,
            metadata.design or ([design] if design else []),
            metadata.style or ([style] if style else []),
            query_primary_color,
            query_color_hex,
            10
        )

        return [item.model_dump() for item in ranked_results]

    @staticmethod
    def _build_spec_view(metadata: ProductMetadata, merged_colors: list[str], primary_color: str) -> str:
        lines = [
            f"Product: {metadata.title or 'Bangles'}",
            f"Category: {metadata.category}",
            f"Primary Color: {primary_color or 'N/A'}"
        ]

        if metadata.material:
            lines.append(f"Material: {', '.join(metadata.material)}")
        if metadata.pattern:
            lines.append(f"Pattern: {', '.join(metadata.pattern)}")
        if metadata.design:
            lines.append(f"Design: {', '.join(metadata.design)}")
        if metadata.style:
            lines.append(f"Style: {', '.join(metadata.style)}")
        if merged_colors:
            lines.append(f"Colors: {', '.join(merged_colors)}")
        if metadata.occasion:
            lines.append(f"Occasion: {', '.join(metadata.occasion)}")
        if metadata.craft_type:
            lines.append(f"Craft Type: {', '.join(metadata.craft_type)}")
        if metadata.size:
            lines.append(f"Size: {metadata.size}")
        if metadata.complementary_dress_colors:
            lines.append(f"Complementary Dress Colors: {', '.join(metadata.complementary_dress_colors)}")
        if metadata.matching_notes:
            lines.append(f"Matching Notes: {metadata.matching_notes}")

        return '\n'.join(lines)

    @staticmethod
    def _build_intent_view(metadata: ProductMetadata, primary_color: str) -> str:
        subject = metadata.title or f"{primary_color.title()} {metadata.category}".strip() or 'handcrafted bangles'
        descriptors: list[str] = []

        if primary_color:
            descriptors.append(primary_color.title())
        if metadata.material:
            descriptors.append(' / '.join(metadata.material[:2]))
        descriptors.append('handcrafted')
        descriptors.append(metadata.category)

        sentence = f"{' '.join(part for part in descriptors if part).strip()} {subject}".strip()

        if metadata.design:
            sentence += f" with {', '.join(metadata.design[:3])}"
        elif metadata.pattern:
            sentence += f" with {', '.join(metadata.pattern[:3])}"

        if metadata.style:
            sentence += f" in a {', '.join(metadata.style[:2]).lower()} style"

        target_use = metadata.occasion or metadata.usage
        if target_use:
            sentence += f" for {', '.join(target_use[:2]).lower()}"

        if metadata.matching_notes:
            sentence += f". {metadata.matching_notes}"
        elif metadata.description:
            sentence += f". {metadata.description}"
        else:
            sentence += '.'

        return sentence.strip()

    @staticmethod
    def _build_semantic_query(metadata: ProductMetadata, merged_colors: list[str], primary_color: str) -> str:
        parts = [
            primary_color,
            ' '.join(color for color in merged_colors if color != primary_color),
            ' '.join(metadata.material[:3]),
            ' '.join(metadata.craft_type[:3]),
            ' '.join(metadata.design[:4]),
            ' '.join(metadata.pattern[:3]),
            ' '.join(metadata.style[:3]),
            ' '.join(metadata.occasion[:3]),
            metadata.target_gender,
            metadata.matching_notes
        ]
        return ' '.join(part for part in parts if part).strip()

    @staticmethod
    def _filter_by_target_gender(candidates: list[dict], target_gender: str) -> list[dict]:
        expected = str(target_gender or 'women').strip().lower() or 'women'
        filtered: list[dict] = []

        for item in candidates:
            payload = item.get('payload') or {}
            payload_gender = str(payload.get('target_gender') or 'women').strip().lower() or 'women'
            if payload_gender == expected:
                filtered.append(item)

        return filtered

    async def _resolve_input_image(self, image_url: str | None, image_bytes: bytes | None):
        if image_bytes:
            return await asyncio.to_thread(self.image_service.load_image_from_bytes, image_bytes)

        if image_url:
            return await asyncio.to_thread(self.image_service.download_image, image_url)

        raise ValueError('Provide either image_url or image file')

    @staticmethod
    def _merge_colors(input_colors: list[str], extracted_colors: list[str]) -> list[str]:
        normalized: list[str] = []
        for raw_color in [*(input_colors or []), *(extracted_colors or [])]:
            canonical = normalize_color_name(str(raw_color or ''))
            if canonical and canonical not in normalized:
                normalized.append(canonical)

        return normalized[:4]

    @staticmethod
    def _merge_color_hex(input_hex: list[str], extracted_hex: list[str]) -> list[str]:
        """Merge user-provided hex values with extracted hex values."""
        normalized = [h.strip().upper() for h in input_hex if h and h.strip()]
        normalized.extend(h.upper() for h in extracted_hex if h)

        deduped = []
        for hex_val in normalized:
            if hex_val not in deduped:
                deduped.append(hex_val)

        return deduped[:5]

    @staticmethod
    def _pick_priority_color(primary_color: str, merged_colors: list[str]) -> str:
        preferred = [normalize_color_name(primary_color)] if primary_color else []
        preferred.extend(normalize_color_name(color) for color in merged_colors if color)

        non_neutral = [
            color for color in preferred
            if color and color not in {'white', 'gray', 'silver', 'black'}
        ]
        if non_neutral:
            return non_neutral[0]

        for color in preferred:
            if color:
                return color

        return ''[:3]
