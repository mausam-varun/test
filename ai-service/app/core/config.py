from functools import lru_cache

from pydantic import Field
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file='.env', env_file_encoding='utf-8', extra='ignore')

    app_name: str = Field(default='DivaraCraft AI Service', alias='APP_NAME')
    app_host: str = Field(default='0.0.0.0', alias='APP_HOST')
    app_port: int = Field(default=8000, alias='APP_PORT')
    app_debug: bool = Field(default=False, alias='APP_DEBUG')

    clip_model_name: str = Field(default='openai/clip-vit-base-patch32', alias='CLIP_MODEL_NAME')

    qdrant_url: str = Field(default='http://localhost:6333', alias='QDRANT_URL')
    qdrant_api_key: str | None = Field(default=None, alias='QDRANT_API_KEY')
    qdrant_collection: str = Field(default='bangles', alias='QDRANT_COLLECTION')

    http_request_timeout: int = Field(default=15, alias='HTTP_REQUEST_TIMEOUT')


@lru_cache
def get_settings() -> Settings:
    return Settings()
