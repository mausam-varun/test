import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_ENDPOINTS, APP_CONFIG } from '../../config/app-config';

interface SliderItem {
  id: number;
  image_url: string;
  title: string;
  subtitle: string;
  cta_url: string;
  sort_order: number;
  is_active: boolean;
}

interface SliderAdminResponse {
  display_count: number;
  autoplay_interval?: number;
  items: SliderItem[];
}

interface Home3Banner {
  id?: number;
  eyebrow: string;
  heading: string;
  description: string;
  view_more_url: string;
  image_url: string;
  sort_order: number;
  is_active: boolean;
}

@Component({
  selector: 'app-slider-settings',
  templateUrl: './slider-settings.component.html',
  styleUrls: ['./slider-settings.component.scss']
})
export class SliderSettingsComponent implements OnInit {
  private readonly apiBaseUrl = API_ENDPOINTS.slider;
  private readonly home3BannersAdminUrl = `${APP_CONFIG.API_URL}/admin/home3-banners`;

  sliderItems: SliderItem[] = [];
  displayCount = 5;
  autoplayInterval = 4000;

  newTitle = '';
  newSubtitle = '';
  newCtaUrl = '';
  newImageUrl = '';
  newSortOrder = 0;
  newIsActive = true;
  newImageFile: File | null = null;
  newImageFileName = '';

  isLoading = false;
  isSaving = false;
  errorMessage = '';
  successMessage = '';

  // ── Home3 Promo Banners ──────────────────────────────────────────────────────
  home3Banners: Home3Banner[] = [];
  h3IsLoading = false;
  h3IsSaving = false;
  h3ErrorMessage = '';
  h3SuccessMessage = '';

  // New banner form
  h3NewEyebrow = '';
  h3NewHeading = '';
  h3NewDescription = '';
  h3NewViewMoreUrl = '/shop';
  h3NewImageUrl = '';
  h3NewSortOrder = 0;
  h3NewIsActive = true;
  h3NewImageFile: File | null = null;
  h3NewImageFileName = '';

  // Editing existing banner (inline)
  h3EditingId: number | null = null;
  h3EditFile: File | null = null;
  h3EditFileName = '';

  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {
    this.loadSliderData();
    this.loadHome3Banners();
  }

  loadSliderData(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.http.get<SliderAdminResponse>(`${this.apiBaseUrl}/admin`).subscribe({
      next: (response) => {
        this.displayCount = response?.display_count || 5;
        this.autoplayInterval = response?.autoplay_interval || 4000;
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

    this.http.patch<{ display_count: number; autoplay_interval: number }>(`${this.apiBaseUrl}/settings`, { display_count: count }).subscribe({
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

  saveAutoplayInterval(): void {
    const ms = Number(this.autoplayInterval);
    if (!Number.isInteger(ms) || ms < 1000 || ms > 15000) {
      this.errorMessage = 'Autoplay interval must be between 1000 and 15000 ms.';
      return;
    }

    this.isSaving = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.http.patch<{ display_count: number; autoplay_interval: number }>(`${this.apiBaseUrl}/settings`, { autoplay_interval: ms }).subscribe({
      next: (response) => {
        this.autoplayInterval = response.autoplay_interval;
        this.successMessage = `Autoplay interval set to ${response.autoplay_interval / 1000}s.`;
        this.isSaving = false;
      },
      error: (error) => {
        this.errorMessage = error?.error?.message || 'Failed to update autoplay interval.';
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
    payload.append('cta_url', this.newCtaUrl.trim());
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
      cta_url: item.cta_url,
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
    this.newCtaUrl = '';
    this.newImageUrl = '';
    this.newSortOrder = 0;
    this.newIsActive = true;
    this.newImageFile = null;
    this.newImageFileName = '';
  }

  // ── Home3 Banner Methods ──────────────────────────────────────────────────

  private getAdminHeaders(): HttpHeaders {
    try {
      let token = localStorage.getItem('admin_token') || '';
      if (!token) {
        const raw = localStorage.getItem('admin_user');
        if (raw) {
          const parsed = JSON.parse(raw) as { id?: number | string };
          const id = Number(parsed?.id);
          if (Number.isInteger(id) && id > 0) token = `admin-token-${id}`;
        }
      }
      return token
        ? new HttpHeaders({ Authorization: `Bearer ${token}` })
        : new HttpHeaders();
    } catch {
      return new HttpHeaders();
    }
  }

  loadHome3Banners(): void {
    this.h3IsLoading = true;
    this.h3ErrorMessage = '';
    this.http.get<Home3Banner[]>(this.home3BannersAdminUrl, { headers: this.getAdminHeaders() }).subscribe({
      next: (banners) => {
        this.home3Banners = banners;
        this.h3IsLoading = false;
      },
      error: () => {
        this.h3ErrorMessage = 'Failed to load home3 banners.';
        this.h3IsLoading = false;
      }
    });
  }

  onH3NewImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] || null;
    if (!file) { this.h3NewImageFile = null; this.h3NewImageFileName = ''; return; }
    if (!['image/jpeg', 'image/png'].includes(file.type)) {
      this.h3ErrorMessage = 'Only JPG/PNG images allowed.';
      this.h3NewImageFile = null; this.h3NewImageFileName = '';
      input.value = '';
      return;
    }
    this.h3ErrorMessage = '';
    this.h3NewImageFile = file;
    this.h3NewImageFileName = file.name;
  }

  onH3EditImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] || null;
    if (!file) { this.h3EditFile = null; this.h3EditFileName = ''; return; }
    if (!['image/jpeg', 'image/png'].includes(file.type)) {
      this.h3ErrorMessage = 'Only JPG/PNG images allowed.';
      this.h3EditFile = null; this.h3EditFileName = '';
      input.value = '';
      return;
    }
    this.h3ErrorMessage = '';
    this.h3EditFile = file;
    this.h3EditFileName = file.name;
  }

  addHome3Banner(): void {
    if (!this.h3NewHeading.trim()) {
      this.h3ErrorMessage = 'Heading is required.';
      return;
    }
    if (!this.h3NewImageFile && !this.h3NewImageUrl.trim()) {
      this.h3ErrorMessage = 'Provide an image URL or upload an image.';
      return;
    }

    this.h3IsSaving = true;
    this.h3ErrorMessage = '';
    this.h3SuccessMessage = '';

    const payload = new FormData();
    payload.append('eyebrow', this.h3NewEyebrow.trim());
    payload.append('heading', this.h3NewHeading.trim());
    payload.append('description', this.h3NewDescription.trim());
    payload.append('view_more_url', this.h3NewViewMoreUrl.trim() || '/shop');
    payload.append('sort_order', String(this.h3NewSortOrder || 0));
    payload.append('is_active', String(this.h3NewIsActive));
    
    // Always send image_url if provided (backend will override with file upload if present)
    if (this.h3NewImageUrl.trim()) {
      payload.append('image_url', this.h3NewImageUrl.trim());
    }
    
    // Include file if uploaded
    if (this.h3NewImageFile) {
      payload.append('image', this.h3NewImageFile);
    }

    this.http.post<{ data: Home3Banner }>(this.home3BannersAdminUrl, payload, { headers: this.getAdminHeaders() }).subscribe({
      next: () => {
        this.h3SuccessMessage = 'Banner added.';
        this.h3ResetNewForm();
        this.loadHome3Banners();
        this.h3IsSaving = false;
      },
      error: (err) => {
        this.h3ErrorMessage = err?.error?.message || 'Failed to add banner.';
        this.h3IsSaving = false;
      }
    });
  }

  editHome3Banner(banner: Home3Banner): void {
    this.h3EditingId = banner.id ?? null;
    this.h3EditFile = null;
    this.h3EditFileName = '';
  }

  cancelH3Edit(): void {
    this.h3EditingId = null;
    this.h3EditFile = null;
    this.h3EditFileName = '';
    this.loadHome3Banners(); // reload to discard in-place edits
  }

  saveHome3Banner(banner: Home3Banner): void {
    if (!banner.heading?.trim()) {
      this.h3ErrorMessage = 'Heading is required.';
      return;
    }

    this.h3IsSaving = true;
    this.h3ErrorMessage = '';
    this.h3SuccessMessage = '';

    const payload = new FormData();
    payload.append('eyebrow', (banner.eyebrow || '').trim());
    payload.append('heading', banner.heading.trim());
    payload.append('description', (banner.description || '').trim());
    payload.append('view_more_url', (banner.view_more_url || '/shop').trim());
    payload.append('sort_order', String(banner.sort_order ?? 0));
    payload.append('is_active', String(banner.is_active));
    
    // Always send image_url if present
    if (banner.image_url?.trim()) {
      payload.append('image_url', banner.image_url.trim());
    }
    
    // Include replacement file if selected
    if (this.h3EditFile) {
      payload.append('image', this.h3EditFile);
    }

    this.http.put<{ data: Home3Banner }>(`${this.home3BannersAdminUrl}/${banner.id}`, payload, { headers: this.getAdminHeaders() }).subscribe({
      next: () => {
        this.h3SuccessMessage = 'Banner updated.';
        this.h3EditingId = null;
        this.h3EditFile = null;
        this.h3EditFileName = '';
        this.loadHome3Banners();
        this.h3IsSaving = false;
      },
      error: (err) => {
        this.h3ErrorMessage = err?.error?.message || 'Failed to update banner.';
        this.h3IsSaving = false;
      }
    });
  }

  deleteHome3Banner(id: number): void {
    if (!confirm('Delete this home3 banner?')) return;

    this.h3IsSaving = true;
    this.http.delete<{ message: string }>(`${this.home3BannersAdminUrl}/${id}`, { headers: this.getAdminHeaders() }).subscribe({
      next: () => {
        this.h3SuccessMessage = 'Banner deleted.';
        this.home3Banners = this.home3Banners.filter(b => b.id !== id);
        this.h3IsSaving = false;
      },
      error: (err) => {
        this.h3ErrorMessage = err?.error?.message || 'Failed to delete banner.';
        this.h3IsSaving = false;
      }
    });
  }

  private h3ResetNewForm(): void {
    this.h3NewEyebrow = '';
    this.h3NewHeading = '';
    this.h3NewDescription = '';
    this.h3NewViewMoreUrl = '/shop';
    this.h3NewImageUrl = '';
    this.h3NewSortOrder = 0;
    this.h3NewIsActive = true;
    this.h3NewImageFile = null;
    this.h3NewImageFileName = '';
  }
}
