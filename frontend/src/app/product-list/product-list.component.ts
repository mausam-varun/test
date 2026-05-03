import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINTS } from '../config/app-config';
import { CartService } from '../services/cart.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

interface ProductImage {
  id: number;
  image_url: string;
  is_primary_image: boolean;
}

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  image_url: string;
  primary_image_id: number | null;
  images: ProductImage[];
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();
  private readonly apiUrl = API_ENDPOINTS.products;

  allProducts: Product[] = [];
  filteredProducts: Product[] = [];
  pagedProducts: Product[] = [];

  searchText = '';
  selectedCategory = '';
  categories: string[] = [];

  isLoading = false;
  errorMessage = '';

  // Pagination
  currentPage = 1;
  readonly pageSize = 8;
  totalPages = 1;

  constructor(
    private readonly http: HttpClient,
    private readonly cartService: CartService,
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // Subscribe to cart changes to trigger UI updates
    this.cartService.cartItems$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.cdr.markForCheck();
    });
    
    this.loadProducts();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadProducts(): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.http.get<Product[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.allProducts = Array.isArray(data) ? data : (data as any)?.data ?? [];
        this.categories = [...new Set(this.allProducts.map(p => p.category).filter(Boolean))].sort();
        this.applyFilter();
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Failed to load products. Please ensure the backend is running.';
        this.isLoading = false;
      }
    });
  }

  applyFilter(): void {
    const search = this.searchText.trim().toLowerCase();
    this.filteredProducts = this.allProducts.filter(p => {
      const matchesSearch = !search ||
        p.name.toLowerCase().includes(search) ||
        p.category.toLowerCase().includes(search);
      const matchesCategory = !this.selectedCategory || p.category === this.selectedCategory;
      return matchesSearch && matchesCategory;
    });
    this.currentPage = 1;
    this.updatePage();
  }

  private updatePage(): void {
    this.totalPages = Math.max(1, Math.ceil(this.filteredProducts.length / this.pageSize));
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages;
    }
    const start = (this.currentPage - 1) * this.pageSize;
    this.pagedProducts = this.filteredProducts.slice(start, start + this.pageSize);
  }

  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages) { return; }
    this.currentPage = page;
    this.updatePage();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  prevPage(): void { this.goToPage(this.currentPage - 1); }
  nextPage(): void { this.goToPage(this.currentPage + 1); }

  getPageNumbers(): number[] {
    const maxVisible = 5;
    let start = Math.max(1, this.currentPage - Math.floor(maxVisible / 2));
    const end = Math.min(this.totalPages, start + maxVisible - 1);
    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }

  onSearchChange(): void { this.applyFilter(); }
  onCategoryChange(): void { this.applyFilter(); }

  getImageUrl(product: Product): string {
    const primary = product.images?.find(img => img.is_primary_image);
    return primary?.image_url || product.image_url || 'assets/placeholder.png';
  }

  clearFilters(): void {
    this.searchText = '';
    this.selectedCategory = '';
    this.applyFilter();
  }

  // Cart Management
  addToCart(product: Product): void {
    this.cartService.addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: this.getImageUrl(product)
    });
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
}
