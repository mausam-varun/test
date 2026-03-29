import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface SliderItem {
  id: number;
  image_url: string;
  title: string;
  subtitle: string;
  sort_order: number;
  is_active: boolean;
}

interface SliderAdminResponse {
  display_count: number;
  items: SliderItem[];
}

@Component({
  selector: 'app-slider-settings',
  templateUrl: './slider-settings.component.html',
  styleUrls: ['./slider-settings.component.scss']
})
export class SliderSettingsComponent implements OnInit {
  private readonly apiBaseUrl = 'http://localhost:5001/api/slider';

  sliderItems: SliderItem[] = [];
  displayCount = 5;

  newTitle = '';
  newSubtitle = '';
  newImageUrl = '';
  newSortOrder = 0;
  newIsActive = true;
  newImageFile: File | null = null;
  newImageFileName = '';

  isLoading = false;
  isSaving = false;
  errorMessage = '';
  successMessage = '';

  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {
    this.loadSliderData();
  }

  loadSliderData(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.http.get<SliderAdminResponse>(`${this.apiBaseUrl}/admin`).subscribe({
      next: (response) => {
        this.displayCount = response?.display_count || 5;
        this.sliderItems = Array.isArray(response?.items) ? response.items : [];
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Failed to load slider settings.';
        this.isLoading = false;
      }
    });
  }

  onNewImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] || null;

    if (!file) {
      this.newImageFile = null;
      this.newImageFileName = '';
      return;
    }

    const allowed = ['image/jpeg', 'image/png'];
    if (!allowed.includes(file.type)) {
      this.errorMessage = 'Only JPG and PNG images are allowed.';
      this.newImageFile = null;
      this.newImageFileName = '';
      input.value = '';
      return;
    }

    this.errorMessage = '';
    this.newImageFile = file;
    this.newImageFileName = file.name;
  }

  saveDisplayCount(): void {
    const count = Number(this.displayCount);
    if (!Number.isInteger(count) || count < 2 || count > 5) {
      this.errorMessage = 'Display count must be between 2 and 5.';
      return;
    }

    this.isSaving = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.http.patch<{ display_count: number }>(`${this.apiBaseUrl}/settings`, { display_count: count }).subscribe({
      next: (response) => {
        this.displayCount = response.display_count;
        this.successMessage = 'Slider display count updated.';
        this.isSaving = false;
      },
      error: (error) => {
        this.errorMessage = error?.error?.message || 'Failed to update display count.';
        this.isSaving = false;
      }
    });
  }

  addSliderItem(): void {
    if (!this.newImageFile && !this.newImageUrl.trim()) {
      this.errorMessage = 'Please provide image URL or upload an image file.';
      return;
    }

    this.isSaving = true;
    this.errorMessage = '';
    this.successMessage = '';

    const payload = new FormData();
    if (this.newImageFile) {
      payload.append('image', this.newImageFile);
    }

    if (this.newImageUrl.trim()) {
      payload.append('image_url', this.newImageUrl.trim());
    }

    payload.append('title', this.newTitle.trim());
    payload.append('subtitle', this.newSubtitle.trim());
    payload.append('sort_order', String(this.newSortOrder || 0));
    payload.append('is_active', String(this.newIsActive));

    this.http.post<SliderItem>(`${this.apiBaseUrl}/admin`, payload).subscribe({
      next: () => {
        this.successMessage = 'Slider image added.';
        this.resetForm();
        this.loadSliderData();
        this.isSaving = false;
      },
      error: (error) => {
        this.errorMessage = error?.error?.message || 'Failed to add slider image.';
        this.isSaving = false;
      }
    });
  }

  toggleItemActive(item: SliderItem): void {
    this.updateSliderItem(item.id, { is_active: !item.is_active });
  }

  saveItem(item: SliderItem): void {
    this.updateSliderItem(item.id, {
      title: item.title,
      subtitle: item.subtitle,
      sort_order: item.sort_order,
      image_url: item.image_url,
      is_active: item.is_active
    });
  }

  deleteItem(itemId: number): void {
    if (!confirm('Delete this slider image?')) {
      return;
    }

    this.isSaving = true;
    this.http.delete<{ message: string }>(`${this.apiBaseUrl}/admin/${itemId}`).subscribe({
      next: () => {
        this.successMessage = 'Slider image deleted.';
        this.sliderItems = this.sliderItems.filter((item) => item.id !== itemId);
        this.isSaving = false;
      },
      error: (error) => {
        this.errorMessage = error?.error?.message || 'Failed to delete slider image.';
        this.isSaving = false;
      }
    });
  }

  private updateSliderItem(itemId: number, payload: Record<string, unknown>): void {
    this.isSaving = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.http.put<SliderItem>(`${this.apiBaseUrl}/admin/${itemId}`, payload).subscribe({
      next: () => {
        this.successMessage = 'Slider image updated.';
        this.loadSliderData();
        this.isSaving = false;
      },
      error: (error) => {
        this.errorMessage = error?.error?.message || 'Failed to update slider image.';
        this.isSaving = false;
      }
    });
  }

  private resetForm(): void {
    this.newTitle = '';
    this.newSubtitle = '';
    this.newImageUrl = '';
    this.newSortOrder = 0;
    this.newIsActive = true;
    this.newImageFile = null;
    this.newImageFileName = '';
  }
}
