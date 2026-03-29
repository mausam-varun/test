from typing import Literal

from pydantic import BaseModel, Field, HttpUrl, model_validator


COLOR_ALIASES = {
    'leaf': 'green',
    'olive': 'green',
    'lime': 'green',
    'mint': 'green',
    'emerald': 'green',
    'forest': 'green',
    'sage': 'green',
    'cream': 'white',
    'ivory': 'white',
    'offwhite': 'white',
    'off_white': 'white',
    'beige': 'white',
    'charcoal': 'gray',
    'grey': 'gray',
    'ash': 'gray',
    'metallic': 'silver'
}


def normalize_color_name(value: str) -> str:
    normalized = ''.join(ch for ch in value.strip().lower() if ch.isalpha())
    if not normalized:
        return ''
    return COLOR_ALIASES.get(normalized, normalized)


class DominantColor(BaseModel):
    name: str
    hex: str


class ProductMetadata(BaseModel):
    colors: list[str] = Field(default_factory=list)
    color_hex: list[str] = Field(default_factory=list)
    category: Literal['bangles'] = 'bangles'
    size: str = Field(default='')
    design: list[str] = Field(default_factory=list)
    pattern: list[str] = Field(default_factory=list)
    style: list[str] = Field(default_factory=list)
    material: list[str] = Field(default_factory=list)

    @model_validator(mode='after')
    def normalize_colors(self) -> 'ProductMetadata':
        # Normalize color names in the colors list
        normalized = []
        for color in self.colors:
            if color and color.strip():
                canonical = normalize_color_name(color)
                if canonical and canonical not in normalized:
                    normalized.append(canonical)
        
        self.colors = normalized[:3]  # Limit to 3 colors
        
        # Ensure color_hex has matching length (pad with empty if needed)
        while len(self.color_hex) < len(self.colors):
            self.color_hex.append('')
        self.color_hex = self.color_hex[:len(self.colors)]
        
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
