import numpy as np
import torch
from PIL import Image
from transformers import CLIPModel


class EmbeddingService:
    def __init__(self, model_name: str) -> None:
        self.model_name = model_name
        self.device = 'cuda' if torch.cuda.is_available() else 'cpu'
        self.model = CLIPModel.from_pretrained(model_name).to(self.device)
        self.model.eval()

    def image_to_vector(self, image: Image.Image) -> list[float]:
        pixel_values = self._prepare_pixel_values(image)
        with torch.no_grad():
            image_features = self.model.get_image_features(pixel_values=pixel_values)
            image_features = torch.nn.functional.normalize(image_features, p=2, dim=1)

        vector = image_features.squeeze(0).cpu().numpy().astype(np.float32)
        return vector.tolist()

    def vector_size(self) -> int:
        projection_dim = getattr(self.model.config, 'projection_dim', None)
        if projection_dim:
            return int(projection_dim)

        return int(self.model.visual_projection.out_features)

    def _prepare_pixel_values(self, image: Image.Image) -> torch.Tensor:
        np_image = np.asarray(image.convert('RGB'), dtype=np.float32) / 255.0

        mean = np.array([0.48145466, 0.4578275, 0.40821073], dtype=np.float32)
        std = np.array([0.26862954, 0.26130258, 0.27577711], dtype=np.float32)
        normalized = (np_image - mean) / std

        chw = np.transpose(normalized, (2, 0, 1))
        tensor = torch.from_numpy(chw).unsqueeze(0).to(self.device)
        return tensor
