import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

export interface CatalogProductImage {
  id?: number;
  image_url: string;
  is_primary_image: boolean;
}

interface ApiCatalogProduct {
  id: number;
  name: string;
  price: number | string;
  category: string;
  description: string;
  image_url: string;
  primary_image_id?: number | null;
  images?: CatalogProductImage[];
}

export interface CatalogProduct {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  image_url: string;
  primary_image_id: number | null;
  images: CatalogProductImage[];
  rating: number;
  reviews: number;
  material: string;
  popularity: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductCatalogService {
  private readonly apiBaseUrl = 'http://localhost:5001/api/products';

  constructor(private readonly http: HttpClient) {}

  getProducts(): Observable<CatalogProduct[]> {
    return this.http.get<ApiCatalogProduct[]>(this.apiBaseUrl).pipe(
      map((products) => (Array.isArray(products) ? products : []).map((product) => this.enrichProduct(product)))
    );
  }

  getProduct(productId: number): Observable<CatalogProduct> {
    return this.http.get<ApiCatalogProduct>(`${this.apiBaseUrl}/${productId}`).pipe(
      map((product) => this.enrichProduct(product))
    );
  }

  private enrichProduct(product: ApiCatalogProduct): CatalogProduct {
    const images = this.normalizeImages(product.images, product.image_url);
    const primaryImage = images.find((image) => image.is_primary_image) || images[0];
    const safeDescription = String(product.description || '').trim() || 'Handcrafted with care for festive and everyday styling.';

    return {
      id: Number(product.id),
      name: String(product.name || '').trim(),
      price: Number(product.price) || 0,
      category: String(product.category || 'Handmade').trim() || 'Handmade',
      description: safeDescription,
      image_url: primaryImage?.image_url || String(product.image_url || '').trim(),
      primary_image_id: product.primary_image_id ?? (primaryImage?.id ?? null),
      images,
      rating: this.buildRating(Number(product.id)),
      reviews: this.buildReviewCount(Number(product.id)),
      material: this.inferMaterial(product.category, safeDescription),
      popularity: this.buildPopularity(Number(product.id))
    };
  }

  private normalizeImages(images: CatalogProductImage[] | undefined, fallbackImageUrl: string): CatalogProductImage[] {
    const safeImages = Array.isArray(images)
      ? images
          .filter((image) => Boolean(image?.image_url))
          .map((image, index) => ({
            id: image.id,
            image_url: String(image.image_url).trim(),
            is_primary_image: index === 0 ? Boolean(image.is_primary_image) || !images.some((item) => item?.is_primary_image) : Boolean(image.is_primary_image)
          }))
      : [];

    if (safeImages.length) {
      return safeImages;
    }

    const safeFallback = String(fallbackImageUrl || '').trim();
    if (!safeFallback) {
      return [];
    }

    return [{ image_url: safeFallback, is_primary_image: true }];
  }

  private buildRating(productId: number): number {
    return Number((4.1 + ((productId % 7) * 0.12)).toFixed(1));
  }

  private buildReviewCount(productId: number): number {
    return 18 + (productId * 9);
  }

  private buildPopularity(productId: number): number {
    return 70 + (productId % 25);
  }

  private inferMaterial(category: string, description: string): string {
    const source = `${category} ${description}`.toLowerCase();

    if (source.includes('silk')) return 'Silk Thread';
    if (source.includes('gold')) return 'Gold Finish';
    if (source.includes('silver')) return 'Silver Finish';
    if (source.includes('brass')) return 'Brass';
    if (source.includes('terracotta')) return 'Terracotta';
    if (source.includes('wood')) return 'Wood';

    return 'Handcrafted';
  }
}