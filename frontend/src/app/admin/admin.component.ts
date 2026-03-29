import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

interface AiIndexingStatus {
  attempted: boolean;
  stored: boolean;
  mode?: 'off' | 'async' | 'sync' | string;
  message: string;
}

interface ProductMutationResponse extends Product {
  ai_indexing?: AiIndexingStatus;
}

interface SelectedImage {
  file: File;
  previewUrl: string;
  isPrimary: boolean;
}

interface AiIndexingModeResponse {
  mode: 'off' | 'async' | 'sync';
  source: 'env' | 'runtime' | string;
  message?: string;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {
  private readonly apiBaseUrl = 'http://localhost:5002/api/products';

  // Form fields
  productName = '';
  productPrice: number | null = null;
  productCategory = '';
  productDescription = '';
  productColor = '';
  productSize = '';
  productDesign = '';
  productPattern = '';
  productStyle = '';
  productMaterial = '';
  selectedImages: SelectedImage[] = [];

  // Mode
  editMode = false;
  editingProductId: number | null = null;
  editExistingImages: ProductImage[] = []; // images already saved on the product

  // UI state
  isSubmitting = false;
  isLoadingProducts = false;
  isUpdatingAiMode = false;
  confirmDeleteId: number | null = null;
  successMessage = '';
  errorMessage = '';
  aiIndexingMessage = '';
  aiIndexingState: 'success' | 'info' | 'error' = 'info';
  selectedAiMode: 'off' | 'async' | 'sync' = 'async';
  activeAiMode: 'off' | 'async' | 'sync' = 'async';
  aiModeSource = 'env';

  products: Product[] = [];

  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {
    this.loadAiIndexingMode();
    this.loadProducts();
  }

  ngOnDestroy(): void {
    this.revokeAllPreviews();
  }

  onImagesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const files = Array.from(input.files ?? []);
    const allowedTypes = ['image/jpeg', 'image/png'];
    const invalid = files.filter(f => !allowedTypes.includes(f.type));

    if (invalid.length) {
      this.errorMessage = 'Only JPG and PNG images are allowed.';
      input.value = '';
      return;
    }

    this.errorMessage = '';
    const newImages: SelectedImage[] = files.map(f => ({
      file: f,
      previewUrl: URL.createObjectURL(f),
      isPrimary: false
    }));

    this.selectedImages = [...this.selectedImages, ...newImages];

    // Ensure at least one primary is set
    if (this.selectedImages.length > 0 && !this.selectedImages.some(img => img.isPrimary)) {
      this.selectedImages[0].isPrimary = true;
    }

    input.value = ''; // reset so same file can be re-added later
  }

  setPrimaryImage(index: number): void {
    this.selectedImages = this.selectedImages.map((img, i) => ({
      ...img,
      isPrimary: i === index
    }));
  }

  removeSelectedImage(index: number): void {
    const removed = this.selectedImages[index];
    URL.revokeObjectURL(removed.previewUrl);
    this.selectedImages = this.selectedImages.filter((_, i) => i !== index);

    // Restore primary if the removed one was primary
    if (removed.isPrimary && this.selectedImages.length > 0) {
      this.selectedImages[0].isPrimary = true;
    }
  }

  saveProduct(): void {
    this.successMessage = '';
    this.errorMessage = '';
    this.aiIndexingMessage = '';
    this.aiIndexingState = 'info';

    if (this.editMode) {
      this.submitUpdate();
    } else {
      this.submitCreate();
    }
  }

  startEdit(product: Product): void {
    this.editMode = true;
    this.editingProductId = product.id;
    this.productName = product.name;
    this.productPrice = product.price;
    this.productCategory = product.category;
    this.productDescription = product.description;
    this.revokeAllPreviews();
    this.selectedImages = [];
    this.editExistingImages = product.images ? [...product.images] : [];
    this.successMessage = '';
    this.errorMessage = '';
    this.aiIndexingMessage = '';
    this.aiIndexingState = 'info';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  cancelEdit(): void {
    this.editMode = false;
    this.editingProductId = null;
    this.resetForm();
  }

  requestDelete(productId: number): void {
    this.confirmDeleteId = productId;
  }

  cancelDelete(): void {
    this.confirmDeleteId = null;
  }

  confirmDelete(productId: number): void {
    this.confirmDeleteId = null;
    this.http.delete(`${this.apiBaseUrl}/${productId}`).subscribe({
      next: () => {
        this.successMessage = 'Product deleted.';
        this.loadProducts();
        if (this.editingProductId === productId) {
          this.cancelEdit();
        }
      },
      error: (error: { error?: { message?: string } }) => {
        this.errorMessage = error?.error?.message || 'Delete failed. Please try again.';
      }
    });
  }

  updateAiIndexingMode(): void {
    this.isUpdatingAiMode = true;
    this.http.patch<AiIndexingModeResponse>(`${this.apiBaseUrl}/ai-indexing-mode`, { mode: this.selectedAiMode }).subscribe({
      next: (response) => {
        this.isUpdatingAiMode = false;
        this.activeAiMode = response.mode;
        this.selectedAiMode = response.mode;
        this.aiModeSource = response.source || 'runtime';
        this.successMessage = response.message || `AI indexing mode set to ${response.mode}.`;
        this.errorMessage = '';
      },
      error: (error: { error?: { message?: string } }) => {
        this.isUpdatingAiMode = false;
        this.errorMessage = error?.error?.message || 'Could not update AI indexing mode.';
      }
    });
  }

  private submitCreate(): void {
    if (!this.productName.trim() || !this.productCategory.trim() || this.productPrice === null || this.productPrice <= 0 || this.selectedImages.length === 0) {
      this.errorMessage = 'Name, category, positive price, and at least one image are required.';
      return;
    }

    const payload = this.buildFormData();
    this.isSubmitting = true;

    this.http.post<ProductMutationResponse>(this.apiBaseUrl, payload).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        this.successMessage = 'Product uploaded successfully.';
        this.setAiIndexingStatus(response?.ai_indexing);
        this.resetForm();
        this.loadProducts();
      },
      error: (error: { error?: { message?: string } }) => {
        this.isSubmitting = false;
        this.errorMessage = error?.error?.message || 'Upload failed. Please try again.';
      }
    });
  }

  private submitUpdate(): void {
    if (!this.productName.trim() || !this.productCategory.trim() || this.productPrice === null || this.productPrice <= 0) {
      this.errorMessage = 'Name, category, and positive price are required.';
      return;
    }

    const payload = this.buildFormData();
    this.isSubmitting = true;

    this.http.put<ProductMutationResponse>(`${this.apiBaseUrl}/${this.editingProductId}`, payload).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        this.successMessage = 'Product updated successfully.';
        this.setAiIndexingStatus(response?.ai_indexing);
        this.cancelEdit();
        this.loadProducts();
      },
      error: (error: { error?: { message?: string } }) => {
        this.isSubmitting = false;
        this.errorMessage = error?.error?.message || 'Update failed. Please try again.';
      }
    });
  }

  private buildFormData(): FormData {
    const payload = new FormData();
    payload.append('name', this.productName.trim());
    payload.append('price', String(this.productPrice));
    payload.append('category', this.productCategory.trim());
    payload.append('description', this.productDescription.trim());
    payload.append('color', this.productColor.trim());
    payload.append('size', this.productSize.trim());
    payload.append('design', this.productDesign.trim());
    payload.append('pattern', this.productPattern.trim());
    payload.append('style', this.productStyle.trim());
    payload.append('material', this.productMaterial.trim());

    // Put the primary image first — controller marks index 0 as primary
    const sorted = [
      ...this.selectedImages.filter(img => img.isPrimary),
      ...this.selectedImages.filter(img => !img.isPrimary)
    ];
    for (const img of sorted) {
      payload.append('images', img.file);
    }
    return payload;
  }

  loadProducts(): void {
    this.isLoadingProducts = true;
    this.http.get<Product[] | { data: Product[] }>(this.apiBaseUrl).subscribe({
      next: (response: Product[] | { data: Product[] }) => {
        this.products = Array.isArray(response) ? response : (response?.data ?? []);
        this.isLoadingProducts = false;
      },
      error: () => {
        this.isLoadingProducts = false;
        this.errorMessage = 'Could not load products from backend.';
      }
    });
  }

  private loadAiIndexingMode(): void {
    this.http.get<AiIndexingModeResponse>(`${this.apiBaseUrl}/ai-indexing-mode`).subscribe({
      next: (response) => {
        this.activeAiMode = response.mode;
        this.selectedAiMode = response.mode;
        this.aiModeSource = response.source || 'env';
      },
      error: () => {
        this.errorMessage = 'Could not load AI indexing mode.';
      }
    });
  }

  private resetForm(): void {
    this.productName = '';
    this.productPrice = null;
    this.productCategory = '';
    this.productDescription = '';
    this.productColor = '';
    this.productSize = '';
    this.productDesign = '';
    this.productPattern = '';
    this.productStyle = '';
    this.productMaterial = '';
    this.revokeAllPreviews();
    this.selectedImages = [];
    this.editExistingImages = [];
  }

  private setAiIndexingStatus(status?: AiIndexingStatus): void {
    if (!status) {
      this.aiIndexingMessage = '';
      this.aiIndexingState = 'info';
      return;
    }

    if (status.mode === 'off') {
      this.aiIndexingState = 'info';
      this.aiIndexingMessage = 'Primary image embedding is currently disabled.';
      return;
    }

    if (status.mode === 'async') {
      this.aiIndexingState = 'info';
      this.aiIndexingMessage = 'Primary image embedding queued in background.';
      return;
    }

    if (status.stored) {
      this.aiIndexingState = 'success';
      this.aiIndexingMessage = 'Primary image embedding saved to Vector DB.';
      return;
    }

    this.aiIndexingState = 'error';
    this.aiIndexingMessage = `Primary image embedding failed: ${status.message || 'Unknown error'}`;
  }

  private revokeAllPreviews(): void {
    this.selectedImages.forEach(img => URL.revokeObjectURL(img.previewUrl));
    this.selectedImages = [];
  }

}
