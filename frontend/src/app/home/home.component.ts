import { Component, HostListener, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../services/cart.service';
import { WishlistService } from '../services/wishlist.service';

interface CategoryCardModel {
  name: string;
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
  colors?: string[];
  color_hex?: string[];
  category?: string;
  size?: string;
  design?: string[];
  pattern?: string[];
  style?: string[];
  material?: string[];
}

interface MatchResult {
  id: number;
  similarity: number;
  payload?: MatchResultPayload;
}

interface MatchBanglesResponse {
  matches: MatchResult[];
  query_metadata?: MatchResultPayload | null;
  generated_image_base64?: string | null;
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
  images?: CatalogProductImage[];
}

interface MatchedProductView {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  similarity: number;
}

interface SliderImage {
  id: number;
  image_url: string;
  title?: string;
  subtitle?: string;
}

interface SliderPublicResponse {
  display_count: number;
  images: SliderImage[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private readonly productApiBaseUrl = 'http://localhost:5001/api/products';
  private readonly sliderApiBaseUrl = 'http://localhost:5001/api/slider';
  private readonly featuredProductsLimit = 8;

  readonly heroImage = 'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=1400&q=80';

  readonly categories: CategoryCardModel[] = [
    { name: 'Bangles', image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=500&q=80' },
    { name: 'Earrings', image: 'https://images.unsplash.com/photo-1617038220278-4bcf45f2cf52?auto=format&fit=crop&w=500&q=80' },
    { name: 'Home Decor', image: 'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=500&q=80' },
    { name: 'Wall Hangings', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=500&q=80' },
    { name: 'Gift Sets', image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=500&q=80' }
  ];

  heroSliderImages: string[] = [];

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

  constructor(
    private readonly http: HttpClient,
    private readonly cartService: CartService,
    private readonly wishlistService: WishlistService
  ) {}

  ngOnInit(): void {
    this.updateCategorySliderLayout(typeof window !== 'undefined' ? window.innerWidth : 1280);
    this.loadHeroSliderImages();
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
            rating: 5,
            reviews: 40 + (product.id % 160)
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
        this.heroSliderImages = images
          .map((item) => item.image_url)
          .filter((url) => typeof url === 'string' && url.trim().length > 0);
      },
      error: () => {
        this.heroSliderImages = [];
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

  private loadMatchedProductCards(matches: MatchResult[]): void {
    this.http.get<CatalogProduct[]>(this.productApiBaseUrl).subscribe({
      next: (products) => {
        const safeProducts = Array.isArray(products) ? products : [];
        const byId = new Map<number, CatalogProduct>(safeProducts.map((product) => [product.id, product]));

        this.matchedProducts = matches
          .map((match) => {
            const product = byId.get(match.id);
            if (!product) {
              return null;
            }

            const primaryImage = product.images?.find((img) => img.is_primary_image)?.image_url;
            return {
              id: product.id,
              name: product.name,
              price: product.price,
              imageUrl: primaryImage || product.image_url,
              similarity: match.similarity
            };
          })
          .filter((item): item is MatchedProductView => Boolean(item));

        this.isMatching = false;
        if (!this.matchedProducts.length) {
          this.matchError = 'Matches found in vector DB, but products could not be loaded from catalog.';
        }
      },
      error: () => {
        this.isMatching = false;
        this.matchError = 'Matching succeeded, but loading product details failed.';
      }
    });
  }

  similarityPercent(value: number): number {
    return Math.max(0, Math.min(100, Math.round((value || 0) * 100)));
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
    return item.name;
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
