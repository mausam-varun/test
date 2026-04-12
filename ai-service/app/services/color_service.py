import cv2
import numpy as np
import webcolors
from PIL import Image

from app.models.schemas import COLOR_ALIASES, DominantColor, normalize_color_name


PALETTE = {
    'red': (220, 20, 60),
    'maroon': (128, 0, 0),
    'orange': (255, 140, 0),
    'yellow': (255, 215, 0),
    'gold': (212, 175, 55),
    'green': (34, 139, 34),
    'teal': (0, 128, 128),
    'blue': (65, 105, 225),
    'navy': (0, 0, 128),
    'purple': (128, 0, 128),
    'pink': (255, 105, 180),
    'brown': (139, 69, 19),
    'black': (20, 20, 20),
    'white': (245, 245, 245),
    'gray': (128, 128, 128),
    'silver': (192, 192, 192)
}


class ColorService:
    NEUTRAL_COLOR_NAMES = {'white', 'gray', 'silver', 'black'}

    @staticmethod
    def extract_dominant_colors(image: Image.Image, top_k: int = 3) -> list[DominantColor]:
        np_img = np.array(image.convert('RGB'))
        rgb_pixels = np_img.reshape((-1, 3)).astype(np.uint8)
        hsv_pixels = cv2.cvtColor(np_img, cv2.COLOR_RGB2HSV).reshape((-1, 3))

        saturation = hsv_pixels[:, 1]
        brightness = hsv_pixels[:, 2]
        colorful_mask = (saturation >= 40) | (brightness <= 235)
        filtered_pixels = rgb_pixels[colorful_mask]

        if filtered_pixels.shape[0] < max(300, top_k * 60):
            filtered_pixels = rgb_pixels

        pixels = filtered_pixels.astype(np.float32)
        unique_pixels = np.unique(filtered_pixels, axis=0)
        clusters = int(max(1, min(top_k, len(unique_pixels))))

        criteria = (cv2.TERM_CRITERIA_EPS + cv2.TERM_CRITERIA_MAX_ITER, 20, 0.2)
        _, labels, centers = cv2.kmeans(
            pixels,
            clusters,
            None,
            criteria,
            5,
            cv2.KMEANS_PP_CENTERS
        )

        counts = np.bincount(labels.flatten(), minlength=clusters)
        sorted_idx = np.argsort(-counts)

        color_candidates: list[tuple[int, DominantColor]] = []
        seen_names: set[str] = set()
        for idx in sorted_idx:
            rgb = tuple(int(v) for v in centers[idx])
            nearest = ColorService._nearest_color_name(rgb)
            nearest_hex = ColorService._rgb_to_hex(rgb)

            if nearest in seen_names:
                continue

            seen_names.add(nearest)
            color_candidates.append((
                int(counts[idx]),
                DominantColor(name=nearest, hex=nearest_hex)
            ))

        color_candidates.sort(
            key=lambda item: (
                ColorService._is_neutral_color(item[1].name),
                -item[0]
            )
        )

        return [color for _, color in color_candidates[:top_k]]

    @staticmethod
    def _is_neutral_color(color_name: str) -> bool:
        return normalize_color_name(color_name) in ColorService.NEUTRAL_COLOR_NAMES

    @staticmethod
    def _nearest_color_name(rgb: tuple[int, int, int]) -> str:
        target = np.array(rgb, dtype=np.float32)
        best_name = 'unknown'
        best_distance = float('inf')

        for name, palette_rgb in PALETTE.items():
            dist = np.linalg.norm(target - np.array(palette_rgb, dtype=np.float32))
            if dist < best_distance:
                best_distance = dist
                best_name = name

        return best_name

    @staticmethod
    def resolve_color_codes(color_names: list[str]) -> list[dict]:
        resolved: list[dict] = []
        seen: set[str] = set()

        for raw_name in color_names or []:
            canonical = normalize_color_name(str(raw_name or ''))
            if not canonical or canonical in seen:
                continue

            seen.add(canonical)
            hex_value = ColorService._resolve_hex_from_name(canonical)
            resolved.append({
                'color_name': canonical,
                'color_code': hex_value
            })

        return resolved

    @staticmethod
    def _resolve_hex_from_name(color_name: str) -> str:
        aliases = [color_name]
        for alias, mapped in COLOR_ALIASES.items():
            if mapped == color_name:
                aliases.append(alias)

        for candidate in aliases:
            try:
                return webcolors.name_to_hex(candidate, spec=webcolors.CSS3).upper()
            except ValueError:
                continue

        palette_rgb = PALETTE.get(color_name)
        if palette_rgb:
            return ColorService._rgb_to_hex(palette_rgb)

        return '#808080'

    @staticmethod
    def _rgb_to_hex(rgb: tuple[int, int, int]) -> str:
        return '#{:02X}{:02X}{:02X}'.format(*rgb)
