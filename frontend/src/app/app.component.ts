import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ReviewService } from './services/review.service';
import { ThemeService } from './shared/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Divara Craft';
  isAdminRoute = false;
  readonly showRatingTestButton = this.isLocalEnvironment();

  constructor(
    private readonly router: Router,
    private readonly reviewService: ReviewService,
    private readonly themeService: ThemeService
  ) {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(e => {
        this.isAdminRoute = (e as NavigationEnd).urlAfterRedirects.startsWith('/admin');
      });
  }

  openRatingTestPopup(): void {
    this.reviewService.triggerPreviewPopup();
  }

  private isLocalEnvironment(): boolean {
    if (typeof window === 'undefined') {
      return false;
    }

    return window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  }
}