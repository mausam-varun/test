import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { APP_CONFIG } from '../../config/app-config';

interface PromotionalBanner {
  id?: number;
  label: string;
  title: string;
  cta_text: string;
  cta_link: string;
  image_url?: string;
  background_color: string;
  display_order?: number;
  is_active?: boolean;
}

@Component({
  selector: 'app-admin-banner-management',
  templateUrl: './admin-banner-management.component.html',
  styleUrls: ['./admin-banner-management.component.scss']
})
export class AdminBannerManagementComponent implements OnInit, OnDestroy {
  private readonly API_BASE = `${APP_CONFIG.API_URL}/admin/banners`;
  private readonly NP_BANNER_API = `${APP_CONFIG.API_URL}/admin/new-products-banner`;
  private destroy$ = new Subject<void>();

  banners: PromotionalBanner[] = [];
  editingId: number | null = null;
  
  form: PromotionalBanner = {
    label: '',
    title: '',
    cta_text: 'Shop Now',
    cta_link: '#',
    background_color: 'linear-gradient(135deg, #D946EF 0%, #9333EA 100%)',
    display_order: 0,
    is_active: true
  };

  selectedFile: File | null = null;
  previewUrl: string | null = null;
  isLoading = false;
  errorMessage = '';
  successMessage = '';

  // Gradient color picker properties
  gradientStartColor = '#D946EF';
  gradientEndColor = '#9333EA';
  gradientAngle = 135;

  // New Products Banner section
  npBannerCurrentUrl: string = '';
  npBannerFile: File | null = null;
  npBannerFileName: string = '';
  npBannerPreview: string = '';
  npBannerImageUrl: string = '';
  npBannerIsSaving = false;
  npBannerSuccess = '';
  npBannerError = '';

  // Flash Deals Banner section
  private readonly FD_BANNER_API = `${APP_CONFIG.API_URL}/admin/flash-deals-banner`;
  fdBannerTitle: string = '';
  fdBannerDescription: string = '';
  fdBannerShopLink: string = '/shop';
  fdBannerFile: File | null = null;
  fdBannerFileName: string = '';
  fdBannerPreview: string = '';
  fdBannerCurrentUrl: string = '';
  fdBannerIsSaving = false;
  fdBannerSuccess = '';
  fdBannerError = '';

  // Festive Season Banner section
  private readonly FS_BANNER_API = `${APP_CONFIG.API_URL}/admin/festive-season-banners`;
  fsBannerTopLabel: string = 'FESTIVE SEASON';
  fsBannerMainTitle: string = '';
  fsBannerDescription: string = '';
  fsBannerButtonText: string = 'SHOP NOW';
  fsBannerButtonLink: string = '/shop';
  fsBannerColor: string = '#FF6B6B';
  fsBannerAccentColor: string = '#FFD700';
  fsBannerFile: File | null = null;
  fsBannerFileName: string = '';
  fsBannerPreview: string = '';
  fsBannerCurrentUrl: string = '';
  fsBannerIsSaving = false;
  fsBannerSuccess = '';
  fsBannerError = '';
  fsBannerId: number | null = null;

  // ── Hero Promo Banner: Bridal Collection ────────────────────────────────────
  private readonly BRIDAL_BANNER_API = `${APP_CONFIG.API_URL}/admin/hero-promo-banners/bridal`;
  bridalTitle: string = 'BRIDAL COLLECTION';
  bridalSubtitle: string = 'Made for Your Big Moments';
  bridalButtonText: string = 'EXPLORE NOW →';
  bridalLink: string = '/shop?category=bridal';
  bridalFile: File | null = null;
  bridalFileName: string = '';
  bridalPreview: string = '';
  bridalCurrentUrl: string = '';
  bridalIsSaving = false;
  bridalSuccess = '';
  bridalError = '';

  // ── Hero Promo Banner: Festive Picks ────────────────────────────────────────
  private readonly FESTIVE_PICKS_API = `${APP_CONFIG.API_URL}/admin/hero-promo-banners/festive`;
  festivePTitle: string = 'FESTIVE PICKS';
  festivePSubtitle: string = 'Celebrate in Every Color';
  festivePButtonText: string = 'SHOP NOW →';
  festivePLink: string = '/shop?category=festive';
  festivePFile: File | null = null;
  festivePFileName: string = '';
  festivePPreview: string = '';
  festivePCurrentUrl: string = '';
  festivePIsSaving = false;
  festivePSuccess = '';
  festivePError = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadBanners();
    this.loadNpBannerCurrentImage();
    this.loadFlashDealsBanner();
    this.loadFestiveSeasonBanner();
    this.loadBridalBanner();
    this.loadFestivePicksBanner();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * Update background color gradient when color pickers change
   */
  onGradientColorChange(): void {
    this.form.background_color = `linear-gradient(${this.gradientAngle}deg, ${this.gradientStartColor} 0%, ${this.gradientEndColor} 100%)`;
  }

  /**
   * Parse gradient CSS to extract colors and angle when editing a banner
   */
  private parseGradientColors(gradientCss: string): void {
    // Match linear-gradient(angle, color1, color2)
    const gradientRegex = /linear-gradient\((\d+)deg,\s*([#\w]+)\s+\d+%,\s*([#\w]+)\s+\d+%\)/i;
    const match = gradientCss.match(gradientRegex);

    if (match) {
      this.gradientAngle = parseInt(match[1], 10);
      this.gradientStartColor = match[2];
      this.gradientEndColor = match[3];
    } else {
      // Reset to defaults if parsing fails
      this.gradientAngle = 135;
      this.gradientStartColor = '#D946EF';
      this.gradientEndColor = '#9333EA';
    }
  }

  loadBanners(): void {
    this.isLoading = true;
    this.errorMessage = '';

    const token = this.getAdminToken();
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    this.http.get<PromotionalBanner[]>(this.API_BASE, { headers })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (banners) => {
          this.banners = banners.sort((a, b) => (a.display_order || 0) - (b.display_order || 0));
          this.isLoading = false;
        },
        error: (err) => {
          this.errorMessage = 'Failed to load banners: ' + (err.error?.error || err.statusText || 'Unknown error');
          this.isLoading = false;
          console.error(err);
        }
      });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      
      const reader = new FileReader();
      reader.onload = (e) => {
        this.previewUrl = e.target?.result as string;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  editBanner(banner: PromotionalBanner): void {
    this.editingId = banner.id || null;
    this.form = { ...banner };
    this.previewUrl = banner.image_url || null;
    this.selectedFile = null;
    // Parse gradient colors for the color pickers
    this.parseGradientColors(banner.background_color);
  }

  cancelEdit(): void {
    this.editingId = null;
    this.resetForm();
  }

  saveBanner(): void {
    if (!this.form.label || !this.form.title) {
      this.errorMessage = 'Label and title are required';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.successMessage = '';

    const formData = new FormData();
    formData.append('label', this.form.label);
    formData.append('title', this.form.title);
    formData.append('cta_text', this.form.cta_text || 'Shop Now');
    formData.append('cta_link', this.form.cta_link || '#');
    formData.append('background_color', this.form.background_color);
    formData.append('display_order', String(this.form.display_order || 0));
    formData.append('is_active', String(this.form.is_active ? 1 : 0));

    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }

    const token = this.getAdminToken();
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    if (this.editingId) {
      // Update existing banner
      this.http.put(`${this.API_BASE}/${this.editingId}`, formData, { headers })
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: () => {
            this.successMessage = 'Banner updated successfully';
            this.isLoading = false;
            this.cancelEdit();
            this.loadBanners();
          },
          error: (err) => {
            this.errorMessage = 'Failed to update banner: ' + (err.error?.message || err.statusText);
            this.isLoading = false;
            console.error(err);
          }
        });
    } else {
      // Create new banner
      this.http.post(this.API_BASE, formData, { headers })
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: () => {
            this.successMessage = 'Banner created successfully';
            this.isLoading = false;
            this.resetForm();
            this.loadBanners();
          },
          error: (err) => {
            this.errorMessage = 'Failed to create banner: ' + (err.error?.message || err.statusText);
            this.isLoading = false;
            console.error(err);
          }
        });
    }
  }

  deleteBanner(id: number): void {
    if (!confirm('Are you sure you want to delete this banner?')) {
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    const token = this.getAdminToken();
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    this.http.delete(`${this.API_BASE}/${id}`, { headers })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.successMessage = 'Banner deleted successfully';
          this.isLoading = false;
          this.loadBanners();
        },
        error: (err) => {
          this.errorMessage = 'Failed to delete banner: ' + (err.error?.message || err.statusText);
          this.isLoading = false;
          console.error(err);
        }
      });
  }

  toggleActive(banner: PromotionalBanner): void {
    if (!banner.id) return;

    const token = this.getAdminToken();
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    const updatedBanner = { ...banner, is_active: !banner.is_active };
    this.http.put(`${this.API_BASE}/${banner.id}`, updatedBanner, { headers })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          banner.is_active = !banner.is_active;
        },
        error: (err) => {
          this.errorMessage = 'Failed to toggle banner status';
          console.error(err);
        }
      });
  }

  resetForm(): void {
    this.form = {
      label: '',
      title: '',
      cta_text: 'Shop Now',
      cta_link: '#',
      background_color: 'linear-gradient(135deg, #D946EF 0%, #9333EA 100%)',
      display_order: 0,
      is_active: true
    };
    this.selectedFile = null;
    this.previewUrl = null;
    this.editingId = null;
    // Reset color pickers to defaults
    this.gradientStartColor = '#D946EF';
    this.gradientEndColor = '#9333EA';
    this.gradientAngle = 135;
  }

  private getAdminToken(): string {
    const direct = localStorage.getItem('admin_token');
    if (direct) return direct;
    try {
      const user = JSON.parse(localStorage.getItem('admin_user') || '{}');
      if (user?.id) return `admin-token-${user.id}`;
    } catch {}
    return '';
  }

  // ── New Products Banner ──────────────────────────────────────
  loadNpBannerCurrentImage(): void {
    this.http.get<{ image_url: string }>(`${APP_CONFIG.API_URL}/new-products-banner`).subscribe({
      next: (res) => { this.npBannerCurrentUrl = res?.image_url || ''; },
      error: () => { this.npBannerCurrentUrl = ''; }
    });
  }

  onNpBannerFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.npBannerFile = input.files[0];
      this.npBannerFileName = input.files[0].name;
      const reader = new FileReader();
      reader.onload = (e) => { this.npBannerPreview = e.target?.result as string; };
      reader.readAsDataURL(input.files[0]);
    }
  }

  saveNpBanner(): void {
    if (!this.npBannerFile && !this.npBannerImageUrl) {
      this.npBannerError = 'Please upload a file or enter an image URL.';
      return;
    }
    this.npBannerIsSaving = true;
    this.npBannerError = '';
    this.npBannerSuccess = '';

    const token = this.getAdminToken();
    const headers = token ? new HttpHeaders({ Authorization: `Bearer ${token}` }) : new HttpHeaders();

    const formData = new FormData();
    if (this.npBannerFile) formData.append('image', this.npBannerFile);
    if (this.npBannerImageUrl) formData.append('image_url', this.npBannerImageUrl);

    this.http.post<any>(this.NP_BANNER_API, formData, { headers })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.npBannerSuccess = 'Banner image updated successfully!';
          this.npBannerCurrentUrl = res?.banner?.image_url || this.npBannerPreview || this.npBannerImageUrl;
          this.npBannerFile = null;
          this.npBannerFileName = '';
          this.npBannerPreview = '';
          this.npBannerImageUrl = '';
          this.npBannerIsSaving = false;
        },
        error: (err) => {
          this.npBannerError = 'Failed to save: ' + (err.error?.error || err.statusText);
          this.npBannerIsSaving = false;
        }
      });
  }

  closeAlert(): void {
    this.errorMessage = '';
    this.successMessage = '';
  }

  // ── Flash Deals Banner ───────────────────────────────────────
  loadFlashDealsBanner(): void {
    this.http.get<any>(`${APP_CONFIG.API_URL}/flash-deals-banner`).subscribe({
      next: (res) => {
        this.fdBannerTitle = res?.main_title || 'Festive Offers You\'ll Love';
        this.fdBannerDescription = res?.description || 'Exclusive Deals on Our Most Loved Bangles';
        this.fdBannerShopLink = res?.shop_link || '/shop';
        this.fdBannerCurrentUrl = res?.background_image_url || '';
      },
      error: () => {
        this.fdBannerTitle = 'Festive Offers You\'ll Love';
        this.fdBannerDescription = 'Exclusive Deals on Our Most Loved Bangles';
        this.fdBannerShopLink = '/shop';
        this.fdBannerCurrentUrl = '';
      }
    });
  }

  onFlashDealsBannerFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.fdBannerFile = input.files[0];
      this.fdBannerFileName = input.files[0].name;
      const reader = new FileReader();
      reader.onload = (e) => { this.fdBannerPreview = e.target?.result as string; };
      reader.readAsDataURL(input.files[0]);
    }
  }

  saveFlashDealsBanner(): void {
    if (!this.fdBannerTitle || !this.fdBannerDescription) {
      this.fdBannerError = 'Please fill in all required fields.';
      return;
    }

    this.fdBannerIsSaving = true;
    this.fdBannerError = '';
    this.fdBannerSuccess = '';

    const token = this.getAdminToken();
    const headers = token ? new HttpHeaders({ Authorization: `Bearer ${token}` }) : new HttpHeaders();

    const formData = new FormData();
    formData.append('main_title', this.fdBannerTitle);
    formData.append('description', this.fdBannerDescription);
    formData.append('shop_link', this.fdBannerShopLink || '/shop');
    if (this.fdBannerFile) {
      formData.append('image', this.fdBannerFile);
    }

    this.http.post<any>(this.FD_BANNER_API, formData, { headers })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.fdBannerSuccess = 'Flash Deals banner updated successfully!';
          this.fdBannerCurrentUrl = res?.background_image_url || this.fdBannerPreview || '';
          this.fdBannerFile = null;
          this.fdBannerFileName = '';
          this.fdBannerPreview = '';
          this.fdBannerIsSaving = false;
          // Reload after 1 second
          setTimeout(() => this.loadFlashDealsBanner(), 1000);
        },
        error: (err) => {
          this.fdBannerError = 'Failed to save: ' + (err.error?.error || err.error?.message || err.statusText);
          this.fdBannerIsSaving = false;
        }
      });
  }

  trackByBannerId(index: number, banner: PromotionalBanner): number {
    return banner.id || index;
  }

  // ── Festive Season Banner ────────────────────────────────────
  loadFestiveSeasonBanner(): void {
    const token = this.getAdminToken();
    const headers = token ? new HttpHeaders({ Authorization: `Bearer ${token}` }) : new HttpHeaders();

    this.http.get<any[]>(this.FS_BANNER_API, { headers }).subscribe({
      next: (banners) => {
        const res = Array.isArray(banners) && banners.length > 0 ? banners[0] : null;
        if (res && res.id) {
          this.fsBannerId = res.id;
          this.fsBannerTopLabel = res?.top_label || 'FESTIVE SEASON';
          this.fsBannerMainTitle = res?.main_title || '';
          this.fsBannerDescription = res?.description || '';
          this.fsBannerButtonText = res?.button_text || 'SHOP NOW';
          this.fsBannerButtonLink = res?.button_link || '/shop';
          this.fsBannerColor = res?.banner_color || '#FF6B6B';
          this.fsBannerAccentColor = res?.accent_color || '#FFD700';
          this.fsBannerCurrentUrl = res?.image_url || '';
        }
      },
      error: () => {
        this.fsBannerTopLabel = 'FESTIVE SEASON';
        this.fsBannerMainTitle = '';
        this.fsBannerDescription = '';
        this.fsBannerButtonText = 'SHOP NOW';
        this.fsBannerButtonLink = '/shop';
        this.fsBannerColor = '#FF6B6B';
        this.fsBannerAccentColor = '#FFD700';
        this.fsBannerCurrentUrl = '';
      }
    });
  }

  onFestiveSeasonBannerFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.fsBannerFile = input.files[0];
      this.fsBannerFileName = input.files[0].name;
      const reader = new FileReader();
      reader.onload = (e) => { this.fsBannerPreview = e.target?.result as string; };
      reader.readAsDataURL(input.files[0]);
    }
  }

  saveFestiveSeasonBanner(): void {
    if (!this.fsBannerMainTitle) {
      this.fsBannerError = 'Please enter a main title.';
      return;
    }

    this.fsBannerIsSaving = true;
    this.fsBannerError = '';
    this.fsBannerSuccess = '';

    const token = this.getAdminToken();
    const headers = token ? new HttpHeaders({ Authorization: `Bearer ${token}` }) : new HttpHeaders();

    const formData = new FormData();
    formData.append('top_label', this.fsBannerTopLabel);
    formData.append('main_title', this.fsBannerMainTitle);
    formData.append('description', this.fsBannerDescription);
    formData.append('button_text', this.fsBannerButtonText);
    formData.append('button_link', this.fsBannerButtonLink);
    formData.append('banner_color', this.fsBannerColor);
    formData.append('accent_color', this.fsBannerAccentColor);
    formData.append('is_active', '1');

    if (this.fsBannerFile) {
      formData.append('image', this.fsBannerFile);
    }

    // If we have an existing banner ID, update it; otherwise create new
    const apiCall = this.fsBannerId
      ? this.http.put<any>(`${this.FS_BANNER_API}/${this.fsBannerId}`, formData, { headers })
      : this.http.post<any>(this.FS_BANNER_API, formData, { headers });

    apiCall.pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        this.fsBannerSuccess = 'Festive Season banner updated successfully!';
        this.fsBannerId = res?.data?.id || res?.id;
        this.fsBannerCurrentUrl = res?.data?.image_url || res?.image_url || this.fsBannerPreview || '';
        this.fsBannerFile = null;
        this.fsBannerFileName = '';
        this.fsBannerPreview = '';
        this.fsBannerIsSaving = false;
        setTimeout(() => this.loadFestiveSeasonBanner(), 1000);
      },
      error: (err) => {
        this.fsBannerError = 'Failed to save: ' + (err.error?.error || err.error?.message || err.statusText);
        this.fsBannerIsSaving = false;
      }
    });
  }

  // ── Hero Promo Banner: Bridal Collection ─────────────────────────────────────

  loadBridalBanner(): void {
    this.http.get<any>(`${APP_CONFIG.API_URL}/hero-promo-banners/bridal`).subscribe({
      next: (res) => {
        if (res && res.banner_key) {
          this.bridalTitle       = res.title       || 'BRIDAL COLLECTION';
          this.bridalSubtitle    = res.subtitle    || 'Made for Your Big Moments';
          this.bridalButtonText  = res.button_text || 'EXPLORE NOW →';
          this.bridalLink        = res.link        || '/shop?category=bridal';
          this.bridalCurrentUrl  = res.image_url   || '';
        }
      },
      error: () => {}
    });
  }

  onBridalFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.bridalFile     = input.files[0];
      this.bridalFileName = input.files[0].name;
      const reader = new FileReader();
      reader.onload = (e) => { this.bridalPreview = e.target?.result as string; };
      reader.readAsDataURL(input.files[0]);
    }
  }

  saveBridalBanner(): void {
    this.bridalIsSaving = true;
    this.bridalError    = '';
    this.bridalSuccess  = '';

    const token   = this.getAdminToken();
    const headers = token ? new HttpHeaders({ Authorization: `Bearer ${token}` }) : new HttpHeaders();

    const formData = new FormData();
    formData.append('title',       this.bridalTitle);
    formData.append('subtitle',    this.bridalSubtitle);
    formData.append('button_text', this.bridalButtonText);
    formData.append('link',        this.bridalLink);
    if (this.bridalFile) formData.append('image', this.bridalFile);

    this.http.post<any>(this.BRIDAL_BANNER_API, formData, { headers })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.bridalSuccess    = 'Bridal Collection banner saved!';
          this.bridalCurrentUrl = res?.banner?.image_url || this.bridalPreview || this.bridalCurrentUrl;
          this.bridalFile       = null;
          this.bridalFileName   = '';
          this.bridalPreview    = '';
          this.bridalIsSaving   = false;
        },
        error: (err) => {
          this.bridalError    = 'Failed to save: ' + (err.error?.error || err.statusText);
          this.bridalIsSaving = false;
        }
      });
  }

  // ── Hero Promo Banner: Festive Picks ─────────────────────────────────────────

  loadFestivePicksBanner(): void {
    this.http.get<any>(`${APP_CONFIG.API_URL}/hero-promo-banners/festive`).subscribe({
      next: (res) => {
        if (res && res.banner_key) {
          this.festivePTitle       = res.title       || 'FESTIVE PICKS';
          this.festivePSubtitle    = res.subtitle    || 'Celebrate in Every Color';
          this.festivePButtonText  = res.button_text || 'SHOP NOW →';
          this.festivePLink        = res.link        || '/shop?category=festive';
          this.festivePCurrentUrl  = res.image_url   || '';
        }
      },
      error: () => {}
    });
  }

  onFestivePicksFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.festivePFile     = input.files[0];
      this.festivePFileName = input.files[0].name;
      const reader = new FileReader();
      reader.onload = (e) => { this.festivePPreview = e.target?.result as string; };
      reader.readAsDataURL(input.files[0]);
    }
  }

  saveFestivePicksBanner(): void {
    this.festivePIsSaving = true;
    this.festivePError    = '';
    this.festivePSuccess  = '';

    const token   = this.getAdminToken();
    const headers = token ? new HttpHeaders({ Authorization: `Bearer ${token}` }) : new HttpHeaders();

    const formData = new FormData();
    formData.append('title',       this.festivePTitle);
    formData.append('subtitle',    this.festivePSubtitle);
    formData.append('button_text', this.festivePButtonText);
    formData.append('link',        this.festivePLink);
    if (this.festivePFile) formData.append('image', this.festivePFile);

    this.http.post<any>(this.FESTIVE_PICKS_API, formData, { headers })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.festivePSuccess    = 'Festive Picks banner saved!';
          this.festivePCurrentUrl = res?.banner?.image_url || this.festivePPreview || this.festivePCurrentUrl;
          this.festivePFile       = null;
          this.festivePFileName   = '';
          this.festivePPreview    = '';
          this.festivePIsSaving   = false;
        },
        error: (err) => {
          this.festivePError    = 'Failed to save: ' + (err.error?.error || err.statusText);
          this.festivePIsSaving = false;
        }
      });
  }
}
