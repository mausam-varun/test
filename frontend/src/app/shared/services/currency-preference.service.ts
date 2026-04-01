import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type DisplayCurrency = 'USD' | 'INR';

const STORAGE_KEY = 'preferred_display_currency';
const MULTIPLIER_KEY = 'usd_display_multiplier';
const DEFAULT_CURRENCY: DisplayCurrency = 'USD';
const USD_TO_INR_RATE = 83;
const INDIA_TIME_ZONES = new Set(['Asia/Kolkata', 'Asia/Calcutta']);

@Injectable({ providedIn: 'root' })
export class CurrencyPreferenceService {
  private readonly currencySubject = new BehaviorSubject<DisplayCurrency>(this.getInitialCurrency());
  readonly currency$ = this.currencySubject.asObservable();

  private readonly multiplierSubject = new BehaviorSubject<number>(this.getStoredMultiplier());
  readonly multiplier$ = this.multiplierSubject.asObservable();

  getCurrency(): DisplayCurrency {
    return this.currencySubject.value;
  }

  setCurrency(currency: DisplayCurrency, persist = true): void {
    const normalized = currency === 'INR' ? 'INR' : 'USD';
    this.currencySubject.next(normalized);

    if (persist && typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, normalized);
    }
  }

  syncFrontendCurrencyWithSystem(): void {
    this.setCurrency(this.detectCurrencyFromSystem(), false);
  }

  getSystemTimeZone(): string {
    if (typeof Intl === 'undefined' || typeof Intl.DateTimeFormat !== 'function') {
      return '';
    }

    return Intl.DateTimeFormat().resolvedOptions().timeZone || '';
  }

  convertFromUsd(amount: number): number {
    const safeAmount = Number(amount);
    if (!Number.isFinite(safeAmount)) {
      return 0;
    }

    if (this.getCurrency() === 'INR') {
      return Number((safeAmount * USD_TO_INR_RATE).toFixed(2));
    }

    const multiplier = this.multiplierSubject.value;
    return Number((safeAmount * multiplier).toFixed(2));
  }

  convertToUsd(amount: number, sourceCurrency: DisplayCurrency): number {
    const safeAmount = Number(amount);
    if (!Number.isFinite(safeAmount)) {
      return 0;
    }

    if (sourceCurrency === 'INR') {
      return Number((safeAmount / USD_TO_INR_RATE).toFixed(2));
    }

    return Number(safeAmount.toFixed(2));
  }

  formatFromUsd(amount: number, fractionDigits = 2): string {
    const convertedAmount = this.convertFromUsd(amount);
    const currency = this.getCurrency();
    const locale = currency === 'INR' ? 'en-IN' : 'en-US';

    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      minimumFractionDigits: fractionDigits,
      maximumFractionDigits: fractionDigits
    }).format(convertedAmount);
  }

  setUsdMultiplier(value: number): void {
    const safe = Number.isInteger(value) && value >= 1 && value <= 10 ? value : 1;
    this.multiplierSubject.next(safe);
    try {
      localStorage.setItem(MULTIPLIER_KEY, String(safe));
    } catch { /* ignore */ }
  }

  getUsdMultiplier(): number {
    return this.multiplierSubject.value;
  }

  /** Preview price with an arbitrary multiplier (used by admin settings page) */
  previewMultiplier(usdAmount: number, multiplier: number, targetCurrency: DisplayCurrency): string {
    let converted: number;
    if (targetCurrency === 'INR') {
      converted = usdAmount * USD_TO_INR_RATE;
    } else {
      converted = usdAmount * multiplier;
    }
    const locale = targetCurrency === 'INR' ? 'en-IN' : 'en-US';
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: targetCurrency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(converted);
  }

  private getInitialCurrency(): DisplayCurrency {
    if (typeof window === 'undefined') {
      return DEFAULT_CURRENCY;
    }

    const value = localStorage.getItem(STORAGE_KEY);
    if (value === 'USD' || value === 'INR') {
      return value;
    }

    return this.detectCurrencyFromSystem();
  }

  private detectCurrencyFromSystem(): DisplayCurrency {
    if (this.isIndiaSystemContext()) {
      return 'INR';
    }

    return DEFAULT_CURRENCY;
  }

  private getStoredMultiplier(): number {
    try {
      const raw = typeof window !== 'undefined' ? localStorage.getItem(MULTIPLIER_KEY) : null;
      const val = Number(raw);
      return Number.isInteger(val) && val >= 1 && val <= 10 ? val : 1;
    } catch {
      return 1;
    }
  }

  private isIndiaSystemContext(): boolean {
    const timeZone = this.getSystemTimeZone();
    if (INDIA_TIME_ZONES.has(timeZone)) {
      return true;
    }

    if (typeof navigator === 'undefined') {
      return false;
    }

    const localeCandidates = [navigator.language, ...(navigator.languages || [])]
      .filter((value): value is string => typeof value === 'string' && value.length > 0)
      .map((value) => value.toUpperCase());

    return localeCandidates.some((value) => value.endsWith('-IN') || value.includes('_IN'));
  }
}