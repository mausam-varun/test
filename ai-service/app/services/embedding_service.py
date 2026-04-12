import numpy as np
import torch
from PIL import Image
from transformers import CLIPModel, CLIPTokenizerFast


class EmbeddingService:
    def __init__(self, model_name: str) -> None:
        self.model_name = model_name
        self.device = 'cuda' if torch.cuda.is_available() else 'cpu'
        self.model = CLIPModel.from_pretrained(model_name).to(self.device)
        self.tokenizer = CLIPTokenizerFast.from_pretrained(model_name)
        self.model.eval()

    def image_to_vector(self, image: Image.Image) -> list[float]:
        pixel_values = self._prepare_pixel_values(image)
        with torch.no_grad():
            image_features = self.model.get_image_features(pixel_values=pixel_values)
            image_features = torch.nn.functional.normalize(image_features, p=2, dim=1)

        vector = image_features.squeeze(0).cpu().numpy().astype(np.float32)
        return vector.tolist()

    def text_to_vector(self, text: str) -> list[float]:
        normalized_text = str(text or '').strip() or 'handcrafted bangle jewelry'
        tokenized = self.tokenizer(
            [normalized_text],
            padding=True,
            truncation=True,
            max_length=77,
            return_tensors='pt'
        ).to(self.device)

        with torch.no_grad():
            text_features = self.model.get_text_features(**tokenized)
            text_features = torch.nn.functional.normalize(text_features, p=2, dim=1)

        vector = text_features.squeeze(0).cpu().numpy().astype(np.float32)
        return vector.tolist()

    def combine_vectors(self, vectors: list[list[float]], weights: list[float] | None = None) -> list[float]:
        if weights is None:
            weights = [1.0] * len(vectors)

        valid_vectors: list[tuple[np.ndarray, float]] = []
        for index, vector in enumerate(vectors):
            if not vector:
                continue

            array = np.asarray(vector, dtype=np.float32)
            if array.size == 0:
                continue

            weight = float(weights[index]) if index < len(weights) else 1.0
            if weight <= 0:
                continue

            valid_vectors.append((array, weight))

        if not valid_vectors:
            raise ValueError('At least one embedding vector is required')

        combined = np.zeros_like(valid_vectors[0][0], dtype=np.float32)
        total_weight = 0.0
        for array, weight in valid_vectors:
            combined += array * weight
            total_weight += weight

        if total_weight > 0:
            combined = combined / total_weight

        norm = np.linalg.norm(combined)
        if norm > 0:
            combined = combined / norm

        return combined.astype(np.float32).tolist()

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
