import { Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

export interface HeroSlide {
  id?: number;
  image_url: string;
  title?: string;
  subtitle?: string;
  cta_url?: string;
  sort_order?: number;
  is_active?: boolean;
}

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnChanges, OnDestroy {
  /** Full slide objects (takes priority over imageUrls / imageUrl) */
  @Input() slides: HeroSlide[] = [];

  /** Fallback inputs when slides are not provided */
  @Input() badgeText = 'HANDMADE WITH LOVE';
  @Input() title = 'Premium Handmade Treasures';
  @Input() description = 'Exquisite bangles, earrings and home decor crafted with tradition, designed for elegance.';
  @Input() ctaText = 'Shop Now';
  @Input() imageUrl = 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1200&q=80';
  @Input() imageUrls: string[] = [];
  @Input() imageAlt = 'Handmade jewelry collection';
  @Input() features: string[] = ['Free Shipping on $50+', 'Easy 7-Day Returns', 'Worldwide Delivery'];

  /** Autoplay interval in milliseconds (driven by admin setting) */
  @Input() set autoplayInterval(ms: number) {
    this._autoplayInterval = (ms > 0) ? ms : 4000;
    // Update CSS variable so Ken Burns animation matches slide duration
    this.el.nativeElement.style.setProperty('--hero-duration', `${this._autoplayInterval / 1000}s`);
    this.restartAutoplay();
  }

  private _autoplayInterval = 4000;

  currentSlideIndex = 0;
  private autoplayId: ReturnType<typeof setInterval> | null = null;

  constructor(private readonly el: ElementRef) {}

  /** Resolved slide objects — uses slides[] first, falls back to imageUrls/imageUrl */
  get resolvedSlides(): HeroSlide[] {
    if (this.slides.length) {
      return this.slides;
    }
    const urls = this.imageUrls.length ? this.imageUrls : [this.imageUrl];
    return urls.map((u) => ({ image_url: u }));
  }

  get currentSlide(): HeroSlide {
    return this.resolvedSlides[this.currentSlideIndex] || this.resolvedSlides[0] || { image_url: this.imageUrl };
  }

  get currentTitle(): string {
    return this.currentSlide.title?.trim() || this.title;
  }

  get currentDescription(): string {
    return this.currentSlide.subtitle?.trim() || this.description;
  }

  get currentCtaLink(): string {
    return this.currentSlide.cta_url?.trim() || '/shop';
  }

  ngOnInit(): void {
    this.el.nativeElement.style.setProperty('--hero-duration', `${this._autoplayInterval / 1000}s`);
    this.restartAutoplay();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['slides'] || changes['imageUrls'] || changes['imageUrl']) {
      this.currentSlideIndex = 0;
      this.restartAutoplay();
    }
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  prevSlide(): void {
    const length = this.resolvedSlides.length;
    if (length <= 1) { return; }
    this.currentSlideIndex = (this.currentSlideIndex - 1 + length) % length;
    this.restartAutoplay();
  }

  nextSlide(): void {
    const length = this.resolvedSlides.length;
    if (length <= 1) { return; }
    this.currentSlideIndex = (this.currentSlideIndex + 1) % length;
    this.restartAutoplay();
  }

  goToSlide(index: number): void {
    if (index < 0 || index >= this.resolvedSlides.length) { return; }
    this.currentSlideIndex = index;
    this.restartAutoplay();
  }

  private restartAutoplay(): void {
    this.stopAutoplay();
    if (this.resolvedSlides.length <= 1) { return; }
    this.autoplayId = setInterval(() => { this.nextSlide(); }, this._autoplayInterval);
  }

  private stopAutoplay(): void {
    if (this.autoplayId) {
      clearInterval(this.autoplayId);
      this.autoplayId = null;
    }
  }
}
