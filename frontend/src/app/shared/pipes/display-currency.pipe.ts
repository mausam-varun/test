import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPreferenceService } from '../services/currency-preference.service';

@Pipe({
  name: 'displayCurrency',
  pure: false
})
export class DisplayCurrencyPipe implements PipeTransform {
  constructor(private readonly currencyPreferenceService: CurrencyPreferenceService) {}

  transform(value: number | string | null | undefined, fractionDigits = 2): string {
    const amount = Number(value);
    if (!Number.isFinite(amount)) {
      return '';
    }

    return this.currencyPreferenceService.formatFromUsd(amount, fractionDigits);
  }
}