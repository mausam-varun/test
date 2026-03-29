from contextlib import asynccontextmanager

from fastapi import FastAPI

from app.api.dependencies import get_embedding_service, get_qdrant_service
from app.api.routes.product import router as product_router
from app.core.config import get_settings
from app.core.logging import configure_logging


@asynccontextmanager
async def lifespan(_: FastAPI):
    configure_logging()

    # Warm up heavyweight dependencies once during startup.
    get_embedding_service()
    get_qdrant_service()
    yield


settings = get_settings()
app = FastAPI(
    title=settings.app_name,
    debug=settings.app_debug,
    lifespan=lifespan
)

app.include_router(product_router)


@app.get('/health')
async def health() -> dict:
    return {'status': 'ok'}
