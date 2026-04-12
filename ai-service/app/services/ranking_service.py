import re

from app.models.schemas import MatchResult, normalize_color_name


class RankingService:
    VECTOR_WEIGHT = 0.15
    PRIMARY_COLOR_WEIGHT = 0.40
    HEX_WEIGHT = 0.25
    COLOR_WEIGHT = 0.10
    DESIGN_WEIGHT = 0.05
    COMPLEMENTARY_WEIGHT = 0.05
    NEUTRAL_COLORS = {'white', 'gray', 'silver', 'black', 'gold'}

    def rank(
        self,
        candidates: list[dict],
        query_colors: list[str],
        query_design: str | list[str] | None,
        query_style: str | list[str] | None,
        query_primary_color: str | None = None,
        query_color_hex: str | list[str] | None = None,
        top_k: int = 10
    ) -> list[MatchResult]:
        normalized_query_colors = [
            normalize_color_name(c)
            for c in query_colors
            if c and normalize_color_name(c)
        ]
        query_colors_set = set(normalized_query_colors)
        query_primary = normalize_color_name(
            query_primary_color or (normalized_query_colors[0] if normalized_query_colors else '')
        )
        query_hex_values = self._normalize_hex_values(query_color_hex)
        normalized_design = self._normalize_text_values(query_design)
        normalized_style = self._normalize_text_values(query_style)

        ranked: list[MatchResult] = []
        for item in candidates:
            payload = item.get('payload') or {}
            vector_similarity = self._normalize_similarity(item.get('similarity', 0.0))

            payload_colors = [
                normalize_color_name(c)
                for c in payload.get('colors', [])
                if isinstance(c, str) and normalize_color_name(c)
            ]
            payload_primary = normalize_color_name(str(payload.get('primary_color', '') or ''))
            if not payload_primary and payload_colors:
                payload_primary = payload_colors[0]

            matched_colors = sorted(query_colors_set.intersection(set(payload_colors)))
            primary_color_match = self._primary_color_score(query_primary, payload_primary, payload_colors)
            hex_match = self._hex_match_score(query_hex_values, payload.get('color_hex', []))
            color_match = self._color_match_score(query_colors_set, payload_colors)
            complementary_match = self._complementary_color_score(
                query_colors_set,
                payload.get('complementary_dress_colors', []),
                payload_primary,
                payload_colors
            )
            design_match = self._design_match_score(
                normalized_design,
                normalized_style,
                payload.get('design', []),
                payload.get('style', [])
            )

            final_score = (
                self.VECTOR_WEIGHT * vector_similarity +
                self.PRIMARY_COLOR_WEIGHT * primary_color_match +
                self.HEX_WEIGHT * hex_match +
                self.COLOR_WEIGHT * color_match +
                self.DESIGN_WEIGHT * design_match +
                self.COMPLEMENTARY_WEIGHT * complementary_match
            )

            if query_primary and query_primary not in self.NEUTRAL_COLORS:
                no_real_color_alignment = (
                    primary_color_match < 0.75 and
                    hex_match < 0.45 and
                    self._non_neutral_color_overlap(query_colors_set, payload_colors) == 0.0
                )
                if no_real_color_alignment:
                    final_score *= 0.2

            ranked.append(
                MatchResult(
                    product_id=int(payload.get('product_id', item.get('id', 0))),
                    score=round(final_score, 6),
                    matched_colors=matched_colors,
                    similarity=round(vector_similarity, 6)
                )
            )

        ranked.sort(key=lambda x: x.score, reverse=True)
        return ranked[:top_k]

    @staticmethod
    def _normalize_similarity(similarity: float) -> float:
        score = float(similarity)
        if score < 0:
            score = (score + 1.0) / 2.0
        return max(0.0, min(score, 1.0))

    @classmethod
    def _color_match_score(cls, query_colors: set[str], payload_colors: list[str]) -> float:
        if not query_colors or not payload_colors:
            return 0.0

        payload_set = set(payload_colors)
        overlap = query_colors.intersection(payload_set)
        non_neutral_overlap = {color for color in overlap if color not in cls.NEUTRAL_COLORS}
        if non_neutral_overlap:
            return len(non_neutral_overlap) / max(len({c for c in query_colors if c not in cls.NEUTRAL_COLORS}) or 1, 1)

        neutral_overlap = overlap.intersection(cls.NEUTRAL_COLORS)
        return 0.15 if neutral_overlap else 0.0

    @classmethod
    def _non_neutral_color_overlap(cls, query_colors: set[str], payload_colors: list[str]) -> float:
        if not query_colors or not payload_colors:
            return 0.0

        query_non_neutral = {color for color in query_colors if color not in cls.NEUTRAL_COLORS}
        payload_non_neutral = {color for color in payload_colors if color not in cls.NEUTRAL_COLORS}
        if not query_non_neutral or not payload_non_neutral:
            return 0.0

        return len(query_non_neutral.intersection(payload_non_neutral)) / max(len(query_non_neutral), 1)

    @classmethod
    def _primary_color_score(cls, query_primary: str, payload_primary: str, payload_colors: list[str]) -> float:
        if not query_primary:
            return 0.0

        if query_primary == payload_primary:
            return 1.0

        if query_primary in payload_colors:
            return 0.8

        if query_primary in cls.NEUTRAL_COLORS:
            return 0.25 if query_primary in payload_colors else 0.0

        return 0.0

    @classmethod
    def _complementary_color_score(
        cls,
        query_colors: set[str],
        complementary_colors: str | list[str],
        payload_primary: str,
        payload_colors: list[str]
    ) -> float:
        if not query_colors:
            return 0.0

        complementary_set = cls._normalize_color_values(complementary_colors)
        if not complementary_set:
            hints = {normalize_color_name(payload_primary), *payload_colors}
            hints.discard('')
            if 'green' in hints:
                complementary_set.update({'yellow', 'red', 'white', 'gold'})
            elif 'red' in hints:
                complementary_set.update({'green', 'white', 'gold', 'pink'})
            elif 'yellow' in hints:
                complementary_set.update({'green', 'red', 'white', 'gold'})
            elif 'blue' in hints:
                complementary_set.update({'silver', 'white', 'gold'})
            elif 'pink' in hints:
                complementary_set.update({'gold', 'white', 'red'})

        if not complementary_set:
            return 0.0

        intersection = query_colors.intersection(complementary_set)
        return len(intersection) / max(len(query_colors), 1)

    @classmethod
    def _hex_match_score(cls, query_hex_values: list[str], payload_hex_values: str | list[str] | None) -> float:
        normalized_payload_hex = cls._normalize_hex_values(payload_hex_values)
        if not query_hex_values or not normalized_payload_hex:
            return 0.0

        best_score = 0.0
        for source_hex in query_hex_values:
            source_rgb = cls._hex_to_rgb(source_hex)
            if source_rgb is None:
                continue

            for target_hex in normalized_payload_hex:
                target_rgb = cls._hex_to_rgb(target_hex)
                if target_rgb is None:
                    continue

                distance = sum((a - b) ** 2 for a, b in zip(source_rgb, target_rgb)) ** 0.5
                closeness = max(0.0, 1.0 - (distance / 441.67295593))
                if closeness > best_score:
                    best_score = closeness

        return best_score

    @staticmethod
    def _normalize_text_values(value: str | list[str] | None) -> set[str]:
        if isinstance(value, list):
            return {str(item).strip().lower() for item in value if str(item).strip()}

        if not value:
            return set()

        return {
            item.strip().lower()
            for item in str(value).replace('|', ',').split(',')
            if item.strip()
        }

    @staticmethod
    def _normalize_color_values(value: str | list[str] | None) -> set[str]:
        if isinstance(value, list):
            return {
                normalize_color_name(str(item))
                for item in value
                if str(item).strip() and normalize_color_name(str(item))
            }

        if not value:
            return set()

        return {
            normalize_color_name(item)
            for item in str(value).replace('|', ',').split(',')
            if item.strip() and normalize_color_name(item)
        }

    @staticmethod
    def _normalize_hex_values(value: str | list[str] | None) -> list[str]:
        if isinstance(value, list):
            raw_values = [str(item or '').strip().upper() for item in value]
        elif value:
            raw_values = [item.strip().upper() for item in str(value).replace('|', ',').split(',')]
        else:
            raw_values = []

        normalized: list[str] = []
        for item in raw_values:
            if re.fullmatch(r'#[0-9A-F]{6}', item) and item not in normalized:
                normalized.append(item)
        return normalized

    @staticmethod
    def _hex_to_rgb(value: str) -> tuple[int, int, int] | None:
        if not re.fullmatch(r'#[0-9A-Fa-f]{6}', str(value or '').strip()):
            return None
        hex_value = value.strip().lstrip('#')
        return tuple(int(hex_value[index:index + 2], 16) for index in (0, 2, 4))

    @classmethod
    def _design_match_score(
        cls,
        query_design: set[str],
        query_style: set[str],
        payload_design: str | list[str],
        payload_style: str | list[str]
    ) -> float:
        score = 0.0
        payload_design_values = cls._normalize_text_values(payload_design)
        payload_style_values = cls._normalize_text_values(payload_style)

        if query_design and payload_design_values:
            score += 0.6 * (len(query_design.intersection(payload_design_values)) / max(len(query_design), 1))
        if query_style and payload_style_values:
            score += 0.4 * (len(query_style.intersection(payload_style_values)) / max(len(query_style), 1))
        return min(score, 1.0)
