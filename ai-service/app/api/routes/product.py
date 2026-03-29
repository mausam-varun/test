import logging

from fastapi import APIRouter, Depends, File, Form, HTTPException, UploadFile, status

from app.api.dependencies import get_product_processor
from app.models.schemas import DeleteProductResponse, MatchResult, ProcessProductRequest, ProcessProductResponse
from app.services.image_service import ImageDownloadError
from app.services.product_processor import ProductProcessor

logger = logging.getLogger(__name__)
router = APIRouter()


@router.post('/process-product', response_model=ProcessProductResponse)
async def process_product(
    request_data: ProcessProductRequest,
    processor: ProductProcessor = Depends(get_product_processor)
) -> ProcessProductResponse:
    try:
        result = await processor.process(request_data)
        return ProcessProductResponse(**result)
    except ImageDownloadError as exc:
        logger.warning('Image processing failed for product_id=%s: %s', request_data.product_id, str(exc))
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(exc)
        ) from exc
    except Exception as exc:
        logger.exception('Unhandled processing failure for product_id=%s', request_data.product_id)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail='Failed to process product'
        ) from exc


@router.delete('/products/{product_id}', response_model=DeleteProductResponse)
async def delete_product(
    product_id: int,
    processor: ProductProcessor = Depends(get_product_processor)
) -> DeleteProductResponse:
    if product_id <= 0:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail='product_id must be greater than 0'
        )

    try:
        result = await processor.delete(product_id)
        return DeleteProductResponse(**result)
    except Exception as exc:
        logger.exception('Vector deletion failed for product_id=%s', product_id)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail='Failed to delete product vector'
        ) from exc


@router.post('/match-bangles', response_model=list[MatchResult])
async def match_bangles(
    image_url: str | None = Form(default=None),
    image_file: UploadFile | None = File(default=None),
    design: str | None = Form(default=None),
    style: str | None = Form(default=None),
    processor: ProductProcessor = Depends(get_product_processor)
) -> list[MatchResult]:
    if not image_url and image_file is None:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail='Provide either image_url or image_file'
        )

    image_bytes = await image_file.read() if image_file else None

    try:
        results = await processor.match(
            image_url=image_url,
            image_bytes=image_bytes,
            design=design,
            style=style
        )
        return [MatchResult(**item) for item in results]
    except ImageDownloadError as exc:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(exc)
        ) from exc
    except ValueError as exc:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(exc)
        ) from exc
    except Exception as exc:
        logger.exception('Hybrid match failed: %s', str(exc))
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail='Failed to match bangles'
        ) from exc
