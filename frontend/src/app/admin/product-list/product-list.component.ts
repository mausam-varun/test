import { Component, HostListener, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { API_ENDPOINTS } from '../../config/app-config';

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
  selector: 'app-admin-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class AdminProductListComponent implements OnInit {
  private readonly apiUrl = API_ENDPOINTS.products;

  allProducts: Product[] = [];
  filteredProducts: Product[] = [];
  pagedProducts: Product[] = [];

  searchText = '';
  selectedCategory = '';
  categories: string[] = [];

  isLoading = false;
  errorMessage = '';
  successMessage = '';

  confirmDeleteId: number | null = null;
  previewImageUrl: string | null = null;
  previewImageAlt = 'Product image preview';
  previewImages: ProductImage[] = [];
  previewImageIndex = 0;
  previewProductName = '';

  // Pagination
  currentPage = 1;
  readonly pageSize = 10;
  totalPages = 1;

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router
  ) {}

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
        this.errorMessage = 'Failed to load products. Ensure the backend is running on port 5002.';
        this.isLoading = false;
      }
    });
  }

  applyFilter(): void {
    const search = this.searchText.trim().toLowerCase();
    this.filteredProducts = this.allProducts.filter(p => {
      const matchesSearch = !search ||
        p.name.toLowerCase().includes(search) ||
        p.category.toLowerCase().includes(search) ||
        (p.description ?? '').toLowerCase().includes(search);
      const matchesCategory = !this.selectedCategory || p.category === this.selectedCategory;
      return matchesSearch && matchesCategory;
    });
    this.currentPage = 1;
    this.updatePage();
  }

  private updatePage(): void {
    this.totalPages = Math.max(1, Math.ceil(this.filteredProducts.length / this.pageSize));
    if (this.currentPage > this.totalPages) { this.currentPage = this.totalPages; }
    const start = (this.currentPage - 1) * this.pageSize;
    this.pagedProducts = this.filteredProducts.slice(start, start + this.pageSize);
  }

  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages) { return; }
    this.currentPage = page;
    this.updatePage();
  }

  prevPage(): void { this.goToPage(this.currentPage - 1); }
  nextPage(): void { this.goToPage(this.currentPage + 1); }

  getPageNumbers(): number[] {
    const maxVisible = 5;
    let start = Math.max(1, this.currentPage - Math.floor(maxVisible / 2));
    const end = Math.min(this.totalPages, start + maxVisible - 1);
    if (end - start + 1 < maxVisible) { start = Math.max(1, end - maxVisible + 1); }
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }

  getImageUrl(product: Product): string {
    const primary = product.images?.find(img => img.is_primary_image);
    return primary?.image_url || product.image_url || 'assets/placeholder.png';
  }

  getProductImages(product: Product): ProductImage[] {
    if (Array.isArray(product.images) && product.images.length) {
      return product.images;
    }

    if (product.image_url) {
      return [
        {
          id: -product.id,
          image_url: product.image_url,
          is_primary_image: true
        }
      ];
    }

    return [];
  }

  getVisibleProductImages(product: Product, maxVisible = 3): ProductImage[] {
    return this.getProductImages(product).slice(0, maxVisible);
  }

  getHiddenImageCount(product: Product, maxVisible = 3): number {
    const total = this.getProductImages(product).length;
    return Math.max(0, total - maxVisible);
  }

  openHiddenImagesPreview(product: Product, maxVisible = 3): void {
    const images = this.getProductImages(product);
    if (!images.length) {
      return;
    }
    const startIndex = Math.min(maxVisible, images.length - 1);
    this.openImagePreview(product, startIndex);
  }

  openImagePreview(product: Product, imageIndex: number): void {
    const images = this.getProductImages(product);
    if (!images.length) {
      return;
    }

    const safeIndex = Math.max(0, Math.min(imageIndex, images.length - 1));
    this.previewImages = images;
    this.previewImageIndex = safeIndex;
    this.previewImageUrl = images[safeIndex].image_url;
    this.previewProductName = product.name;
    this.previewImageAlt = `${product.name} image preview`;
  }

  selectPreviewImage(imageIndex: number): void {
    if (!this.previewImages.length) {
      return;
    }

    const safeIndex = Math.max(0, Math.min(imageIndex, this.previewImages.length - 1));
    this.previewImageIndex = safeIndex;
    this.previewImageUrl = this.previewImages[safeIndex].image_url;
  }

  showPrevPreviewImage(): void {
    if (!this.previewImages.length) {
      return;
    }

    const nextIndex = (this.previewImageIndex - 1 + this.previewImages.length) % this.previewImages.length;
    this.previewImageIndex = nextIndex;
    this.previewImageUrl = this.previewImages[nextIndex].image_url;
  }

  showNextPreviewImage(): void {
    if (!this.previewImages.length) {
      return;
    }

    const nextIndex = (this.previewImageIndex + 1) % this.previewImages.length;
    this.previewImageIndex = nextIndex;
    this.previewImageUrl = this.previewImages[nextIndex].image_url;
  }

  closeImagePreview(): void {
    this.previewImageUrl = null;
    this.previewImageAlt = 'Product image preview';
    this.previewProductName = '';
    this.previewImages = [];
    this.previewImageIndex = 0;
  }

  @HostListener('window:keydown', ['$event'])
  handlePreviewKeydown(event: KeyboardEvent): void {
    if (!this.previewImageUrl) {
      return;
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      this.closeImagePreview();
      return;
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      this.showPrevPreviewImage();
      return;
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      this.showNextPreviewImage();
    }
  }

  get hasPreviewNavigation(): boolean {
    return this.previewImages.length > 1;
  }

  get previewImageCounterLabel(): string {
    if (!this.previewImages.length) {
      return '';
    }

    return `${this.previewImageIndex + 1} / ${this.previewImages.length}`;
  }

  requestDelete(id: number): void { this.confirmDeleteId = id; }
  cancelDelete(): void { this.confirmDeleteId = null; }

  confirmDelete(id: number): void {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe({
      next: () => {
        this.allProducts = this.allProducts.filter(p => p.id !== id);
        this.confirmDeleteId = null;
        this.successMessage = 'Product deleted successfully.';
        this.applyFilter();
        setTimeout(() => { this.successMessage = ''; }, 3000);
      },
      error: () => {
        this.errorMessage = 'Failed to delete product.';
        this.confirmDeleteId = null;
      }
    });
  }

  goToAddProduct(): void {
    this.router.navigate(['/admin/add-product']);
  }

  goToEditProduct(productId: number): void {
    this.router.navigate(['/admin/add-product'], { queryParams: { id: productId } });
  }

  clearFilters(): void {
    this.searchText = '';
    this.selectedCategory = '';
    this.applyFilter();
  }

  get startIndex(): number {
    return (this.currentPage - 1) * this.pageSize + 1;
  }

  get endIndex(): number {
    return Math.min(this.currentPage * this.pageSize, this.filteredProducts.length);
  }
}
