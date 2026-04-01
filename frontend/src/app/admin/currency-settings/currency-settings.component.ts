import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG } from '../../config/app-config';
import { CurrencyPreferenceService } from '../../shared/services/currency-preference.service';

@Component({
  selector: 'app-currency-settings',
  templateUrl: './currency-settings.component.html',
  styleUrls: ['./currency-settings.component.scss']
})
export class CurrencySettingsComponent implements OnInit {
  multiplier = 1;
  savedMultiplier = 1;
  isSaving = false;
  message = '';
  messageType: 'success' | 'error' = 'success';

  readonly multiplierOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  private readonly settingsUrl = `${APP_CONFIG.API_URL}/settings/currency-multiplier`;

  constructor(
    private readonly http: HttpClient,
    private readonly currencyService: CurrencyPreferenceService
  ) {}

  ngOnInit(): void {
    this.loadMultiplier();
  }

  private loadMultiplier(): void {
    this.http.get<{ multiplier: number }>(this.settingsUrl).subscribe({
      next: (res) => {
        const val = Number(res?.multiplier);
        this.multiplier = Number.isInteger(val) && val >= 1 && val <= 10 ? val : 1;
        this.savedMultiplier = this.multiplier;
        this.currencyService.setUsdMultiplier(this.multiplier);
      },
      error: () => {
        this.showMessage('Could not load current multiplier.', 'error');
      }
    });
  }

  get previewUsd(): string {
    return this.currencyService.previewMultiplier(100, this.multiplier, 'USD');
  }

  get previewInr(): string {
    return this.currencyService.previewMultiplier(100, this.multiplier, 'INR');
  }

  onSave(): void {
    if (this.isSaving) return;

    const token = this.getAdminToken();
    if (!token) {
      this.showMessage('Admin token not found. Please log in again.', 'error');
      return;
    }

    this.isSaving = true;
    this.message = '';

    this.http.put<{ multiplier: number }>(
      this.settingsUrl,
      { multiplier: this.multiplier },
      { headers: { Authorization: `Bearer ${token}` } }
    ).subscribe({
      next: (res) => {
        const saved = Number(res?.multiplier);
        this.savedMultiplier = saved;
        this.currencyService.setUsdMultiplier(saved);
        this.isSaving = false;
        this.showMessage(`Multiplier saved as ×${saved}. All USD prices now show ×${saved}.`, 'success');
      },
      error: (err: { error?: { error?: string } }) => {
        this.isSaving = false;
        this.showMessage(err?.error?.error || 'Could not save multiplier.', 'error');
      }
    });
  }

  private showMessage(text: string, type: 'success' | 'error'): void {
    this.message = text;
    this.messageType = type;
    setTimeout(() => { this.message = ''; }, 4000);
  }

  private getAdminToken(): string | null {
    try {
      const directToken = localStorage.getItem('admin_token');
      if (directToken) {
        return directToken;
      }

      const raw = localStorage.getItem('admin_user');
      if (!raw) return null;
      const parsed = JSON.parse(raw) as { id?: number | string };
      const id = Number(parsed?.id);
      return Number.isInteger(id) && id > 0 ? `admin-token-${id}` : null;
    } catch {
      return null;
    }
  }
}
