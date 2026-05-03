import { Component, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { API_ENDPOINTS } from '../../config/app-config';
import { WishlistService } from '../../services/wishlist.service';
import { CartService } from '../../services/cart.service';

const STORAGE_KEY = 'divara_ai_match_state';

@Component({
  selector: 'app-smart-bangle-matcher',
  templateUrl: './smart-bangle-matcher.component.html',
  styleUrls: ['./smart-bangle-matcher.component.scss']
})
export class SmartBangleMatcherComponent implements OnDestroy {
  private destroy$ = new Subject<void>();
  private readonly productsApi = API_ENDPOINTS.products;

  // Upload state
  uploadedImage: string | null = null;
  selectedDressImage: File | null = null;
  selectedDressImagePreview: string | null = null;

  // Match results
  isMatching = false;
  matchError = '';
  matchedProducts: any[] = [];
  detectedDetails: any = null;
  generatedBangleImageUrl: string | null = null;

  // Legacy simple-match results (used by old performAIMatch path)
  matchResults: any[] = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private wishlistService: WishlistService,
    private cartService: CartService
  ) {
    this.restoreState();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // ── State persistence ─────────────────────────────────────────────────────

  private restoreState(): void {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) return;
      const s = JSON.parse(saved);
      this.selectedDressImagePreview = s.selectedDressImagePreview || null;
      this.uploadedImage              = s.selectedDressImagePreview || null;
      this.matchedProducts            = s.matchedProducts || [];
      this.detectedDetails            = s.detectedDetails || null;
      this.generatedBangleImageUrl    = s.generatedBangleImageUrl || null;
    } catch { /* ignore corrupt data */ }
  }

  private saveState(): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        selectedDressImagePreview: this.selectedDressImagePreview,
        matchedProducts:           this.matchedProducts,
        detectedDetails:           this.detectedDetails,
        generatedBangleImageUrl:   this.generatedBangleImageUrl
      }));
    } catch { /* ignore */ }
  }

  private clearState(): void {
    try { localStorage.removeItem(STORAGE_KEY); } catch { }
  }

  // ── Image selection ───────────────────────────────────────────────────────

  onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file  = input.files?.[0] || null;

    this.matchError              = '';
    this.matchedProducts         = [];
    this.matchResults            = [];
    this.detectedDetails         = null;
    this.generatedBangleImageUrl = null;
    this.clearState();

    if (!file) {
      this.selectedDressImage        = null;
      this.selectedDressImagePreview = null;
      this.uploadedImage             = null;
      return;
    }

    const allowed = ['image/jpeg', 'image/png', 'image/webp'];
    if (!allowed.includes(file.type)) {
      this.matchError = 'Please upload a JPG, PNG, or WEBP image.';
      input.value = '';
      return;
    }

    this.selectedDressImage = file;

    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.uploadedImage             = e.target.result;
      this.selectedDressImagePreview = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  // ── AI matching (primary flow via AI service) ─────────────────────────────

  findMatchingBangles(): void {
    if (!this.selectedDressImage) {
      this.matchError = 'Please choose a dress image first.';
      return;
    }

    this.isMatching              = true;
    this.matchError              = '';
    this.matchedProducts         = [];
    this.detectedDetails         = null;
    this.generatedBangleImageUrl = null;

    const formData = new FormData();
    formData.append('image_file', this.selectedDressImage);

    this.http.post<any>(`${this.productsApi}/match-bangles`, formData)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          const safeMatches        = Array.isArray(response) ? response : (response?.matches || []);
          const generatedB64       = Array.isArray(response) ? null : (response?.generated_image_base64 || null);
          this.generatedBangleImageUrl = generatedB64 ? `data:image/png;base64,${generatedB64}` : null;
          this.detectedDetails         = Array.isArray(response)
            ? (safeMatches[0]?.payload || null)
            : (response?.query_metadata || safeMatches[0]?.payload || null);

          if (!safeMatches.length) {
            this.isMatching  = false;
            this.matchError  = this.generatedBangleImageUrl
              ? 'No direct vector match found. Showing AI-generated bangle concept.'
              : 'No similar bangles found for this image.';
            return;
          }
          this.loadMatchedProductCards(safeMatches);
        },
        error: (err) => {
          this.isMatching = false;
          this.matchError = err?.error?.message || 'Failed to find matching bangles. Please try again.';
        }
      });
  }

  private loadMatchedProductCards(matches: any[]): void {
    const productIds = matches.map((m: any) => m.product_id || m.id).filter(Boolean);
    if (!productIds.length) { this.isMatching = false; return; }

    this.http.get<any>(this.productsApi)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (allProducts) => {
          const products    = Array.isArray(allProducts) ? allProducts : allProducts?.data || [];
          const productsMap = new Map(products.map((p: any) => [p.id, p]));

          this.matchedProducts = productIds
            .map((id: any) => {
              const p: any = productsMap.get(id);
              if (!p) return null;
              return {
                id:       p.id || 0,
                name:     p.name || '',
                price:    p.price || 0,
                imageUrl: (p.image_url || p.images?.[0]?.image_url || 'assets/placeholder.png') as string,
                rating:   p.rating || 0,
                reviews:  p.reviews || 0
              };
            })
            .filter(Boolean);

          this.isMatching = false;
          this.saveState();
        },
        error: () => {
          this.isMatching = false;
          this.matchError = 'Failed to load product details.';
        }
      });
  }

  // ── Helpers ───────────────────────────────────────────────────────────────

  similarityPercent(value: number): number {
    return Math.max(0, Math.min(100, Math.round((value || 0) * 100)));
  }

  navigateToProduct(productId: number): void {
    this.router.navigate(['/product', productId]);
  }

  isWishlisted(id: number): boolean {
    return this.wishlistService.isInWishlist(id);
  }

  toggleWishlist(product: any): void {
    if (this.isWishlisted(product.id)) {
      this.wishlistService.removeFromWishlist(product.id);
    } else {
      this.wishlistService.addToWishlist({
        id:      product.id,
        name:    product.name,
        image:   product.imageUrl || product.image || '',
        price:   product.price,
        rating:  product.rating,
        reviews: product.reviews
      });
    }
  }

  addMatchedToCart(product: any): void {
    this.cartService.addToCart({
      id:    product.id,
      name:  product.name,
      price: product.price,
      image: product.imageUrl || product.image || ''
    });
  }

  trackById(_: number, item: any): number { return item.id; }
}
