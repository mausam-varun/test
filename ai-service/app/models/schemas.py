from typing import Literal

from pydantic import BaseModel, Field, HttpUrl, model_validator


COLOR_ALIASES = {
    'leaf': 'green',
    'olive': 'green',
    'olivegreen': 'green',
    'lime': 'green',
    'mint': 'green',
    'emerald': 'green',
    'forest': 'green',
    'sage': 'green',
    'mustard': 'yellow',
    'mustardyellow': 'yellow',
    'cream': 'white',
    'ivory': 'white',
    'offwhite': 'white',
    'off_white': 'white',
    'beige': 'white',
    'pearlwhite': 'white',
    'champagne': 'gold',
    'rosegold': 'gold',
    'charcoal': 'gray',
    'grey': 'gray',
    'ash': 'gray',
    'metallic': 'silver',
    'burgundy': 'red',
    'wine': 'red',
    'maroon': 'red'
}


def normalize_color_name(value: str) -> str:
    normalized = ''.join(ch for ch in value.strip().lower() if ch.isalpha())
    if not normalized:
        return ''
    return COLOR_ALIASES.get(normalized, normalized)


class DominantColor(BaseModel):
    name: str
    hex: str


class ColorLookupRequest(BaseModel):
    colors: list[str] = Field(default_factory=list)


class ColorLookupItem(BaseModel):
    color_name: str
    color_code: str


class ProductMetadata(BaseModel):
    title: str = Field(default='')
    description: str = Field(default='')
    colors: list[str] = Field(default_factory=list)
    primary_color: str = Field(default='')
    secondary_colors: list[str] = Field(default_factory=list)
    color_hex: list[str] = Field(default_factory=list)
    category: Literal['bangles'] = 'bangles'
    size: str = Field(default='')
    design: list[str] = Field(default_factory=list)
    pattern: list[str] = Field(default_factory=list)
    style: list[str] = Field(default_factory=list)
    material: list[str] = Field(default_factory=list)
    occasion: list[str] = Field(default_factory=list)
    craft_type: list[str] = Field(default_factory=list)
    usage: list[str] = Field(default_factory=list)
    target_gender: str = Field(default='women')
    complementary_dress_colors: list[str] = Field(default_factory=list)
    matching_notes: str = Field(default='')
    semantic_query: str = Field(default='')
    price: float | None = None
    image_url: str = Field(default='')
    spec_view: str = Field(default='')
    intent_view: str = Field(default='')

    @model_validator(mode='after')
    def normalize_colors(self) -> 'ProductMetadata':
        def dedupe_strings(values: list[str]) -> list[str]:
            normalized_values: list[str] = []
            for item in values or []:
                value = str(item or '').strip()
                if value and value not in normalized_values:
                    normalized_values.append(value)
            return normalized_values

        normalized_colors: list[str] = []
        for color in self.colors:
            if color and color.strip():
                canonical = normalize_color_name(color)
                if canonical and canonical not in normalized_colors:
                    normalized_colors.append(canonical)

        primary_color = normalize_color_name(self.primary_color) if self.primary_color else ''
        if primary_color and primary_color not in normalized_colors:
            normalized_colors.insert(0, primary_color)

        normalized_secondary: list[str] = []
        for color in self.secondary_colors:
            if color and color.strip():
                canonical = normalize_color_name(color)
                if canonical and canonical != primary_color and canonical not in normalized_secondary:
                    normalized_secondary.append(canonical)
                    if canonical not in normalized_colors:
                        normalized_colors.append(canonical)

        normalized_complementary: list[str] = []
        for color in self.complementary_dress_colors:
            if color and str(color).strip():
                canonical = normalize_color_name(str(color))
                if canonical and canonical != primary_color and canonical not in normalized_complementary:
                    normalized_complementary.append(canonical)

        self.colors = normalized_colors[:5]
        self.primary_color = primary_color or (self.colors[0] if self.colors else '')
        self.secondary_colors = [color for color in normalized_secondary if color != self.primary_color][:4]
        self.complementary_dress_colors = normalized_complementary[:6]

        while len(self.color_hex) < len(self.colors):
            self.color_hex.append('')
        self.color_hex = [str(value or '').strip().upper() for value in self.color_hex[:len(self.colors)]]

        self.title = str(self.title or '').strip()
        self.description = str(self.description or '').strip()
        self.size = str(self.size or '').strip()
        self.image_url = str(self.image_url or '').strip()
        self.spec_view = str(self.spec_view or '').strip()
        self.intent_view = str(self.intent_view or '').strip()
        self.matching_notes = str(self.matching_notes or '').strip()
        self.semantic_query = str(self.semantic_query or '').strip()
        self.target_gender = str(self.target_gender or 'women').strip().lower() or 'women'

        self.design = dedupe_strings(self.design)
        self.pattern = dedupe_strings(self.pattern)
        self.style = dedupe_strings(self.style)
        self.material = dedupe_strings(self.material)
        self.occasion = dedupe_strings(self.occasion)
        self.craft_type = dedupe_strings(self.craft_type)
        self.usage = dedupe_strings(self.usage)

        if self.price is not None and self.price < 0:
            self.price = None

        return self


class ProcessProductRequest(BaseModel):
    product_id: int = Field(..., gt=0)
    image_url: HttpUrl
    metadata: ProductMetadata


class ProcessProductResponse(BaseModel):
    status: str
    product_id: int
    stored: bool
    payload: dict


class DeleteProductResponse(BaseModel):
    status: str
    product_id: int
    deleted: bool


class MatchResult(BaseModel):
    product_id: int
    score: float
    matched_colors: list[str]
    similarity: float
