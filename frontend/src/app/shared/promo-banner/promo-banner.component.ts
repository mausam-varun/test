import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-promo-banner',
  templateUrl: './promo-banner.component.html',
  styleUrls: ['./promo-banner.component.scss']
})
export class PromoBannerComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() buttonText: string = 'SHOP NOW →';
  @Input() link: string = '#';
  @Input() imageUrl: string = '';
}
