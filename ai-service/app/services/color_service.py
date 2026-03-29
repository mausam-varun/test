import cv2
import numpy as np
from PIL import Image

from app.models.schemas import DominantColor


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
    @staticmethod
    def extract_dominant_colors(image: Image.Image, top_k: int = 3) -> list[DominantColor]:
        np_img = np.array(image.convert('RGB'))
        pixels = np_img.reshape((-1, 3)).astype(np.float32)

        unique_pixels = np.unique(pixels.astype(np.uint8), axis=0)
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

        colors: list[DominantColor] = []
        for idx in sorted_idx:
            rgb = tuple(int(v) for v in centers[idx])
            nearest = ColorService._nearest_color_name(rgb)
            nearest_hex = ColorService._rgb_to_hex(rgb)

            if nearest not in [c.name for c in colors]:
                colors.append(DominantColor(name=nearest, hex=nearest_hex))

        return colors[:top_k]

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
    def _rgb_to_hex(rgb: tuple[int, int, int]) -> str:
        return '#{:02X}{:02X}{:02X}'.format(*rgb)
