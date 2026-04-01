import { Component, HostListener, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from '../services/cart.service';
import { CatalogProduct, ProductCatalogService } from '../services/product-catalog.service';
import { WishlistService } from '../services/wishlist.service';

interface Product extends CatalogProduct {
  image: string;
  originalPrice?: number;
  inStock?: boolean;
  isNew?: boolean;
}

interface Category {
  id: number;
  name: string;
  count: number;
  selected?: boolean;
}

interface MaterialFilter {
  name: string;
  count: number;
  checked: boolean;
}

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit, OnDestroy {
  products: Product[] = [];

  categories: Category[] = [];

  materials: MaterialFilter[] = [];

  filteredProducts: Product[] = [];
  priceRange: [number, number] = [0, 100];
  minPrice = 0;
  maxPrice = 100;
  currentPage = 1;
  itemsPerPage = 12;
  totalPages = 1;
  sortBy: string = 'popularity';
  minRating = 0;
  searchText = '';
  isLoading = false;
  errorMessage = '';
  isMobileFiltersOpen = false;
  recentlyAddedProductIds = new Set<number>();
  private requestedCategoryName = '';
  private readonly addedTextTimeouts = new Map<number, ReturnType<typeof setTimeout>>();
  private readonly subscriptions = new Subscription();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly cartService: CartService,
    @Inject(ProductCatalogService) private readonly productCatalogService: ProductCatalogService,
    private readonly wishlistService: WishlistService
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.route.queryParamMap.subscribe((params) => {
        this.requestedCategoryName = (params.get('category') || '').trim();
        this.applyRequestedCategory();
      })
    );

    this.loadProducts();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    this.addedTextTimeouts.forEach((timeoutId) => clearTimeout(timeoutId));
    this.addedTextTimeouts.clear();
  }

  loadProducts(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.subscriptions.add(
      this.productCatalogService.getProducts().subscribe({
        next: (products) => {
          this.products = products.map((product) => ({
            ...product,
            image: product.images.find((image) => image.is_primary_image)?.image_url || product.image_url,
            originalPrice: Number((product.price * 1.18).toFixed(2)),
            inStock: true,
            isNew: product.id % 3 === 0
          }));

          this.categories = this.buildCategoryFilters(this.products);
          this.materials = this.buildMaterialFilters(this.products);
          this.applyRequestedCategory();
          this.syncPriceRangeBounds();
          this.filterProducts();
          this.isLoading = false;
        },
        error: () => {
          this.errorMessage = 'Failed to load shop products. Please ensure the backend is running.';
          this.isLoading = false;
        }
      })
    );
  }

  filterProducts(): void {
    let filtered = this.products.filter(product => {
      const priceInRange = product.price >= this.priceRange[0] && product.price <= this.priceRange[1];
      const selectedCategories = this.categories.filter(cat => cat.selected).map(cat => cat.name);
      const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
      const selectedMaterials = this.materials.filter(mat => mat.checked).map(mat => mat.name);
      const materialMatch = selectedMaterials.length === 0 || selectedMaterials.includes(product.material);
      const ratingMatch = product.rating >= this.minRating;
      const searchMatch = this.searchText === '' || 
                         product.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
                         product.category.toLowerCase().includes(this.searchText.toLowerCase()) ||
                         product.material.toLowerCase().includes(this.searchText.toLowerCase());
      
      return priceInRange && categoryMatch && materialMatch && ratingMatch && searchMatch;
    });

    filtered = this.sortProducts(filtered);
    
    this.filteredProducts = filtered;
    this.currentPage = 1;
    this.calculatePagination();
  }

  sortProducts(products: Product[]): Product[] {
    const sorted = [...products];
    
    switch (this.sortBy) {
      case 'popularity':
        return sorted.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
      case 'price-low':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-high':
        return sorted.sort((a, b) => b.price - a.price);
      case 'newest':
        return sorted.sort((a, b) => b.id - a.id);
      case 'rating':
        return sorted.sort((a, b) => b.rating - a.rating);
      default:
        return sorted;
    }
  }

  calculatePagination(): void {
    this.totalPages = Math.max(1, Math.ceil(this.filteredProducts.length / this.itemsPerPage));
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages;
    }
  }

  getPaginatedProducts(): Product[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.filteredProducts.slice(start, end);
  }

  getPageNumbers(): number[] {
    const pages: number[] = [];
    const maxVisible = 5;
    let startPage = Math.max(1, this.currentPage - Math.floor(maxVisible / 2));
    let endPage = Math.min(this.totalPages, startPage + maxVisible - 1);
    if (endPage - startPage + 1 < maxVisible) {
      startPage = Math.max(1, endPage - maxVisible + 1);
    }
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  onPriceRangeChange(): void {
    this.filterProducts();
  }

  onMaterialChange(): void {
    this.filterProducts();
  }

  onCategoryClick(category: Category): void {
    category.selected = !category.selected;
    this.filterProducts();
  }

  toggleMobileFilters(): void {
    this.isMobileFiltersOpen = !this.isMobileFiltersOpen;
  }

  closeMobileFilters(): void {
    this.isMobileFiltersOpen = false;
  }

  @HostListener('window:keydown.escape')
  onEscapePressed(): void {
    this.closeMobileFilters();
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    if (window.innerWidth > 768 && this.isMobileFiltersOpen) {
      this.closeMobileFilters();
    }
  }

  onSortChange(sortValue: string): void {
    this.sortBy = sortValue;
    this.filterProducts();
  }

  addToCart(product: Product): void {
    this.cartService.addToCart({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price
    });

    this.recentlyAddedProductIds.add(product.id);
    const existingTimeout = this.addedTextTimeouts.get(product.id);
    if (existingTimeout) {
      clearTimeout(existingTimeout);
    }

    const timeoutId = setTimeout(() => {
      this.recentlyAddedProductIds.delete(product.id);
      this.addedTextTimeouts.delete(product.id);
    }, 2000);

    this.addedTextTimeouts.set(product.id, timeoutId);
  }

  getProductQuantity(productId: number): number {
    const cartItems = this.cartService.getCartItemsSnapshot();
    return cartItems.find(item => item.id === productId)?.quantity || 0;
  }

  incrementQuantity(product: Product): void {
    const currentQuantity = this.getProductQuantity(product.id);
    this.cartService.updateQuantity(product.id, currentQuantity + 1);
  }

  decrementQuantity(product: Product): void {
    const currentQuantity = this.getProductQuantity(product.id);
    if (currentQuantity > 1) {
      this.cartService.updateQuantity(product.id, currentQuantity - 1);
    } else if (currentQuantity === 1) {
      this.cartService.removeFromCart(product.id);
      this.recentlyAddedProductIds.delete(product.id);
      const existingTimeout = this.addedTextTimeouts.get(product.id);
      if (existingTimeout) {
        clearTimeout(existingTimeout);
      }
      this.addedTextTimeouts.delete(product.id);
    }
  }

  addToWishlist(product: Product): void {
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

  onSearch(searchValue: string): void {
    this.searchText = searchValue;
    this.filterProducts();
  }

  trackByProductId(index: number, product: Product): number {
    return product.id;
  }

  private applyRequestedCategory(): void {
    if (!this.categories.length) {
      return;
    }

    const normalizedRequestedCategory = this.requestedCategoryName.toLowerCase();

    this.categories = this.categories.map((category) => ({
      ...category,
      selected: normalizedRequestedCategory
        ? category.name.toLowerCase() === normalizedRequestedCategory
        : false
    }));

    if (this.products.length) {
      this.filterProducts();
    }
  }

  private buildCategoryFilters(products: Product[]): Category[] {
    return [...new Set(products.map((product) => product.category).filter(Boolean))]
      .sort((left, right) => left.localeCompare(right))
      .map((name, index) => ({
        id: index + 1,
        name,
        count: products.filter((product) => product.category === name).length,
        selected: false
      }));
  }

  private buildMaterialFilters(products: Product[]): MaterialFilter[] {
    return [...new Set(products.map((product) => product.material).filter(Boolean))]
      .sort((left, right) => left.localeCompare(right))
      .map((name) => ({
        name,
        count: products.filter((product) => product.material === name).length,
        checked: false
      }));
  }

  private syncPriceRangeBounds(): void {
    if (!this.products.length) {
      this.minPrice = 0;
      this.maxPrice = 100;
      this.priceRange = [0, 100];
      return;
    }

    const prices = this.products.map((product) => product.price);
    this.minPrice = Math.floor(Math.min(...prices));
    this.maxPrice = Math.ceil(Math.max(...prices));
    this.priceRange = [this.minPrice, this.maxPrice];
  }
}
