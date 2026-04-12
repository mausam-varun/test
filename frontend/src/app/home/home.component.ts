import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../services/cart.service';
import { WishlistService } from '../services/wishlist.service';
import { API_ENDPOINTS } from '../config/app-config';
import { Subject, interval } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// ========== INTERFACES ==========

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  reviews: number;
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

// ========== COMPONENT ==========

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  private countdownInterval$ = interval(1000).pipe(takeUntil(this.destroy$));

  private readonly productApiBaseUrl = API_ENDPOINTS.products;
  private readonly categoryApiBaseUrl = API_ENDPOINTS.categories;

  // Data properties
  heroSlides: HeroSlide[] = [];
  heroSliderImages: string[] = [];
  heroImage = 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80';
  currentSlideIndex = 0;
  categories: Category[] = [];
  flashDeals: Product[] = [];
  recentProducts: Product[] = [];
  newProducts: Product[] = [];
  recommendedProducts: Product[] = [];
  blogs: Blog[] = [];

  // Our Story section
  ourStory: any = null;
  newArrivals: any = null;

  // AI Matching
  uploadedImage: string | null = null;
  isMatching = false;
  matchResults: any[] = [];
  aiMatchVisible = false;

  // AI-Powered Bangle Match
  selectedDressImage: File | null = null;
  selectedDressImagePreview: string | null = null;
  matchError = '';
  matchedProducts: any[] = [];
  detectedDetails: any = null;
  generatedBangleImageUrl: string | null = null;

  // Newsletter
  newsletterEmail = '';
  isSubscribing = false;
  newsletterMessage = '';

  constructor(
    private readonly http: HttpClient,
    private readonly cartService: CartService,
    private readonly wishlistService: WishlistService
  ) {}

  ngOnInit(): void {
    this.loadHeroSlides();
    this.loadCategories();
    this.loadFlashDeals();
    this.loadRecentProducts();
    this.loadNewProducts();
    this.loadRecommendedProducts();
    this.loadBlogs();
    this.loadOurStory();
    this.loadNewArrivals();
    this.startCountdownTimer();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // ========== DATA LOADING ==========

  private loadHeroSlides(): void {
    // Use the /public endpoint which returns active slider items
    this.http.get<any>(`${API_ENDPOINTS.slider}/public`).subscribe({
      next: (response) => {
        console.log('Hero Slider Response:', response);
        // Handle both response structures: images array or items array
        const items = response?.images || response?.items || response || [];
        
        if (Array.isArray(items) && items.length > 0) {
          // Filter active items
          const activeSlides = items.filter((slide: any) => slide.is_active !== false);
          
          if (activeSlides.length > 0) {
            this.heroSlides = activeSlides.sort((a: any, b: any) => (a.sort_order || 0) - (b.sort_order || 0));
            this.heroSliderImages = this.heroSlides.map((slide: any) => slide.image_url);
            this.heroImage = this.heroSlides[0].image_url;
            console.log('Loaded', this.heroSlides.length, 'Hero Slides from API:', this.heroSlides);
          } else {
            console.log('No active sliders found, using defaults');
            this.loadDefaultSlides();
          }
        } else {
          console.log('Invalid response structure, using defaults');
          this.loadDefaultSlides();
        }
        this.currentSlideIndex = 0;
      },
      error: (error) => {
        console.error('Failed to load hero sliders:', error);
        console.log('Falling back to default slides');
        this.loadDefaultSlides();
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
    console.log('Using default hero slides');
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
        this.flashDeals = products.slice(0, 4).map((p: any) => ({
          id: p.id,
          name: p.name,
          image: p.image_url || 'https://via.placeholder.com/200',
          price: p.price || 0,
          rating: p.rating || 0,
          reviews: p.reviews || 0,
          isOnSale: true,
          originalPrice: p.original_price || p.price * 1.2,
          countdown: this.calculateCountdown()
        }));
      },
      error: () => {
        this.flashDeals = [];
      }
    });
  }

  private loadRecentProducts(): void {
    this.http.get<any>(`${this.productApiBaseUrl}?limit=4`).subscribe({
      next: (response) => {
        const products = Array.isArray(response) ? response : response?.products || [];
        this.recentProducts = products.slice(0, 4).map((p: any) => ({
          id: p.id,
          name: p.name,
          image: p.image_url || 'https://via.placeholder.com/200',
          price: p.price || 0,
          rating: p.rating || 0,
          reviews: p.reviews || 0
        }));
      },
      error: () => {
        this.recentProducts = [];
      }
    });
  }

  private loadNewProducts(): void {
    this.http.get<any>(`${this.productApiBaseUrl}?limit=4&offset=4`).subscribe({
      next: (response) => {
        const products = Array.isArray(response) ? response : response?.products || [];
        this.newProducts = products.slice(0, 4).map((p: any) => ({
          id: p.id,
          name: p.name,
          image: p.image_url || 'https://via.placeholder.com/200',
          price: p.price || 0,
          rating: p.rating || 0,
          reviews: p.reviews || 0,
          isOnSale: Math.random() > 0.6
        }));
      },
      error: () => {
        this.newProducts = [];
      }
    });
  }

  private loadRecommendedProducts(): void {
    this.http.get<any>(`${this.productApiBaseUrl}?limit=4&offset=8`).subscribe({
      next: (response) => {
        const products = Array.isArray(response) ? response : response?.products || [];
        this.recommendedProducts = products.slice(0, 4).map((p: any) => ({
          id: p.id,
          name: p.name,
          image: p.image_url || 'https://via.placeholder.com/200',
          price: p.price || 0,
          rating: p.rating || 0,
          reviews: p.reviews || 0,
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
    this.cartService.addToCart(product);
  }

  openQuickView(product: any): void {
    // TODO: Implement quick view modal or drawer
    console.log('Opening quick view for product:', product);
  }

  onDressImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] || null;

    this.matchError = '';
    this.matchedProducts = [];
    this.detectedDetails = null;
    this.generatedBangleImageUrl = null;

    if (!file) {
      this.selectedDressImage = null;
      if (this.selectedDressImagePreview) {
        URL.revokeObjectURL(this.selectedDressImagePreview);
      }
      this.selectedDressImagePreview = null;
      return;
    }

    const allowed = ['image/jpeg', 'image/png', 'image/webp'];
    if (!allowed.includes(file.type)) {
      this.matchError = 'Please upload JPG, PNG, or WEBP image.';
      input.value = '';
      return;
    }

    this.selectedDressImage = file;

    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.selectedDressImagePreview = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  findMatchingBangles(): void {
    if (!this.selectedDressImage) {
      this.matchError = 'Please choose a dress image first.';
      return;
    }

    this.isMatching = true;
    this.matchError = '';
    this.matchedProducts = [];
    this.detectedDetails = null;
    this.generatedBangleImageUrl = null;

    const formData = new FormData();
    formData.append('image_file', this.selectedDressImage);

    this.http.post<any>(`${this.productApiBaseUrl}/match-bangles`, formData).subscribe({
      next: (response) => {
        const safeMatches = Array.isArray(response) ? response : (response?.matches || []);
        const generatedImageBase64 = Array.isArray(response) ? null : (response?.generated_image_base64 || null);

        this.generatedBangleImageUrl = generatedImageBase64
          ? `data:image/png;base64,${generatedImageBase64}`
          : null;

        this.detectedDetails = Array.isArray(response)
          ? (safeMatches[0]?.payload || null)
          : (response?.query_metadata || safeMatches[0]?.payload || null);

        if (!safeMatches.length) {
          this.isMatching = false;
          this.matchError = this.generatedBangleImageUrl
            ? 'No direct vector match found. Showing AI-generated matching bangle concept.'
            : 'No similar bangles found for this image.';
          return;
        }

        this.loadMatchedProductCards(safeMatches);
      },
      error: (error) => {
        this.isMatching = false;
        this.matchError = error?.error?.message || 'Failed to find matching bangles. Please try again.';
      }
    });
  }

  private loadMatchedProductCards(matches: any[]): void {
    const productIds = matches.map((m: any) => m.product_id || m.id).filter(Boolean);

    if (!productIds.length) {
      this.isMatching = false;
      return;
    }

    this.http.get<any>(`${this.productApiBaseUrl}`).subscribe({
      next: (allProducts) => {
        const products = Array.isArray(allProducts) ? allProducts : allProducts?.data || [];
        const productsMap = new Map(products.map((p: any) => [p.id, p]));

        this.matchedProducts = productIds
          .map((id: any) => {
            const product: any = productsMap.get(id);
            if (!product) return null;

            return {
              id: product.id || 0,
              name: product.name || '',
              price: product.price || 0,
              imageUrl: (product.image_url || (product.images && product.images[0]?.image_url) || 'assets/placeholder.png') as string,
              rating: product.rating || 0,
              reviews: product.reviews || 0
            };
          })
          .filter(Boolean);

        this.isMatching = false;
      },
      error: () => {
        this.isMatching = false;
        this.matchError = 'Failed to load product details.';
      }
    });
  }

  similarityPercent(value: number): number {
    return Math.max(0, Math.min(100, Math.round((value || 0) * 100)));
  }

  trackByMatchedId(index: number, product: any): number {
    return product.id || index;
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

  isWishlisted(productId: number): boolean {
    return this.wishlistService.isInWishlist(productId);
  }

  onImageSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.uploadedImage = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  performAIMatch(): void {
    if (!this.uploadedImage) {
      return;
    }

    this.isMatching = true;
    // TODO: Call backend API for AI matching
    setTimeout(() => {
      this.matchResults = [
        {
          id: 1,
          name: 'Elegant Pearl Bangle',
          image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=300&q=80',
          similarity: 92
        },
        {
          id: 2,
          name: 'Golden Wave Bangle',
          image: 'https://images.unsplash.com/photo-1515562141207-6461a4b9b7fd?auto=format&fit=crop&w=300&q=80',
          similarity: 85
        },
        {
          id: 3,
          name: 'Crystal Luxury Bangle',
          image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=300&q=80',
          similarity: 78
        },
        {
          id: 4,
          name: 'Artistic Pattern Bangle',
          image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=300&q=80',
          similarity: 72
        }
      ];
      this.isMatching = false;
    }, 2000);
  }

  toggleAIMatch(): void {
    this.aiMatchVisible = !this.aiMatchVisible;
    this.uploadedImage = null;
    this.matchResults = [];
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

  // ========== COUNTDOWN TIMER ==========

  private startCountdownTimer(): void {
    this.countdownInterval$.subscribe(() => {
      this.flashDeals = this.flashDeals.map(deal => ({
        ...deal,
        countdown: this.calculateCountdown()
      }));
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
