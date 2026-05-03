import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CartService, CartItem } from '../services/cart.service';
import { WishlistService } from '../services/wishlist.service';
import { API_ENDPOINTS } from '../config/app-config';
import { Subject, interval } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  reviews: number;
  category: string;
  stock: number;
  isOnSale?: boolean;
  originalPrice?: number;
  badge?: string;
}

interface Category {
  id: number;
  name: string;
  image: string;
  productCount?: number;
}

interface Blog {
  id: number;
  title: string;
  image: string;
  excerpt: string;
  date: string;
  slug?: string;
}

interface Home3Banner {
  id: number;
  eyebrow: string;
  heading: string;
  description: string;
  view_more_url: string;
  image_url: string;
  sort_order: number;
}

@Component({
  selector: 'app-home3',
  templateUrl: './home3.component.html',
  styleUrls: ['./home3.component.scss']
})
export class Home3Component implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  // Products
  featuredProducts: Product[] = [];
  sellingFastProducts: Product[] = [];
  collectionProducts: Product[] = [];

  // Categories
  shopCategories: Category[] = [];

  // 3-column promo banners — loaded from API
  promoBanners: Home3Banner[] = this.getDefaultBanners();

  private getDefaultBanners(): Home3Banner[] {
    return [
      {
        id: 1,
        eyebrow: 'NOURISH YOUR STYLE',
        heading: 'Luxurious\nArtisan Bangle\nCollection',
        description: '',
        view_more_url: '/shop',
        image_url: 'https://images.unsplash.com/photo-1611955167811-4711904bb9f8?w=800&q=80',
        sort_order: 0
      },
      {
        id: 2,
        eyebrow: 'PURE CRAFTSMANSHIP',
        heading: 'Handcrafted\nSilver & Gold\nKadas',
        description: '',
        view_more_url: '/shop',
        image_url: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80',
        sort_order: 1
      },
      {
        id: 3,
        eyebrow: 'TIMELESS ELEGANCE',
        heading: 'Our Natural\nGemstone\nCollection',
        description: '',
        view_more_url: '/shop',
        image_url: 'https://images.unsplash.com/photo-1599751449128-eb7249c3d6b1?w=800&q=80',
        sort_order: 2
      }
    ];
  }

  // Blogs
  blogs: Blog[] = [];

  // Hero
  heroImages: string[] = [
    'https://images.unsplash.com/photo-1612198273689-a8e50e5f4c4b?w=1600&q=80',
    'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1600&q=80',
    'https://images.unsplash.com/photo-1599751449128-eb7249c3d6b1?w=1600&q=80'
  ];
  currentHeroIndex = 0;

  // Active collection tab
  activeCollectionTab = 0;
  collectionTabs = [
    { label: 'Botanical Bliss', desc: 'Immerse yourself in the soothing embrace of nature.' },
    { label: 'Ocean Breeze', desc: 'Dive into the refreshing serenity of the sea.' },
    { label: 'Citrus Sunrise', desc: 'Wake up and invigorate your senses.' },
    { label: 'Lavender Luxuries', desc: 'Escape to a fragrant lavender field every time.' },
    { label: 'Forest Revivers', desc: 'Get in touch with the serenity of the woods.' }
  ];

  // Trending products tab
  activeProductTab: 'new' | 'top' | 'featured' = 'new';
  get trendingProducts() {
    const all = this.featuredProducts;
    if (this.activeProductTab === 'top') return [...all].sort((a, b) => b.reviews - a.reviews).slice(0, 8);
    if (this.activeProductTab === 'featured') return all.filter(p => p.isOnSale).slice(0, 8).concat(all.slice(0, 8)).slice(0, 8);
    return all.slice(0, 8);
  }

  // Cart / wishlist
  cartItems: CartItem[] = [];
  wishlistItems: number[] = [];

  // Cart quantities
  cartQuantities: Map<number, number> = new Map();

  constructor(
    private readonly http: HttpClient,
    private readonly cartService: CartService,
    private readonly wishlistService: WishlistService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.loadProducts();
    this.loadCategories();
    this.loadBlogs();
    this.loadPromoBanners();
    this.startHeroAutoplay();
    this.subscribeCart();
    this.subscribeWishlist();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadPromoBanners(): void {
    this.http.get<Home3Banner[]>(API_ENDPOINTS.home3Banners).subscribe({
      next: (banners) => {
        if (Array.isArray(banners) && banners.length > 0) {
          this.promoBanners = banners;
        }
      },
      error: () => { /* keep defaults */ }
    });
  }

  private loadProducts(): void {
    this.http.get<any>(API_ENDPOINTS.products).subscribe({
      next: (resp) => {
        const products: Product[] = (resp.products || resp.data || resp || []).map((p: any) => ({
          id: p.id,
          name: p.name,
          image: p.image_url || (p.images?.[0]?.image_url) || p.image || 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&q=80',
          price: p.price,
          rating: p.rating || 4,
          reviews: p.reviews || 0,
          category: p.category_name || p.category || 'Product',
          stock: p.stock || 0,
          isOnSale: p.is_on_sale || p.isOnSale || false,
          originalPrice: p.original_price || p.originalPrice,
          badge: p.is_on_sale ? '-20%' : undefined
        }));
        this.featuredProducts = products.slice(0, 8);
        this.sellingFastProducts = products.slice(0, 6);
        this.collectionProducts = products.slice(0, 8);
      },
      error: () => {
        this.featuredProducts = this.getMockProducts();
        this.sellingFastProducts = this.getMockProducts().slice(0, 6);
        this.collectionProducts = this.getMockProducts();
      }
    });
  }

  private loadCategories(): void {
    this.http.get<any>(API_ENDPOINTS.categories).subscribe({
      next: (resp) => {
        this.shopCategories = (resp.categories || resp || []).slice(0, 4).map((c: any) => ({
          id: c.id,
          name: c.name,
          image: c.image || `https://images.unsplash.com/photo-1612198273689-a8e50e5f4c4b?w=400&q=80`,
          productCount: c.product_count || 0
        }));
        if (this.shopCategories.length === 0) this.shopCategories = this.getMockCategories();
      },
      error: () => { this.shopCategories = this.getMockCategories(); }
    });
  }

  private loadBlogs(): void {
    this.blogs = [
      {
        id: 1,
        title: 'The Art of Handcrafted Bangles: A Timeless Tradition',
        image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80',
        excerpt: 'Discover how artisans craft each bangle with precision and love, keeping centuries-old traditions alive.',
        date: 'Apr 28, 2026',
        slug: 'art-of-handcrafted-bangles'
      },
      {
        id: 2,
        title: 'How to Style Bangles for Every Occasion',
        image: 'https://images.unsplash.com/photo-1599751449128-eb7249c3d6b1?w=600&q=80',
        excerpt: 'From casual everyday wear to festive celebrations, learn the perfect bangle combinations.',
        date: 'Apr 20, 2026',
        slug: 'style-bangles-every-occasion'
      },
      {
        id: 3,
        title: 'Caring for Your Jewellery: Expert Tips',
        image: 'https://images.unsplash.com/photo-1612198273689-a8e50e5f4c4b?w=600&q=80',
        excerpt: 'Keep your bangles and jewellery shining bright with these simple cleaning and storage tips.',
        date: 'Apr 12, 2026',
        slug: 'caring-for-your-jewellery'
      }
    ];
  }

  private startHeroAutoplay(): void {
    interval(5000).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.currentHeroIndex = (this.currentHeroIndex + 1) % this.heroImages.length;
    });
  }

  private subscribeCart(): void {
    this.cartService.cartItems$.pipe(takeUntil(this.destroy$)).subscribe(items => {
      this.cartItems = items;
      this.cartQuantities = new Map(items.map(i => [i.id, i.quantity]));
    });
  }

  private subscribeWishlist(): void {
    this.wishlistService.wishlistItems$.pipe(takeUntil(this.destroy$)).subscribe(items => {
      this.wishlistItems = items.map((i: any) => i.id);
    });
  }

  isInCart(id: number): boolean {
    return this.cartQuantities.has(id) && (this.cartQuantities.get(id) ?? 0) > 0;
  }

  getQty(id: number): number {
    return this.cartQuantities.get(id) ?? 0;
  }

  isWishlisted(id: number): boolean {
    return this.wishlistItems.includes(id);
  }

  addToCart(product: Product): void {
    this.cartService.addToCart({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price
    });
  }

  increment(id: number): void {
    const qty = this.getQty(id);
    this.cartService.updateQuantity(id, qty + 1);
  }

  decrement(id: number): void {
    const qty = this.getQty(id);
    if (qty > 1) {
      this.cartService.updateQuantity(id, qty - 1);
    } else {
      this.cartService.removeFromCart(id);
    }
  }

  toggleWishlist(product: Product): void {
    if (this.isWishlisted(product.id)) {
      this.wishlistService.removeFromWishlist(product.id);
    } else {
      this.wishlistService.addToWishlist({
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        rating: product.rating ?? 0,
        reviews: product.reviews ?? 0
      });
    }
  }

  navigateToProduct(id: number): void {
    this.router.navigate(['/product', id]);
  }

  setCollectionTab(index: number): void {
    this.activeCollectionTab = index;
  }

  getStars(rating: number): number[] {
    return [1, 2, 3, 4, 5];
  }

  // ── Fallback mock data ──
  private getMockProducts(): Product[] {
    return Array.from({ length: 8 }, (_, i) => ({
      id: i + 1,
      name: ['Floral Bangle Set', 'Gold Kada', 'Silver Churi', 'Oxidised Bangle', 'Pearl Cuff', 'Tribal Kada', 'Stone Bangle', 'Meenakari Cuff'][i],
      image: `https://images.unsplash.com/photo-${['1612198273689-a8e50e5f4c4b', '1515377905703-c4788e51af15', '1599751449128-eb7249c3d6b1', '1506794778202-cad84cf45f1d', '1543163521-1bf539c55dd2', '1535632787350-4e68ef0ac584', '1611955167811-4711904bb9f8', '1601821765780-754fa98637c1'][i]}?w=400&q=80`,
      price: [299, 499, 199, 349, 599, 249, 449, 399][i],
      rating: 4 + (i % 2 === 0 ? 0.5 : 0),
      reviews: 10 + i * 7,
      category: ['Bangles', 'Kadas', 'Churis', 'Oxidised', 'Pearls', 'Tribal', 'Stone', 'Meenakari'][i],
      stock: 10,
      isOnSale: i % 3 === 0,
      originalPrice: i % 3 === 0 ? [299, 499, 199, 349][i % 4] * 1.25 : undefined,
      badge: i % 3 === 0 ? '-20%' : undefined
    }));
  }

  private getMockCategories(): Category[] {
    return [
      { id: 1, name: 'Bangles', image: 'https://images.unsplash.com/photo-1612198273689-a8e50e5f4c4b?w=400&q=80' },
      { id: 2, name: 'Earrings', image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80' },
      { id: 3, name: 'Necklaces', image: 'https://images.unsplash.com/photo-1599751449128-eb7249c3d6b1?w=400&q=80' },
      { id: 4, name: 'Rings', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80' }
    ];
  }
}
