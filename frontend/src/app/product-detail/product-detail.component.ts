import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from '../services/cart.service';
import { ProductCatalogService, CatalogProduct, CatalogProductImage, CatalogRecentReview } from '../services/product-catalog.service';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  product: CatalogProduct | null = null;
  isLoading = true;
  errorMessage = '';
  selectedImageUrl = '';
  isZooming = false;
  zoomOrigin = '50% 50%';
  quantity = 0;
  readonly starIndices = [1, 2, 3, 4, 5];

  private readonly subscriptions = new Subscription();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly productCatalogService: ProductCatalogService,
    private readonly cartService: CartService,
    private readonly wishlistService: WishlistService
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.route.paramMap.subscribe((params) => {
        const productId = Number(params.get('id'));
        if (!Number.isInteger(productId) || productId <= 0) {
          this.isLoading = false;
          this.errorMessage = 'Invalid product link.';
          return;
        }

        this.loadProduct(productId);
      })
    );

    this.subscriptions.add(
      this.cartService.cartItems$.subscribe(() => {
        this.syncQuantityFromCart();
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  get galleryImages(): CatalogProductImage[] {
    return this.product?.images || [];
  }

  get roundedRating(): number {
    return Math.round(this.product?.rating || 0);
  }

  get hasReviews(): boolean {
    return Number(this.product?.reviews) > 0;
  }

  get currentImage(): string {
    return this.selectedImageUrl || this.product?.image_url || '';
  }

  get isWishlisted(): boolean {
    return this.product ? this.wishlistService.isInWishlist(this.product.id) : false;
  }

  get recentReviews(): CatalogRecentReview[] {
    return this.product?.recent_reviews || [];
  }

  get reviewBreakdownEntries(): Array<{ stars: number; count: number; percent: number }> {
    const totalReviews = Math.max(1, Number(this.product?.reviews) || 0);
    const breakdown = this.product?.review_breakdown || {};

    return [5, 4, 3, 2, 1].map((stars) => {
      const count = Number(breakdown[stars]) || 0;
      return {
        stars,
        count,
        percent: this.hasReviews ? Math.round((count / totalReviews) * 100) : 0
      };
    });
  }

  buildReviewStars(value: number): string {
    const safeValue = Math.max(0, Math.min(5, Math.round(Number(value) || 0)));
    return '★'.repeat(safeValue) + '☆'.repeat(5 - safeValue);
  }

  selectImage(imageUrl: string): void {
    this.selectedImageUrl = imageUrl;
    this.isZooming = false;
    this.zoomOrigin = '50% 50%';
  }

  onImageMove(event: MouseEvent): void {
    const target = event.currentTarget as HTMLElement | null;
    if (!target) {
      return;
    }

    const rect = target.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    this.zoomOrigin = `${Math.min(100, Math.max(0, x))}% ${Math.min(100, Math.max(0, y))}%`;
    this.isZooming = true;
  }

  onImageLeave(): void {
    this.isZooming = false;
    this.zoomOrigin = '50% 50%';
  }

  addToCart(): void {
    if (!this.product) {
      return;
    }

    this.cartService.addToCart({
      id: this.product.id,
      name: this.product.name,
      image: this.currentImage || this.product.image_url,
      price: this.product.price
    });
    
    this.syncQuantityFromCart();
  }

  onIncrement(): void {
    if (!this.product) return;
    this.cartService.updateQuantity(this.product.id, this.quantity + 1);
  }

  onDecrement(): void {
    if (!this.product) return;
    if (this.quantity > 1) {
      this.cartService.updateQuantity(this.product.id, this.quantity - 1);
    } else if (this.quantity === 1) {
      this.cartService.removeFromCart(this.product.id);
    }
  }

  private syncQuantityFromCart(): void {
    if (!this.product) return;
    const cartItems = this.cartService.getCartItemsSnapshot();
    const cartItem = cartItems.find(item => item.id === this.product!.id);
    this.quantity = cartItem?.quantity || 0;
  }

  addToWishlist(): void {
    if (!this.product) {
      return;
    }

    this.wishlistService.addToWishlist({
      id: this.product.id,
      name: this.product.name,
      image: this.currentImage || this.product.image_url,
      price: this.product.price,
      rating: this.product.rating,
      reviews: this.product.reviews
    });
  }

  trackByImage(index: number, image: CatalogProductImage): string {
    return String(image.id || image.image_url || index);
  }

  private loadProduct(productId: number): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.product = null;
    this.selectedImageUrl = '';

    this.subscriptions.add(
      this.productCatalogService.getProduct(productId).subscribe({
        next: (product) => {
          this.product = product;
          const primaryImage = product.images.find((image) => image.is_primary_image)?.image_url;
          this.selectedImageUrl = primaryImage || product.image_url;
          this.syncQuantityFromCart();
          this.isLoading = false;
        },
        error: (error) => {
          this.errorMessage = error?.error?.message || 'Unable to load this product right now.';
          this.isLoading = false;
        }
      })
    );
  }
}