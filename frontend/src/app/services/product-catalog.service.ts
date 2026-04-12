import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { API_ENDPOINTS } from '../config/app-config';

export interface CatalogProductImage {
  id?: number;
  image_url: string;
  is_primary_image: boolean;
}

export interface CatalogProductColor {
  id?: number;
  name: string;
  hex?: string | null;
}

export interface CatalogProductAttributes {
  product_type?: string;
  category?: string;
  sub_category?: string;
  primary_color?: string;
  secondary_colors?: string[];
  color_family?: string[];
  material_estimated?: string[];
  finish?: string;
  style?: string[];
  occasion?: string[];
  pattern?: string[];
  design_elements?: string[];
  embellishments?: string[];
  craft_type?: string[];
  texture?: string;
  visual_density?: string;
  shape?: string;
  usage?: string[];
  aesthetic_tags?: string[];
  cultural_inference?: string;
  quality_inference?: string;
}

export interface CatalogRecentReview {
  id: number;
  rating: number;
  emotion: string;
  review_text: string;
  customer_name: string;
  created_at: string;
  images: string[];
}

interface ApiCatalogProduct {
  id: number;
  name: string;
  price: number | string;
  category: string;
  description: string;
  image_url: string;
  rating?: number | string;
  reviews?: number | string;
  review_breakdown?: Partial<Record<1 | 2 | 3 | 4 | 5, number>> | Record<string, number>;
  recent_reviews?: CatalogRecentReview[];
  primary_image_id?: number | null;
  images?: CatalogProductImage[];
  colors?: string[];
  color_details?: CatalogProductColor[];
  color_hex?: string[];
  attributes?: CatalogProductAttributes;
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
  review_breakdown: Record<number, number>;
  recent_reviews: CatalogRecentReview[];
  colors: string[];
  color_details: CatalogProductColor[];
  attributes: CatalogProductAttributes;
  material: string;
  popularity: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductCatalogService {
  private readonly apiBaseUrl = API_ENDPOINTS.products;

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
    const colorDetails = this.normalizeColorDetails(product.color_details, product.colors);
    const attributes = this.normalizeAttributes(product.attributes, product.colors, safeDescription, product.category);

    return {
      id: Number(product.id),
      name: String(product.name || '').trim(),
      price: Number(product.price) || 0,
      category: String(product.category || 'Handmade').trim() || 'Handmade',
      description: safeDescription,
      image_url: primaryImage?.image_url || String(product.image_url || '').trim(),
      primary_image_id: product.primary_image_id ?? (primaryImage?.id ?? null),
      images,
      rating: Number(product.rating) || 0,
      reviews: Number(product.reviews) || 0,
      review_breakdown: this.normalizeReviewBreakdown(product.review_breakdown),
      recent_reviews: Array.isArray(product.recent_reviews) ? product.recent_reviews : [],
      colors: colorDetails.map((color) => color.name),
      color_details: colorDetails,
      attributes,
      material: attributes.material_estimated?.[0] || this.inferMaterial(product.category, safeDescription),
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

  private buildPopularity(productId: number): number {
    return 70 + (productId % 25);
  }

  private normalizeColorDetails(colorDetails: CatalogProductColor[] | undefined, fallbackColors: string[] | undefined): CatalogProductColor[] {
    const details = Array.isArray(colorDetails)
      ? colorDetails
          .filter((color) => Boolean(color?.name))
          .map((color) => ({
            id: color.id,
            name: String(color.name).trim(),
            hex: color.hex || null
          }))
      : [];

    if (details.length) {
      return details;
    }

    return Array.isArray(fallbackColors)
      ? fallbackColors
          .map((color) => String(color || '').trim())
          .filter(Boolean)
          .map((name) => ({ name, hex: null }))
      : [];
  }

  private normalizeAttributes(
    attributes: CatalogProductAttributes | undefined,
    fallbackColors: string[] | undefined,
    description: string,
    category: string
  ): CatalogProductAttributes {
    const safe = attributes || {};
    const colors = Array.isArray(fallbackColors)
      ? fallbackColors.map((color) => String(color || '').trim()).filter(Boolean)
      : [];

    return {
      product_type: String(safe.product_type || '').trim(),
      category: String(safe.category || category || '').trim(),
      sub_category: String(safe.sub_category || '').trim(),
      primary_color: String(safe.primary_color || colors[0] || '').trim(),
      secondary_colors: Array.isArray(safe.secondary_colors)
        ? safe.secondary_colors.map((item) => String(item || '').trim()).filter(Boolean)
        : colors.slice(1),
      color_family: Array.isArray(safe.color_family) ? safe.color_family.map((item) => String(item || '').trim()).filter(Boolean) : [],
      material_estimated: Array.isArray(safe.material_estimated) && safe.material_estimated.length
        ? safe.material_estimated.map((item) => String(item || '').trim()).filter(Boolean)
        : [this.inferMaterial(category, description)],
      finish: String(safe.finish || '').trim(),
      style: Array.isArray(safe.style) ? safe.style.map((item) => String(item || '').trim()).filter(Boolean) : [],
      occasion: Array.isArray(safe.occasion) ? safe.occasion.map((item) => String(item || '').trim()).filter(Boolean) : [],
      pattern: Array.isArray(safe.pattern) ? safe.pattern.map((item) => String(item || '').trim()).filter(Boolean) : [],
      design_elements: Array.isArray(safe.design_elements) ? safe.design_elements.map((item) => String(item || '').trim()).filter(Boolean) : [],
      embellishments: Array.isArray(safe.embellishments) ? safe.embellishments.map((item) => String(item || '').trim()).filter(Boolean) : [],
      craft_type: Array.isArray(safe.craft_type) ? safe.craft_type.map((item) => String(item || '').trim()).filter(Boolean) : [],
      texture: String(safe.texture || '').trim(),
      visual_density: String(safe.visual_density || '').trim(),
      shape: String(safe.shape || '').trim(),
      usage: Array.isArray(safe.usage) ? safe.usage.map((item) => String(item || '').trim()).filter(Boolean) : [],
      aesthetic_tags: Array.isArray(safe.aesthetic_tags) ? safe.aesthetic_tags.map((item) => String(item || '').trim()).filter(Boolean) : [],
      cultural_inference: String(safe.cultural_inference || '').trim(),
      quality_inference: String(safe.quality_inference || '').trim()
    };
  }

  private normalizeReviewBreakdown(breakdown: ApiCatalogProduct['review_breakdown']): Record<number, number> {
    return {
      5: Number(breakdown?.[5] ?? (breakdown as Record<string, number> | undefined)?.['5'] ?? 0) || 0,
      4: Number(breakdown?.[4] ?? (breakdown as Record<string, number> | undefined)?.['4'] ?? 0) || 0,
      3: Number(breakdown?.[3] ?? (breakdown as Record<string, number> | undefined)?.['3'] ?? 0) || 0,
      2: Number(breakdown?.[2] ?? (breakdown as Record<string, number> | undefined)?.['2'] ?? 0) || 0,
      1: Number(breakdown?.[1] ?? (breakdown as Record<string, number> | undefined)?.['1'] ?? 0) || 0
    };
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