import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINTS } from '../../config/app-config';

interface HomeCategoryItem {
  id?: number;
  name: string;
  description: string;
  image_url: string;
  is_home_visible: boolean;
  sort_order?: number;
  product_count?: number;
  localImageFile?: File | null;
  localImageFileName?: string;
  previewUrl?: string | null;
  isUploadingImage?: boolean;
}

interface HomeCategoryAdminResponse {
  message?: string;
  display_count: number;
  categories: HomeCategoryItem[];
}

@Component({
  selector: 'app-home-category-control',
  templateUrl: './home-category-control.component.html',
  styleUrls: ['./home-category-control.component.scss']
})
export class HomeCategoryControlComponent implements OnInit, OnDestroy {
  private readonly apiBaseUrl = API_ENDPOINTS.categories;

  readonly displayCountOptions = Array.from({ length: 12 }, (_, index) => index + 1);
  readonly fallbackImage = 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&q=80';

  categories: HomeCategoryItem[] = [];
  displayCount = 4;

  isLoading = false;
  isSaving = false;
  errorMessage = '';
  successMessage = '';

  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {
    this.loadCategorySettings();
  }

  ngOnDestroy(): void {
    this.revokeAllPreviews();
  }

  loadCategorySettings(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.http.get<HomeCategoryAdminResponse>(`${this.apiBaseUrl}/admin`).subscribe({
      next: (response) => {
        this.syncFromResponse(response);
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Failed to load home category settings.';
        this.isLoading = false;
      }
    });
  }

  addCategory(): void {
    this.successMessage = '';
    this.errorMessage = '';
    this.categories = [
      ...this.categories,
      {
        name: '',
        description: '',
        image_url: '',
        is_home_visible: true,
        sort_order: this.categories.length,
        product_count: 0,
        localImageFile: null,
        localImageFileName: '',
        previewUrl: null,
        isUploadingImage: false
      }
    ];
  }

  moveCategory(index: number, direction: -1 | 1): void {
    const targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= this.categories.length) {
      return;
    }

    const reordered = [...this.categories];
    [reordered[index], reordered[targetIndex]] = [reordered[targetIndex], reordered[index]];
    this.categories = reordered;
    this.successMessage = 'Category order updated. Save changes to publish it on the homepage.';
    this.errorMessage = '';
  }

  saveSettings(): void {
    const count = Number(this.displayCount);
    if (!Number.isInteger(count) || count < 1 || count > 12) {
      this.errorMessage = 'Visible category count must be between 1 and 12.';
      return;
    }

    const hasBlankName = this.categories.some((category) => !String(category.name || '').trim());
    if (hasBlankName) {
      this.errorMessage = 'Each home category card needs a name before saving.';
      return;
    }

    const payload = {
      display_count: count,
      categories: this.categories.map((category) => ({
        id: category.id,
        name: String(category.name || '').trim(),
        description: String(category.description || '').trim(),
        image_url: String(category.image_url || '').trim(),
        is_home_visible: category.is_home_visible !== false
      }))
    };

    this.isSaving = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.http.put<HomeCategoryAdminResponse>(`${this.apiBaseUrl}/admin`, payload).subscribe({
      next: (response) => {
        this.syncFromResponse(response);
        this.successMessage = response?.message || 'Home category settings updated.';
        this.isSaving = false;
      },
      error: (error) => {
        this.errorMessage = error?.error?.message || 'Failed to save home category settings.';
        this.isSaving = false;
      }
    });
  }

  onImageSelected(category: HomeCategoryItem, event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] || null;

    if (!file) {
      this.clearSelectedUpload(category);
      return;
    }

    const allowed = ['image/jpeg', 'image/png', 'image/webp'];
    if (!allowed.includes(file.type)) {
      this.errorMessage = 'Only JPG, PNG, and WEBP images are allowed.';
      this.clearSelectedUpload(category);
      input.value = '';
      return;
    }

    this.errorMessage = '';
    this.successMessage = '';
    this.clearSelectedUpload(category);
    category.localImageFile = file;
    category.localImageFileName = file.name;
    category.previewUrl = URL.createObjectURL(file);
    input.value = '';
  }

  clearSelectedUpload(category: HomeCategoryItem): void {
    if (category.previewUrl) {
      URL.revokeObjectURL(category.previewUrl);
    }

    category.localImageFile = null;
    category.localImageFileName = '';
    category.previewUrl = null;
  }

  uploadImage(category: HomeCategoryItem): void {
    if (!category.id) {
      this.errorMessage = 'Save the category first, then upload an image file.';
      return;
    }

    if (!category.localImageFile) {
      this.errorMessage = 'Please choose an image file first.';
      return;
    }

    const payload = new FormData();
    payload.append('image', category.localImageFile);

    category.isUploadingImage = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.http.post<HomeCategoryAdminResponse>(`${this.apiBaseUrl}/admin/${category.id}/image`, payload).subscribe({
      next: (response) => {
        this.syncFromResponse(response);
        this.successMessage = response?.message || 'Category image uploaded successfully.';
      },
      error: (error) => {
        this.errorMessage = error?.error?.message || 'Failed to upload category image.';
      },
      complete: () => {
        category.isUploadingImage = false;
      }
    });
  }

  removeImage(category: HomeCategoryItem): void {
    this.errorMessage = '';
    this.successMessage = '';

    if (!category.id) {
      category.image_url = '';
      this.clearSelectedUpload(category);
      this.successMessage = 'Draft image removed.';
      return;
    }

    if (!category.image_url && !category.localImageFile) {
      this.successMessage = 'This category does not have a custom image to remove.';
      return;
    }

    if (!confirm(`Remove the custom image for ${category.name || 'this category'}?`)) {
      return;
    }

    category.isUploadingImage = true;
    this.http.delete<HomeCategoryAdminResponse>(`${this.apiBaseUrl}/admin/${category.id}/image`).subscribe({
      next: (response) => {
        this.syncFromResponse(response);
        this.successMessage = response?.message || 'Category image removed successfully.';
      },
      error: (error) => {
        this.errorMessage = error?.error?.message || 'Failed to remove category image.';
      },
      complete: () => {
        category.isUploadingImage = false;
      }
    });
  }

  getCategoryImage(category: HomeCategoryItem): string {
    return category.previewUrl || category.image_url || this.fallbackImage;
  }

  private syncFromResponse(response: HomeCategoryAdminResponse): void {
    this.revokeAllPreviews();
    this.displayCount = Number(response?.display_count) || 4;
    this.categories = Array.isArray(response?.categories)
      ? response.categories.map((category, index) => ({
          id: category.id,
          name: String(category.name || ''),
          description: String(category.description || ''),
          image_url: String(category.image_url || ''),
          is_home_visible: category.is_home_visible !== false,
          sort_order: Number(category.sort_order ?? index),
          product_count: Number(category.product_count) || 0,
          localImageFile: null,
          localImageFileName: '',
          previewUrl: null,
          isUploadingImage: false
        }))
      : [];
  }

  private revokeAllPreviews(): void {
    this.categories.forEach((category) => {
      if (category.previewUrl) {
        URL.revokeObjectURL(category.previewUrl);
      }
    });
  }
}
