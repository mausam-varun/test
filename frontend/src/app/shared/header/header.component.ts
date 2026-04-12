import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthPopupService } from '../../services/auth-popup.service';
import { AuthSessionService } from '../../services/auth-session.service';
import { CartService } from '../../services/cart.service';
import { WishlistService } from '../../services/wishlist.service';
import { CurrencyPreferenceService } from '../services/currency-preference.service';

interface CartBurstParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

interface ProductImage {
  id?: number;
  image_url: string;
  is_primary_image: boolean;
}

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  image_url?: string;
  images?: ProductImage[];
  color_details?: any[];
  attributes?: any;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  cartCount: number = 0;
  wishlistCount: number = 0;
  isAuthenticated: boolean = false;
  userDisplayName: string = '';
  userAvatarUrl: string = '';
  isCartBumping: boolean = false;
  isWishlistBumping: boolean = false;
  isProfileMenuOpen: boolean = false;
  isMenuOpen: boolean = false;
  isScrolled: boolean = false;
  cartBurstParticles: CartBurstParticle[] = [];
  wishlistBurstParticles: CartBurstParticle[] = [];

  // Search properties
  searchQuery: string = '';
  searchResults: Product[] = [];
  isSearching: boolean = false;
  showSearchDropdown: boolean = false;
  private readonly apiBaseUrl = 'http://localhost:5001/api/products';
  private searchTimeout: ReturnType<typeof setTimeout> | null = null;

  private readonly subscriptions = new Subscription();
  private previousCartCount: number = 0;
  private previousWishlistCount: number = 0;
  private cartAnimationTimeout: ReturnType<typeof setTimeout> | null = null;
  private wishlistAnimationTimeout: ReturnType<typeof setTimeout> | null = null;
  private cartBurstTimeout: ReturnType<typeof setTimeout> | null = null;
  private wishlistBurstTimeout: ReturnType<typeof setTimeout> | null = null;
  private nextParticleId: number = 1;
  private isComponentInitialized: boolean = false;

  constructor(
    private readonly router: Router,
    private readonly http: HttpClient,
    private readonly authPopupService: AuthPopupService,
    private readonly authSessionService: AuthSessionService,
    private readonly cartService: CartService,
    private readonly wishlistService: WishlistService,
    private readonly currencyPreferenceService: CurrencyPreferenceService
  ) {}

  ngOnInit(): void {
    this.currencyPreferenceService.syncFrontendCurrencyWithSystem();

    this.subscriptions.add(
      this.cartService.cartItems$.subscribe((items) => {
        const nextCartCount = items.reduce((sum, item) => sum + item.quantity, 0);

        if (nextCartCount > this.previousCartCount && this.isComponentInitialized) {
          this.triggerCartBump();
        }

        this.cartCount = nextCartCount;
        this.previousCartCount = nextCartCount;
      })
    );

    this.subscriptions.add(
      this.wishlistService.wishlistItems$.subscribe((items) => {
        const nextWishlistCount = items.length;

        if (nextWishlistCount > this.previousWishlistCount && this.isComponentInitialized) {
          this.triggerWishlistBump();
        }

        this.wishlistCount = nextWishlistCount;
        this.previousWishlistCount = nextWishlistCount;
      })
    );

    this.subscriptions.add(
      this.authSessionService.user$.subscribe((user) => {
        this.isAuthenticated = Boolean(user);
        this.userDisplayName = user?.name || '';
        this.userAvatarUrl = user?.avatarUrl || '';
      })
    );

    // Mark component as initialized after subscriptions are set up
    // This prevent animations from triggering on initial load when data is restored from storage
    setTimeout(() => {
      this.isComponentInitialized = true;
    }, 0);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 100;
    if (this.isScrolled && this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    // Check if click is outside the search dropdown
    const searchContainer = document.querySelector('.navbar-search');
    if (searchContainer && !searchContainer.contains(target)) {
      // Close dropdown only if clicking outside the search area
      this.showSearchDropdown = false;
    }
    this.closeProfileMenu();
  }

  ngOnDestroy(): void {
    if (this.cartAnimationTimeout) {
      clearTimeout(this.cartAnimationTimeout);
      this.cartAnimationTimeout = null;
    }

    if (this.wishlistAnimationTimeout) {
      clearTimeout(this.wishlistAnimationTimeout);
      this.wishlistAnimationTimeout = null;
    }

    if (this.cartBurstTimeout) {
      clearTimeout(this.cartBurstTimeout);
      this.cartBurstTimeout = null;
    }

    if (this.wishlistBurstTimeout) {
      clearTimeout(this.wishlistBurstTimeout);
      this.wishlistBurstTimeout = null;
    }

    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
      this.searchTimeout = null;
    }

    this.subscriptions.unsubscribe();
  }

  openSignupPopup(): void {
    this.authPopupService.open();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  toggleProfileMenu(event?: Event): void {
    event?.stopPropagation();
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }

  closeProfileMenu(): void {
    this.isProfileMenuOpen = false;
  }

  editProfile(event?: Event): void {
    event?.stopPropagation();
    this.closeProfileMenu();
    this.router.navigate(['/profile']);
  }

  onSearch(): void {
    // Navigate to product list with search query
    if (this.searchQuery.trim()) {
      this.router.navigate(['/products'], { queryParams: { search: this.searchQuery } });
      this.showSearchDropdown = false;
    }
  }

  onSearchInput(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    this.searchQuery = inputValue;

    // Clear previous timeout
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
      this.searchTimeout = null;
    }

    // Clear results if search is empty
    if (!this.searchQuery.trim()) {
      this.searchResults = [];
      return;
    }

    // Debounce API calls - wait 300ms before searching
    this.isSearching = true;
    this.searchTimeout = setTimeout(() => {
      this.searchProductsApi();
    }, 300);
  }

  private searchProductsApi(): void {
    const query = this.searchQuery.trim();
    if (!query) {
      this.isSearching = false;
      this.searchResults = [];
      return;
    }

    this.http.get<Product[]>(`${this.apiBaseUrl}/search?q=${encodeURIComponent(query)}&limit=8`)
      .subscribe({
        next: (products) => {
          this.searchResults = products;
          this.isSearching = false;
        },
        error: (error) => {
          console.error('Search error:', error);
          this.isSearching = false;
          this.searchResults = [];
        }
      });
  }

  hideSearchDropdown(): void {
    // Delay hiding to allow click handlers to fire first
    // Keep search results in memory so they re-appear on focus
    setTimeout(() => {
      this.showSearchDropdown = false;
    }, 150);
  }

  getProductImage(product: Product): string {
    // Try to get primary image from images array
    if (product.images && product.images.length > 0) {
      const primaryImage = product.images.find(img => img.is_primary_image);
      if (primaryImage) {
        return primaryImage.image_url;
      }
      return product.images[0].image_url;
    }
    // Fallback to image_url field
    return product.image_url || 'assets/placeholder.png';
  }

  viewProduct(product: Product): void {
    // Don't close dropdown here - let the blur event handle it
    // Just navigate
    this.router.navigate(['/products', product.id]);
  }

  addToCart(product: Product, event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.cartService.addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: this.getProductImage(product)
    });
  }

  addToWishlist(product: Product, event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.wishlistService.addToWishlist({
      id: product.id,
      name: product.name,
      price: product.price,
      image: this.getProductImage(product),
      rating: 0,
      reviews: 0
    });
  }

  logout(event?: Event): void {
    event?.stopPropagation();
    this.authSessionService.clearSession();
    this.closeProfileMenu();
    this.router.navigate(['/']);
  }

  get userInitials(): string {
    const parts = String(this.userDisplayName || '')
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2);

    if (!parts.length) {
      return 'U';
    }

    return parts.map((part) => part.charAt(0).toUpperCase()).join('');
  }

  onWishlistIconClick(): void {
    // Animation intentionally disabled on click - only triggers on add/remove
  }

  private triggerCartBump(): void {
    this.isCartBumping = false;
    this.triggerCartBurst();

    if (this.cartAnimationTimeout) {
      clearTimeout(this.cartAnimationTimeout);
      this.cartAnimationTimeout = null;
    }

    setTimeout(() => {
      this.isCartBumping = true;
      this.cartAnimationTimeout = setTimeout(() => {
        this.isCartBumping = false;
        this.cartAnimationTimeout = null;
      }, 500);
    }, 0);
  }

  private triggerCartBurst(): void {
    const particleCount = 10;
    this.cartBurstParticles = Array.from({ length: particleCount }, (_, index) => {
      const angle = (Math.PI * 2 * index) / particleCount;
      const radius = 16 + Math.random() * 14;
      return {
        id: this.nextParticleId++,
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        size: 4 + Math.floor(Math.random() * 4),
        delay: Math.random() * 0.08
      };
    });

    if (this.cartBurstTimeout) {
      clearTimeout(this.cartBurstTimeout);
      this.cartBurstTimeout = null;
    }

    this.cartBurstTimeout = setTimeout(() => {
      this.cartBurstParticles = [];
      this.cartBurstTimeout = null;
    }, 650);
  }

  private triggerWishlistBump(): void {
    this.isWishlistBumping = false;
    this.triggerWishlistBurst();

    if (this.wishlistAnimationTimeout) {
      clearTimeout(this.wishlistAnimationTimeout);
      this.wishlistAnimationTimeout = null;
    }

    setTimeout(() => {
      this.isWishlistBumping = true;
      this.wishlistAnimationTimeout = setTimeout(() => {
        this.isWishlistBumping = false;
        this.wishlistAnimationTimeout = null;
      }, 500);
    }, 0);
  }

  private triggerWishlistBurst(): void {
    const particleCount = 10;
    this.wishlistBurstParticles = Array.from({ length: particleCount }, (_, index) => {
      const angle = (Math.PI * 2 * index) / particleCount;
      const radius = 16 + Math.random() * 14;
      return {
        id: this.nextParticleId++,
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        size: 4 + Math.floor(Math.random() * 4),
        delay: Math.random() * 0.08
      };
    });

    if (this.wishlistBurstTimeout) {
      clearTimeout(this.wishlistBurstTimeout);
      this.wishlistBurstTimeout = null;
    }

    this.wishlistBurstTimeout = setTimeout(() => {
      this.wishlistBurstParticles = [];
      this.wishlistBurstTimeout = null;
    }, 650);
  }
}
