from app.models.schemas import MatchResult


class RankingService:
    VECTOR_WEIGHT = 0.7
    COLOR_WEIGHT = 0.2
    DESIGN_WEIGHT = 0.1

    def rank(
        self,
        candidates: list[dict],
        query_colors: list[str],
        query_design: str | None,
        query_style: str | None,
        top_k: int = 10
    ) -> list[MatchResult]:
        query_colors_set = {c.lower() for c in query_colors if c}
        normalized_design = (query_design or '').strip().lower()
        normalized_style = (query_style or '').strip().lower()

        ranked: list[MatchResult] = []
        for item in candidates:
            payload = item.get('payload') or {}
            vector_similarity = self._normalize_similarity(item.get('similarity', 0.0))

            payload_colors = [c.lower() for c in payload.get('colors', []) if isinstance(c, str)]
            matched_colors = sorted(query_colors_set.intersection(payload_colors))
            color_match = self._color_match_score(query_colors_set, payload_colors)

            design_match = self._design_match_score(
                normalized_design,
                normalized_style,
                str(payload.get('design', '')).lower(),
                str(payload.get('style', '')).lower()
            )

            final_score = (
                self.VECTOR_WEIGHT * vector_similarity +
                self.COLOR_WEIGHT * color_match +
                self.DESIGN_WEIGHT * design_match
            )

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

    @staticmethod
    def _color_match_score(query_colors: set[str], payload_colors: list[str]) -> float:
        if not query_colors or not payload_colors:
            return 0.0

        payload_set = set(payload_colors)
        intersection = query_colors.intersection(payload_set)
        return len(intersection) / max(len(query_colors), 1)

    @staticmethod
    def _design_match_score(
        query_design: str,
        query_style: str,
        payload_design: str,
        payload_style: str
    ) -> float:
        score = 0.0
        if query_design and payload_design and query_design == payload_design:
            score += 0.6
        if query_style and payload_style and query_style == payload_style:
            score += 0.4
        return min(score, 1.0)
