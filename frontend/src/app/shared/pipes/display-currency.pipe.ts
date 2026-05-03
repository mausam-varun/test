import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPreferenceService } from '../services/currency-preference.service';

@Pipe({
  name: 'displayCurrency',
  pure: false
})
export class DisplayCurrencyPipe implements PipeTransform {
  private lastLoggedAmount: number | null = null;

  constructor(private readonly currencyPreferenceService: CurrencyPreferenceService) {}

  transform(value: number | string | null | undefined, fractionDigits = 2): string {
    const amount = Number(value);
    if (!Number.isFinite(amount)) {
      return '';
    }

    // Log only once per unique amount to avoid console spam
    if (this.lastLoggedAmount !== amount) {
      const currency = this.currencyPreferenceService.getCurrency();
      console.log(`📍 Displaying ${currency} for amount: ${amount}`);
      this.lastLoggedAmount = amount;
    }

    return this.currencyPreferenceService.formatFromUsd(amount, fractionDigits);
  }
}