import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { Subscription } from 'rxjs';

interface WishlistBurstParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

export interface ProductCardModel {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  reviews: number;
}

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit, OnDestroy {
  @Input({ required: true }) product!: ProductCardModel;
  @Input() isWishlisted = false;
  @Output() add = new EventEmitter<ProductCardModel>();
  @Output() wishlist = new EventEmitter<ProductCardModel>();

  readonly starIndices = [1, 2, 3, 4, 5];

  isAdded = false;
  quantity = 0;
  isWishlistClickAnimating = false;
  wishlistBurstParticles: WishlistBurstParticle[] = [];
  private addedTextTimeoutId: ReturnType<typeof setTimeout> | null = null;
  private cartSubscription: Subscription | null = null;
  private wishlistAnimationTimeout: ReturnType<typeof setTimeout> | null = null;
  private wishlistBurstTimeout: ReturnType<typeof setTimeout> | null = null;
  private nextParticleId = 1;

  constructor(private cartService: CartService) {}

  get hasReviews(): boolean {
    return Number(this.product?.reviews) > 0;
  }

  get roundedRating(): number {
    return Math.round(Number(this.product?.rating) || 0);
  }

  ngOnInit(): void {
    this.syncQuantityFromCart();
    this.cartSubscription = this.cartService.cartItems$.subscribe(() => {
      this.syncQuantityFromCart();
    });
  }

  private syncQuantityFromCart(): void {
    const cartItems = this.cartService.getCartItemsSnapshot();
    const cartItem = cartItems.find(item => item.id === this.product.id);
    this.quantity = cartItem?.quantity || 0;
    this.isAdded = this.quantity > 0;
  }

  onAdd(): void {
    this.add.emit(this.product);
    this.isAdded = true;
  }

  onIncrement(): void {
    this.cartService.updateQuantity(this.product.id, this.quantity + 1);
  }

  onDecrement(): void {
    if (this.quantity > 1) {
      this.cartService.updateQuantity(this.product.id, this.quantity - 1);
    } else if (this.quantity === 1) {
      this.cartService.removeFromCart(this.product.id);
    }
  }

  onWishlist(): void {
    this.triggerWishlistClickAnimation();
    this.wishlist.emit(this.product);
  }

  private triggerWishlistClickAnimation(): void {
    this.isWishlistClickAnimating = false;

    if (this.wishlistAnimationTimeout) {
      clearTimeout(this.wishlistAnimationTimeout);
      this.wishlistAnimationTimeout = null;
    }

    this.generateWishlistBurst();

    setTimeout(() => {
      this.isWishlistClickAnimating = true;
      this.wishlistAnimationTimeout = setTimeout(() => {
        this.isWishlistClickAnimating = false;
        this.wishlistAnimationTimeout = null;
      }, 420);
    }, 0);
  }

  private generateWishlistBurst(): void {
    const particleCount = 8;
    this.wishlistBurstParticles = Array.from({ length: particleCount }, (_, index) => {
      const angle = (Math.PI * 2 * index) / particleCount;
      const radius = 12 + Math.random() * 10;
      return {
        id: this.nextParticleId++,
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        size: 3 + Math.floor(Math.random() * 3),
        delay: Math.random() * 0.06
      };
    });

    if (this.wishlistBurstTimeout) {
      clearTimeout(this.wishlistBurstTimeout);
      this.wishlistBurstTimeout = null;
    }

    this.wishlistBurstTimeout = setTimeout(() => {
      this.wishlistBurstParticles = [];
      this.wishlistBurstTimeout = null;
    }, 520);
  }

  ngOnDestroy(): void {
    if (this.addedTextTimeoutId) {
      clearTimeout(this.addedTextTimeoutId);
    }

    if (this.wishlistAnimationTimeout) {
      clearTimeout(this.wishlistAnimationTimeout);
      this.wishlistAnimationTimeout = null;
    }

    if (this.wishlistBurstTimeout) {
      clearTimeout(this.wishlistBurstTimeout);
      this.wishlistBurstTimeout = null;
    }

    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }
}
