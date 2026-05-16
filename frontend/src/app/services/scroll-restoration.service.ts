import { Injectable } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

/**
 * Custom scroll restoration service.
 *
 * Angular's built-in `scrollPositionRestoration: 'enabled'` fires at NavigationEnd,
 * before async content (product lists, recently viewed, banners) has rendered.
 * The page is still short at that point so restoration overshoots or snaps to top.
 *
 * Strategy:
 *  - On NavigationStart: save current scrollY against the URL we are leaving.
 *  - On NavigationEnd:
 *      - Back/forward (popstate trigger): hide the page instantly, wait for two
 *        animation frames + a settle delay so async content can render, restore
 *        scroll, then reveal the page. User never sees the hero/slider flash.
 *      - Regular forward navigation: scroll to top instantly.
 */
@Injectable({ providedIn: 'root' })
export class ScrollRestorationService {
  private readonly scrollMap: Record<string, number> = {};
  private savedUrl   = '';
  private isPopstate = false;

  constructor(private readonly router: Router) {
    this.router.events
      .pipe(filter(e => e instanceof NavigationStart))
      .subscribe((e: any) => {
        // Save position for the page we are leaving
        if (this.savedUrl) {
          this.scrollMap[this.savedUrl] = window.scrollY;
        }
        this.isPopstate = e.navigationTrigger === 'popstate';
      });

    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: any) => {
        this.savedUrl = e.urlAfterRedirects;

        if (this.isPopstate) {
          const target = this.scrollMap[this.savedUrl] ?? 0;

          // First attempt: after Angular's initial synchronous render (2 rAFs).
          // This handles pages where content is already in the DOM.
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              window.scrollTo({ top: target, behavior: 'instant' });
            });
          });

          // Correction: after async API calls (products, recently-viewed) have
          // expanded the page height. No hiding = no blank screen.
          setTimeout(() => {
            window.scrollTo({ top: target, behavior: 'instant' });
          }, 400);
        } else {
          window.scrollTo({ top: 0, behavior: 'instant' });
        }
      });
  }
}
