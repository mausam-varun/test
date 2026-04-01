import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINTS } from '../config/app-config';

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
export class ProductListComponent implements OnInit {
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

  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {
    this.loadProducts();
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
}
