import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnChanges, OnDestroy {
  @Input() badgeText = 'HANDMADE WITH LOVE';
  @Input() title = 'Premium Handmade Treasures';
  @Input() description = 'Exquisite bangles, earrings and home decor crafted with tradition, designed for elegance.';
  @Input() ctaText = 'Shop Collection';
  @Input() imageUrl = 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1200&q=80';
  @Input() imageUrls: string[] = [];
  @Input() imageAlt = 'Handmade jewelry collection';
  @Input() features: string[] = ['Free Shipping on $50+', 'Easy 7-Day Returns', 'Worldwide Delivery'];

  currentSlideIndex = 0;
  private autoplayId: ReturnType<typeof setInterval> | null = null;

  get resolvedImageUrls(): string[] {
    if (this.imageUrls.length) {
      return this.imageUrls;
    }
    return [this.imageUrl];
  }

  ngOnInit(): void {
    this.restartAutoplay();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['imageUrls'] || changes['imageUrl']) {
      this.currentSlideIndex = 0;
      this.restartAutoplay();
    }
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  prevSlide(): void {
    const length = this.resolvedImageUrls.length;
    if (length <= 1) {
      return;
    }
    this.currentSlideIndex = (this.currentSlideIndex - 1 + length) % length;
  }

  nextSlide(): void {
    const length = this.resolvedImageUrls.length;
    if (length <= 1) {
      return;
    }
    this.currentSlideIndex = (this.currentSlideIndex + 1) % length;
  }

  goToSlide(index: number): void {
    if (index < 0 || index >= this.resolvedImageUrls.length) {
      return;
    }
    this.currentSlideIndex = index;
  }

  private restartAutoplay(): void {
    this.stopAutoplay();
    if (this.resolvedImageUrls.length <= 1) {
      return;
    }

    this.autoplayId = setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  private stopAutoplay(): void {
    if (this.autoplayId) {
      clearInterval(this.autoplayId);
      this.autoplayId = null;
    }
  }
}
