import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { WishlistService } from '../services/wishlist.service';
import { RecentlyViewedService } from '../services/recently-viewed.service';
import { API_ENDPOINTS, APP_CONFIG } from '../config/app-config';
import { Subject, interval } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// ========== INTERFACES ==========

interface ProductSize {
  size: string;
  stock: number;
}

interface Product {
  id: number;
  name: string;
  image: string;
  image_url?: string;
  images?: Array<{ image_url: string; is_primary_image: boolean }>;
  price: number;
  rating: number;
  reviews: number;
  category: string;
  stock: number;
  sizes: ProductSize[];
  isOnSale?: boolean;
  originalPrice?: number;
  countdown?: { days: number; hours: number; minutes: number; seconds: number };
}

interface Category {
  id: number;
  name: string;
  image: string;
  productCount: number;
}

interface Blog {
  id: number;
  title: string;
  image: string;
  category: string;
  author: string;
  date: string;
  excerpt: string;
}

interface HeroSlide {
  id: number;
  image_url: string;
  title: string;
  subtitle: string;
  cta_url: string;
  sort_order: number;
  is_active: boolean;
}

interface PromotionalBanner {
  id: number;
  label: string;
  title: string;
  cta_text: string;
  cta_link: string;
  image_url: string;
  background_color: string;
  display_order: number;
  is_active: boolean;
}

// ========== COMPONENT ==========

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  private countdownInterval$ = interval(1000).pipe(takeUntil(this.destroy$));
  private mobileSearchTimeout: ReturnType<typeof setTimeout> | null = null;

  private readonly productApiBaseUrl = API_ENDPOINTS.products;
  private readonly categoryApiBaseUrl = API_ENDPOINTS.categories;

  // Section visibility (controlled from admin settings)
  sectionVisibility = {
    flashDeals: true,
    recommendedProducts: true,
    recentlyViewed: true
  };

  // Countdown storage - keeps flashDeals array stable
  private countdownMap = new Map<number, { days: number; hours: number; minutes: number; seconds: number }>();

  // Getter for countdown lookup in template
  getCountdown(dealId: number) {
    return this.countdownMap.get(dealId);
  }

  // Data properties
  heroSlides: HeroSlide[] = [];
  heroSliderImages: string[] = [];
  heroImage = 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80';
  heroAutoplayInterval = 4000;
  currentSlideIndex = 0;
  categories: Category[] = [];
  flashDeals: Product[] = [];
  flashDealsBanner: any = {};
  recentProducts: Product[] = [];

  // Hero promo banners (right column — loaded from API)
  promoBanners: { bridal: any; festive: any } = { bridal: {}, festive: {} };
  newProducts: Product[] = [];
  festiveProducts: Product[] = [];
  recommendedProducts: Product[] = [];
  blogs: Blog[] = [];
  promotionalBanners: PromotionalBanner[] = [];
  newProductsBannerImageUrl: string = '';
  festiveBannerImageUrl: string = '';

  // Our Story section
  ourStory: any = null;
  newArrivals: any = null;

  // Newsletter
  newsletterEmail = '';
  isSubscribing = false;
  newsletterMessage = '';
  mobileSearchQuery = '';
  mobileSearchResults: Product[] = [];
  isMobileSearching = false;
  showMobileSearchDropdown = false;

  // Quantity input for adding products
  addQuantities: { [productId: number]: number } = {};
  
  // Size selection for bangles
  selectedSizes: { [productId: number]: string } = {};

  constructor(
    private readonly http: HttpClient,
    private readonly cartService: CartService,
    private readonly wishlistService: WishlistService,
    private readonly cdr: ChangeDetectorRef,
    private readonly router: Router,
    private readonly recentlyViewedService: RecentlyViewedService
  ) {}

  ngOnInit(): void {
    // Subscribe to cart changes to trigger UI updates
    this.cartService.cartItems$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.cdr.markForCheck();
    });
    
    this.loadHeroSlides();
    this.loadPromotionalBanners();
    this.loadNewProductsBannerImage();
    this.loadFestiveSeasonBannerImage();
    this.loadFlashDealsBanner();
    this.loadCategories();
    this.loadFlashDeals();
    this.loadRecentProducts();
    this.loadNewProducts();
    this.loadFestiveProducts();
    this.loadRecommendedProducts();
    this.loadBlogs();
    this.loadOurStory();
    this.loadNewArrivals();
    this.startCountdownTimer();
    this.loadSectionVisibility();
    this.loadPromoBanners();
  }

  ngOnDestroy(): void {
    if (this.mobileSearchTimeout) {
      clearTimeout(this.mobileSearchTimeout);
      this.mobileSearchTimeout = null;
    }

    this.destroy$.next();
    this.destroy$.complete();
  }

  // ========== DATA LOADING ==========

  private loadPromoBanners(): void {
    this.http.get<any[]>(`${APP_CONFIG.API_URL}/hero-promo-banners`).subscribe({
      next: (banners) => {
        if (!banners) return;
        const bridal  = banners.find(b => b.banner_key === 'bridal');
        const festive = banners.find(b => b.banner_key === 'festive');
        if (bridal)  this.promoBanners.bridal  = bridal;
        if (festive) this.promoBanners.festive = festive;
      },
      error: () => {}
    });
  }


  private loadSectionVisibility(): void {
    this.http.get<any>(`${APP_CONFIG.API_URL}/settings/admin/settings`).subscribe({
      next: (data) => {
        if (data?.sections) {
          const s = data.sections;
          this.sectionVisibility.flashDeals = s.flashDeals !== false;
          this.sectionVisibility.recommendedProducts = s.recommendedProducts !== false;
          this.sectionVisibility.recentlyViewed = s.recentlyViewed !== false;
        }
      },
      error: () => { /* keep defaults (all true) on error */ }
    });
  }

  private loadHeroSlides(): void {
    // Use the /public endpoint which returns active slider items
    this.http.get<any>(`${API_ENDPOINTS.slider}/public`).subscribe({
      next: (response) => {
        // Handle both response structures: images array or items array
        const items = response?.images || response?.items || response || [];
        
        if (Array.isArray(items) && items.length > 0) {
          // Filter active items
          const activeSlides = items.filter((slide: any) => slide.is_active !== false);
          
          if (activeSlides.length > 0) {
            this.heroSlides = activeSlides.sort((a: any, b: any) => (a.sort_order || 0) - (b.sort_order || 0));
            this.heroSliderImages = this.heroSlides.map((slide: any) => slide.image_url);
            this.heroImage = this.heroSlides[0].image_url;
            if (response?.autoplay_interval > 0) {
              this.heroAutoplayInterval = Number(response.autoplay_interval);
            }
          } else {
            this.loadDefaultSlides();
          }
        } else {
          this.loadDefaultSlides();
        }
        this.currentSlideIndex = 0;
      },
      error: () => {
        this.loadDefaultSlides();
      }
    });
  }

  private loadNewProductsBannerImage(): void {
    this.http.get<{ image_url: string }>(API_ENDPOINTS.newProductsBanner).subscribe({
      next: (res) => { this.newProductsBannerImageUrl = res?.image_url || ''; },
      error: () => { this.newProductsBannerImageUrl = ''; }
    });
  }

  private loadFestiveSeasonBannerImage(): void {
    this.http.get<any>(API_ENDPOINTS.festiveSeasonBanner).subscribe({
      next: (res) => { 
        this.festiveBannerImageUrl = res?.image_url || ''; 
      },
      error: () => { 
        this.festiveBannerImageUrl = ''; 
      }
    });
  }

  private loadPromotionalBanners(): void {
    this.http.get<PromotionalBanner[]>(API_ENDPOINTS.banners).subscribe({
      next: (response) => {
        const banners = Array.isArray(response) ? response : [];
        this.promotionalBanners = banners.sort((a: PromotionalBanner, b: PromotionalBanner) => 
          (a.display_order || 0) - (b.display_order || 0)
        );
      },
      error: () => {
        this.promotionalBanners = [];
      }
    });
  }

  private loadDefaultSlides(): void {
    this.heroSlides = [
      {
        id: 0,
        image_url: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80',
        title: 'NEW ARRIVAL',
        subtitle: 'Exquisite Handmade Bangles Collection',
        cta_url: '/shop',
        sort_order: 1,
        is_active: true
      }
    ];
    this.heroSliderImages = [this.heroSlides[0].image_url];
    this.heroImage = this.heroSlides[0].image_url;
  }

  private loadCategories(): void {
    this.http.get<any>(`${this.categoryApiBaseUrl}/home`).subscribe({
      next: (response) => {
        const cats = response?.categories || [];
        this.categories = cats.map((cat: any) => ({
          id: cat.id,
          name: cat.name,
          image: cat.image_url || 'https://via.placeholder.com/200',
          productCount: cat.product_count || 0
        }));
      },
      error: () => {
        this.categories = [];
      }
    });
  }

  private loadFlashDeals(): void {
    this.http.get<any>(`${this.productApiBaseUrl}?is_sale=true&limit=4`).subscribe({
      next: (response) => {
        const products = Array.isArray(response) ? response : response?.products || [];
        this.flashDeals = products.slice(0, 5).map((p: any) => ({
          id: p.id,
          name: p.name,
          image: p.image_url || 'https://via.placeholder.com/200',
          price: p.price || 0,
          rating: p.rating || 0,
          reviews: p.reviews || 0,
          category: p.category || 'bangles',
          stock: p.stock || 0,
          sizes: p.sizes || [],
          isOnSale: true,
          originalPrice: p.original_price || p.price * 1.2
        }));

        // Initialize countdown Map for each deal
        this.flashDeals.forEach(deal => {
          this.countdownMap.set(deal.id, this.calculateCountdown());
        });
      },
      error: () => {
        this.flashDeals = [];
      }
    });
  }

  private loadFlashDealsBanner(): void {
    this.http.get<any>(API_ENDPOINTS.flashDealsBanner).subscribe({
      next: (data) => {
        this.flashDealsBanner = data || {};
      },
      error: () => {
        this.flashDealsBanner = {};
      }
    });
  }

  private loadRecentProducts(): void {
    this.recentlyViewedService.getRecentProducts(10).subscribe({
      next: (products) => {
        this.recentProducts = products.map((p: any) => ({
          id: p.id,
          name: p.name,
          image: p.image_url || 'https://via.placeholder.com/200',
          price: Number(p.price) || 0,
          rating: p.rating || 0,
          reviews: p.reviews || 0,
          category: p.category || 'bangles',
          stock: p.stock || 0,
          sizes: p.sizes || []
        }));
      },
      error: () => {
        this.recentProducts = [];
      }
    });
  }

  private loadNewProducts(): void {
    this.http.get<any>(`${this.productApiBaseUrl}?limit=10&offset=4`).subscribe({
      next: (response) => {
        const products = Array.isArray(response) ? response : response?.products || [];
        this.newProducts = products.slice(0, 10).map((p: any) => ({
          id: p.id,
          name: p.name,
          image: p.image_url || 'https://via.placeholder.com/200',
          price: p.price || 0,
          rating: p.rating || 0,
          reviews: p.reviews || 0,
          category: p.category || 'bangles',
          stock: p.stock || 0,
          sizes: p.sizes || [],
          isOnSale: Math.random() > 0.6
        }));
      },
      error: () => {
        this.newProducts = [];
      }
    });
  }

  private loadFestiveProducts(): void {
    this.http.get<any>(`${this.productApiBaseUrl}?limit=8&offset=6`).subscribe({
      next: (response) => {
        const products = Array.isArray(response) ? response : response?.products || [];
        this.festiveProducts = products.slice(0, 8).map((p: any) => ({
          id: p.id,
          name: p.name,
          image: p.image_url || 'https://via.placeholder.com/200',
          price: p.price || 0,
          rating: p.rating || 0,
          reviews: p.reviews || 0,
          category: p.category || 'bangles',
          stock: p.stock || 0,
          sizes: p.sizes || [],
          isOnSale: Math.random() > 0.5
        }));
      },
      error: () => {
        this.festiveProducts = [];
      }
    });
  }

  private loadRecommendedProducts(): void {
    this.http.get<any>(`${this.productApiBaseUrl}?limit=4&offset=8`).subscribe({
      next: (response) => {
        const products = Array.isArray(response) ? response : response?.products || [];
        this.recommendedProducts = products.slice(0, 5).map((p: any) => ({
          id: p.id,
          name: p.name,
          image: p.image_url || 'https://via.placeholder.com/200',
          price: p.price || 0,
          rating: p.rating || 0,
          reviews: p.reviews || 0,
          category: p.category || 'bangles',
          stock: p.stock || 0,
          sizes: p.sizes || [],
          isOnSale: Math.random() > 0.7
        }));
      },
      error: () => {
        this.recommendedProducts = [];
      }
    });
  }

  private loadBlogs(): void {
    // Mock blog data - replace with actual API call when backend is ready
    this.blogs = [
      {
        id: 1,
        title: 'Sample Post With Format Link',
        image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=400&q=80',
        category: 'FURNITURE',
        author: 'admin',
        date: 'May 10, 2024',
        excerpt: 'Phasellus ac sem eu mauris sodales tristique sed non liqua...'
      },
      {
        id: 2,
        title: 'Post With Gallery',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80',
        category: 'BUSINESS',
        author: 'admin',
        date: 'May 9, 2024',
        excerpt: 'Phasellus ac sem eu mauris sodales tristique sed non liqua...'
      }
    ];
  }

  private loadOurStory(): void {
    // Mock our story data - replace with actual API call when backend is ready
    this.ourStory = {
      top_label: 'OUR STORY',
      main_title: 'Timeless Tradition, Artfully Designed',
      description: 'Each bangle is lovingly handcrafted by skilled artisans, blending age-old techniques with contemporary elegance.',
      button_text: 'LEARN MORE',
      button_link: '/about',
      image_url: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=500&q=80'
    };
  }

  private loadNewArrivals(): void {
    // Mock new arrivals data - replace with actual API call when backend is ready
    this.newArrivals = {
      top_label: 'NEW ARRIVALS',
      main_title: 'Celebrate Craftsmanship',
      description: 'Discover the latest additions to our handmade collection',
      button_text: 'VIEW ALL BANGLES',
      button_link: '/shop',
      image_url: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=500&q=80'
    };
  }

  // ========== ACTIONS ==========

  addToCart(product: any): void {
    // Prepare cart item with all details including sizes
    const cartItem = {
      id: product.id,
      name: product.name,
      image: product.imageUrl || product.image,
      price: product.price,
      sizes: product.sizes // Include available sizes
    };

    this.cartService.addToCart(cartItem);
  }

  isProductAdded(productId: number): boolean {
    const cartItems = this.cartService.getCartItemsSnapshot();
    return cartItems.some(item => item.id === productId);
  }

  getProductQuantity(productId: number): number {
    const cartItems = this.cartService.getCartItemsSnapshot();
    const item = cartItems.find(item => item.id === productId);
    return item?.quantity || 0;
  }

  incrementQuantity(productId: number): void {
    const currentQuantity = this.getProductQuantity(productId);
    this.cartService.updateQuantity(productId, currentQuantity + 1);
  }

  decrementQuantity(productId: number): void {
    const currentQuantity = this.getProductQuantity(productId);
    if (currentQuantity > 1) {
      this.cartService.updateQuantity(productId, currentQuantity - 1);
    } else if (currentQuantity === 1) {
      this.cartService.removeFromCart(productId);
    }
  }

  // ========== QUANTITY INPUT METHODS ==========

  increaseAddQty(productId: number, maxStock: number): void {
    const currentQty = this.addQuantities[productId] || 1;
    if (currentQty < maxStock) {
      this.addQuantities[productId] = currentQty + 1;
    }
  }

  decreaseAddQty(productId: number): void {
    const currentQty = this.addQuantities[productId] || 1;
    if (currentQty > 1) {
      this.addQuantities[productId] = currentQty - 1;
    }
  }

  addToCartWithQty(product: any): void {
    const quantity = this.addQuantities[product.id] || 1;
    const selectedSize = this.selectedSizes[product.id];

    // Prepare cart item with all details including sizes
    const cartItem = {
      id: product.id,
      name: product.name,
      image: product.imageUrl || product.image,
      price: product.price,
      size: selectedSize,
      sizes: product.sizes // Include available sizes
    };

    // Add to cart multiple times based on quantity
    for (let i = 0; i < quantity; i++) {
      this.cartService.addToCart(cartItem);
    }

    // Reset quantity input and size selection
    delete this.addQuantities[product.id];
    delete this.selectedSizes[product.id];
  }

  openQuickView(product: any): void {
    // TODO: Implement quick view modal or drawer
  }

  addToWishlist(product: any): void {
    this.wishlistService.addToWishlist({
      id: product.id || 0,
      name: product.name || '',
      image: product.imageUrl || product.image || '',
      price: product.price || 0,
      rating: product.rating || 0,
      reviews: product.reviews || 0
    });
  }

  toggleWishlist(product: any): void {
    if (this.isWishlisted(product.id)) {
      this.wishlistService.removeFromWishlist(product.id);
    } else {
      this.addToWishlist(product);
    }
  }

  isWishlisted(productId: number): boolean {
    return this.wishlistService.isInWishlist(productId);
  }

  navigateToProduct(productId: number): void {
    this.router.navigate(['/product', productId]);
  }

  onMobileSearchInput(event: Event): void {
    this.mobileSearchQuery = (event.target as HTMLInputElement).value;

    if (this.mobileSearchTimeout) {
      clearTimeout(this.mobileSearchTimeout);
      this.mobileSearchTimeout = null;
    }

    if (!this.mobileSearchQuery.trim()) {
      this.mobileSearchResults = [];
      this.showMobileSearchDropdown = false;
      this.isMobileSearching = false;
      return;
    }

    this.showMobileSearchDropdown = true;
    this.isMobileSearching = true;
    this.mobileSearchTimeout = setTimeout(() => {
      this.searchMobileProductsApi();
    }, 300);
  }

  submitMobileSearch(): void {
    const search = this.mobileSearchQuery.trim();
    this.showMobileSearchDropdown = false;
    this.router.navigate(['/shop'], search ? { queryParams: { q: search } } : undefined);
  }

  hideMobileSearchDropdown(): void {
    setTimeout(() => {
      this.showMobileSearchDropdown = false;
    }, 150);
  }

  viewMobileSearchProduct(product: Product): void {
    this.showMobileSearchDropdown = false;
    this.router.navigate(['/product', product.id]);
  }

  getMobileSearchImage(product: Product): string {
    if (product.images && product.images.length > 0) {
      const primaryImage = product.images.find((image) => image.is_primary_image);
      if (primaryImage) {
        return primaryImage.image_url;
      }
      return product.images[0].image_url;
    }

    return product.image_url || product.image || 'assets/placeholder.png';
  }

  subscribeNewsletter(): void {
    if (!this.newsletterEmail || !this.validateEmail(this.newsletterEmail)) {
      this.newsletterMessage = 'Please enter a valid email address';
      return;
    }

    this.isSubscribing = true;
    // TODO: Call backend API
    setTimeout(() => {
      this.newsletterMessage = 'Thank you for subscribing!';
      this.newsletterEmail = '';
      this.isSubscribing = false;
      
      // Clear message after 3 seconds
      setTimeout(() => {
        this.newsletterMessage = '';
      }, 3000);
    }, 500);
  }

  private validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  private searchMobileProductsApi(): void {
    const query = this.mobileSearchQuery.trim();
    if (!query) {
      this.isMobileSearching = false;
      this.mobileSearchResults = [];
      return;
    }

    this.http.get<Product[]>(`${this.productApiBaseUrl}/search?q=${encodeURIComponent(query)}&limit=8`)
      .subscribe({
        next: (products) => {
          this.mobileSearchResults = products;
          this.isMobileSearching = false;
          this.showMobileSearchDropdown = true;
        },
        error: () => {
          this.isMobileSearching = false;
          this.mobileSearchResults = [];
          this.showMobileSearchDropdown = true;
        }
      });
  }

  // ========== COUNTDOWN TIMER ==========

  private startCountdownTimer(): void {
    this.countdownInterval$.subscribe(() => {
      // Only update the countdown Map, not the flashDeals array
      this.flashDeals.forEach(deal => {
        this.countdownMap.set(deal.id, this.calculateCountdown());
      });
    });
  }

  private calculateCountdown() {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    const diffMs = tomorrow.getTime() - now.getTime();
    const diffSecs = Math.floor(diffMs / 1000);

    const days = Math.floor(diffSecs / (24 * 60 * 60));
    const hours = Math.floor((diffSecs % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((diffSecs % (60 * 60)) / 60);
    const seconds = Math.floor(diffSecs % 60);

    return { days, hours, minutes, seconds };
  }
}
