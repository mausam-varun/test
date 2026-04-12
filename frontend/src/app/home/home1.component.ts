import { Component, HostListener, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../services/cart.service';
import { WishlistService } from '../services/wishlist.service';
import { HeroSlide } from './components/hero/hero.component';
import { API_ENDPOINTS } from '../config/app-config';

interface CategoryCardModel {
  id?: number;
  name: string;
  description: string;
  image: string;
}

interface ProductCardModel {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  reviews: number;
}

interface MatchResultPayload {
  title?: string;
  description?: string;
  colors?: string[];
  primary_color?: string;
  secondary_colors?: string[];
  color_hex?: string[];
  category?: string;
  size?: string;
  design?: string[];
  pattern?: string[];
  style?: string[];
  material?: string[];
  occasion?: string[];
  craft_type?: string[];
  usage?: string[];
  price?: number;
  spec_view?: string;
  intent_view?: string;
  embedding_modes?: string[];
}

interface MatchResult {
  id?: number;
  product_id?: number;
  similarity: number;
  matching_percentage?: number;
  payload?: MatchResultPayload;
}

interface MatchBanglesResponse {
  matches: MatchResult[];
  query_metadata?: MatchResultPayload | null;
  message?: string;
}

interface CatalogProductImage {
  image_url: string;
  is_primary_image: boolean;
}

interface CatalogProduct {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  image_url: string;
  rating?: number;
  reviews?: number;
  images?: CatalogProductImage[];
}

interface MatchedProductView {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  similarity: number;
  matching_percentage?: number;
}

interface SliderImage {
  id: number;
  image_url: string;
  title?: string;
  subtitle?: string;
  cta_url?: string;
}

interface SliderPublicResponse {
  display_count: number;
  images: SliderImage[];
}

interface HomeCategoryResponseItem {
  id: number;
  name: string;
  description?: string;
  image_url?: string | null;
  product_count?: number;
}

interface HomeCategoryResponse {
  display_count: number;
  categories: HomeCategoryResponseItem[];
}

const DEFAULT_CATEGORY_CARDS: CategoryCardModel[] = [
  {
    name: 'Bangles',
    description: 'Handpicked statement bangles for festive and everyday styling.',
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Earrings',
    description: 'Elegant handcrafted earrings to complete your look beautifully.',
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Home Decor',
    description: 'Warm artisanal decor pieces designed to brighten every corner.',
    image: 'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Wall Hangings',
    description: 'Creative wall accents that add texture, color, and personality.',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=80'
  }
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private readonly productApiBaseUrl = API_ENDPOINTS.products;
  private readonly sliderApiBaseUrl = API_ENDPOINTS.slider;
  private readonly categoryApiBaseUrl = API_ENDPOINTS.categories;
  private readonly featuredProductsLimit = 8;

  readonly heroImage = 'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=1400&q=80';

  categories: CategoryCardModel[] = [...DEFAULT_CATEGORY_CARDS];

  heroSliderImages: string[] = [];
  heroSlides: HeroSlide[] = [];

  featuredProducts: ProductCardModel[] = [];
  categorySliderIndex = 0;
  categoriesVisibleCount = 4;
  featuredSliderIndex = 0;
  featuredVisibleCount = 4;

  selectedDressImage: File | null = null;
  selectedDressImagePreview: string | null = null;
  isMatching = false;
  matchError = '';
  matchedProducts: MatchedProductView[] = [];
  detectedDetails: MatchResultPayload | null = null;
  generatedBangleImageUrl: string | null = null;
  Math = Math;  // Expose Math to template

  constructor(
    private readonly http: HttpClient,
    private readonly cartService: CartService,
    private readonly wishlistService: WishlistService
  ) {}

  ngOnInit(): void {
    this.updateCategorySliderLayout(typeof window !== 'undefined' ? window.innerWidth : 1280);
    this.loadHeroSliderImages();
    this.loadHomeCategories();
    this.loadFeaturedProducts();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: UIEvent): void {
    const target = event.target as Window | null;
    this.updateCategorySliderLayout(target?.innerWidth || 1280);
  }

  private loadFeaturedProducts(): void {
    const url = `${this.productApiBaseUrl}/featured?limit=${this.featuredProductsLimit}`;

    this.http.get<CatalogProduct[]>(url).subscribe({
      next: (products) => {
        const safeProducts = Array.isArray(products) ? products : [];
        this.featuredProducts = safeProducts.map((product) => {
          const primaryImage = product.images?.find((img) => img.is_primary_image)?.image_url;

          return {
            id: product.id,
            name: product.name,
            image: primaryImage || product.image_url || this.heroImage,
            price: Number(product.price) || 0,
            rating: Number(product.rating) || 0,
            reviews: Number(product.reviews) || 0
          };
        });
      },
      error: () => {
        this.featuredProducts = [];
      }
    });
  }

  private loadHeroSliderImages(): void {
    this.http.get<SliderPublicResponse>(`${this.sliderApiBaseUrl}/public`).subscribe({
      next: (response) => {
        const images = Array.isArray(response?.images) ? response.images : [];
        this.heroSlides = images
          .filter((item) => typeof item.image_url === 'string' && item.image_url.trim().length > 0)
          .map((item) => ({
            image_url: item.image_url,
            title: item.title || '',
            subtitle: item.subtitle || '',
            cta_url: item.cta_url || ''
          }));
        this.heroSliderImages = this.heroSlides.map((s) => s.image_url);
      },
      error: () => {
        this.heroSlides = [];
        this.heroSliderImages = [];
      }
    });
  }

  private loadHomeCategories(): void {
    this.http.get<HomeCategoryResponse>(`${this.categoryApiBaseUrl}/home`).subscribe({
      next: (response) => {
        const apiCategories = Array.isArray(response?.categories) ? response.categories : [];

        if (!apiCategories.length) {
          this.categories = [...DEFAULT_CATEGORY_CARDS];
          this.categorySliderIndex = 0;
          return;
        }

        this.categories = apiCategories.map((category) => ({
          id: category.id,
          name: category.name,
          description: String(category.description || '').trim() || `Explore handcrafted ${category.name.toLowerCase()} for every occasion.`,
          image: category.image_url || DEFAULT_CATEGORY_CARDS.find((item) => item.name.toLowerCase() === String(category.name || '').toLowerCase())?.image || this.heroImage
        }));

        this.categorySliderIndex = Math.min(this.categorySliderIndex, this.maxCategorySliderIndex);
      },
      error: () => {
        this.categories = [...DEFAULT_CATEGORY_CARDS];
        this.categorySliderIndex = 0;
      }
    });
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
    if (this.selectedDressImagePreview) {
      URL.revokeObjectURL(this.selectedDressImagePreview);
    }
    this.selectedDressImagePreview = URL.createObjectURL(file);
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

    this.http.post<MatchResult[] | MatchBanglesResponse>(`${this.productApiBaseUrl}/match-bangles`, formData).subscribe({
      next: (response) => {
        console.log('🔍 Match response received:', response);
        
        const safeMatches = Array.isArray(response) ? response : (response?.matches || []);
        console.log('📦 Extracted matches array:', safeMatches);
        console.log('📊 Match count:', safeMatches.length);

        this.generatedBangleImageUrl = null;
        this.detectedDetails = Array.isArray(response)
          ? (safeMatches[0]?.payload || null)
          : (response?.query_metadata || safeMatches[0]?.payload || null);

        if (!safeMatches.length) {
          console.warn('❌ No matches found - displaying error');
          this.isMatching = false;
          this.matchError = Array.isArray(response)
            ? 'No matching bangles found.'
            : (response?.message || 'No matching bangles found.');
          return;
        }

        console.log('✅ Calling loadMatchedProductCards with', safeMatches.length, 'matches');
        this.loadMatchedProductCards(safeMatches);
      },
      error: (error) => {
        console.error('❌ API Error:', error);
        this.isMatching = false;
        this.matchError = error?.error?.message || 'Failed to find matching bangles. Please try again.';
      }
    });
  }

  private loadMatchedProductCards(matches: MatchResult[]): void {
    console.log('📡 Fetching product catalog for', matches.length, 'matches...');
    
    this.http.get<CatalogProduct[]>(this.productApiBaseUrl).subscribe({
      next: (products) => {
        const safeProducts = Array.isArray(products) ? products : [];
        console.log('📦 Loaded', safeProducts.length, 'products from catalog');
        
        const byId = new Map<number, CatalogProduct>(safeProducts.map((product) => [product.id, product]));

        this.matchedProducts = matches
          .map((match) => {
            const matchId = Number(match.id ?? match.product_id ?? 0);
            if (!Number.isFinite(matchId) || matchId <= 0) {
              console.warn('⚠️ Invalid match ID:', matchId);
              return null;
            }

            const product = byId.get(matchId);
            if (!product) {
              console.warn('⚠️ Product not found for match ID:', matchId);
              return null;
            }

            const primaryImage = product.images?.find((img) => img.is_primary_image)?.image_url;
            const matchedProduct: MatchedProductView = {
              id: product.id,
              name: product.name,
              price: product.price,
              imageUrl: primaryImage || product.image_url || this.heroImage,
              similarity: match.similarity,
              matching_percentage: match.matching_percentage || Math.round((match.similarity || 0) * 100)
            };
            return matchedProduct;
          })
          .filter((item): item is MatchedProductView => item !== null)
          .sort((a, b) => (b.matching_percentage || 0) - (a.matching_percentage || 0));

        console.log('✅ Successfully mapped', this.matchedProducts.length, 'products for display');
        this.isMatching = false;
        if (!this.matchedProducts.length) {
          this.matchError = 'Matches found in vector DB, but products could not be loaded from catalog.';
        }
      },
      error: () => {
        console.error('❌ Failed to load products');
        this.isMatching = false;
        this.matchError = 'Matching succeeded, but loading product details failed.';
      }
    });
  }

  similarityPercent(value: number): number {
    return Math.max(0, Math.min(100, Math.round((value || 0) * 100)));
  }

  onMatchedImageError(product: MatchedProductView): void {
    product.imageUrl = this.heroImage;
  }

  addToCart(product: ProductCardModel): void {
    this.cartService.addToCart({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price
    });
  }

  addToWishlist(product: ProductCardModel): void {
    if (this.wishlistService.isInWishlist(product.id)) {
      this.wishlistService.removeFromWishlist(product.id);
      return;
    }

    this.wishlistService.addToWishlist({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      rating: product.rating,
      reviews: product.reviews
    });
  }

  isWishlisted(productId: number): boolean {
    return this.wishlistService.isInWishlist(productId);
  }

  get canSlideCategoriesPrev(): boolean {
    return this.categorySliderIndex > 0;
  }

  get canSlideCategoriesNext(): boolean {
    return this.categorySliderIndex < this.maxCategorySliderIndex;
  }

  get categorySliderOffsetPercent(): number {
    return this.categorySliderIndex * (100 / this.categoriesVisibleCount);
  }

  get canSlideFeaturedPrev(): boolean {
    return this.featuredSliderIndex > 0;
  }

  get canSlideFeaturedNext(): boolean {
    return this.featuredSliderIndex < this.maxFeaturedSliderIndex;
  }

  get featuredSliderOffsetPercent(): number {
    return this.featuredSliderIndex * (100 / this.featuredVisibleCount);
  }

  trackByName(_: number, item: CategoryCardModel): string {
    return String(item.id ?? item.name);
  }

  trackById(_: number, item: ProductCardModel): number {
    return item.id;
  }

  trackByMatchedId(_: number, item: MatchedProductView): number {
    return item.id;
  }

  slideCategoriesPrev(): void {
    if (!this.canSlideCategoriesPrev) {
      return;
    }

    this.categorySliderIndex -= 1;
  }

  slideCategoriesNext(): void {
    if (!this.canSlideCategoriesNext) {
      return;
    }

    this.categorySliderIndex += 1;
  }

  slideFeaturedPrev(): void {
    if (!this.canSlideFeaturedPrev) {
      return;
    }

    this.featuredSliderIndex -= 1;
  }

  slideFeaturedNext(): void {
    if (!this.canSlideFeaturedNext) {
      return;
    }

    this.featuredSliderIndex += 1;
  }

  private get maxCategorySliderIndex(): number {
    return Math.max(0, this.categories.length - this.categoriesVisibleCount);
  }

  private get maxFeaturedSliderIndex(): number {
    return Math.max(0, this.featuredProducts.length - this.featuredVisibleCount);
  }

  private updateCategorySliderLayout(viewportWidth: number): void {
    if (viewportWidth <= 620) {
      this.categoriesVisibleCount = 1;
      this.featuredVisibleCount = 1;
    } else if (viewportWidth <= 820) {
      this.categoriesVisibleCount = 2;
      this.featuredVisibleCount = 2;
    } else if (viewportWidth <= 1180) {
      this.categoriesVisibleCount = 3;
      this.featuredVisibleCount = 3;
    } else {
      this.categoriesVisibleCount = 4;
      this.featuredVisibleCount = 4;
    }

    this.categorySliderIndex = Math.min(this.categorySliderIndex, this.maxCategorySliderIndex);
    this.featuredSliderIndex = Math.min(this.featuredSliderIndex, this.maxFeaturedSliderIndex);
  }
}
