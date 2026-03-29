from io import BytesIO

import requests
from PIL import Image, UnidentifiedImageError


class ImageDownloadError(Exception):
    pass


class ImageService:
    def __init__(self, timeout: int = 15) -> None:
        self.timeout = timeout

    def download_image(self, image_url: str) -> Image.Image:
        try:
            response = requests.get(image_url, timeout=self.timeout)
            response.raise_for_status()
        except requests.RequestException as exc:
            raise ImageDownloadError(f'Failed to download image from URL: {image_url}') from exc

        try:
            image = Image.open(BytesIO(response.content)).convert('RGB')
            return image
        except (UnidentifiedImageError, OSError) as exc:
            raise ImageDownloadError('Downloaded file is not a valid image') from exc

    def load_image_from_bytes(self, image_bytes: bytes) -> Image.Image:
        try:
            return Image.open(BytesIO(image_bytes)).convert('RGB')
        except (UnidentifiedImageError, OSError) as exc:
            raise ImageDownloadError('Uploaded file is not a valid image') from exc

    def preprocess_image(self, image: Image.Image, size: tuple[int, int] = (224, 224)) -> Image.Image:
        return image.resize(size, Image.Resampling.BICUBIC)
