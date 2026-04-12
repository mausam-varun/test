from io import BytesIO
import logging

import requests
from PIL import Image, UnidentifiedImageError
from rembg import remove as remove_background_rembg

logger = logging.getLogger(__name__)


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

    def remove_background(self, image: Image.Image, return_alpha: bool = False) -> Image.Image:
        """
        Remove background from image using rembg AI model.
        
        Args:
            image: PIL Image object
            return_alpha: If True, returns RGBA with transparent background.
                         If False, returns RGB with white background.
        
        Returns:
            PIL Image with background removed
        """
        try:
            # Convert PIL image to bytes
            img_bytes = BytesIO()
            image.save(img_bytes, format='PNG')
            img_bytes.seek(0)
            
            # Remove background
            output_bytes = remove_background_rembg(img_bytes.read())
            
            # Convert back to PIL Image
            result_image = Image.open(BytesIO(output_bytes))
            
            if return_alpha:
                # Keep RGBA (transparent background)
                return result_image.convert('RGBA')
            else:
                # Convert to RGB with white background
                if result_image.mode == 'RGBA':
                    # Create white background
                    background = Image.new('RGB', result_image.size, (255, 255, 255))
                    background.paste(result_image, mask=result_image.split()[3])
                    return background
                return result_image.convert('RGB')
        
        except Exception as e:
            logger.warning(f'Background removal failed: {str(e)}. Returning original image.')
            # Return original image if background removal fails
            return image

    def preprocess_image(self, image: Image.Image, size: tuple[int, int] = (224, 224), remove_bg: bool = False) -> Image.Image:
        """
        Preprocess image with optional background removal.
        
        Args:
            image: PIL Image object
            size: Target size for resizing
            remove_bg: If True, remove background before resizing
        
        Returns:
            Preprocessed PIL Image
        """
        if remove_bg:
            image = self.remove_background(image, return_alpha=False)
        
        return image.resize(size, Image.Resampling.BICUBIC)
