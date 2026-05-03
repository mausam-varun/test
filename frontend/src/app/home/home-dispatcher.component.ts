import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomepageService, HomepageLayout } from '../shared/services/homepage.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home-dispatcher',
  template: `
    <ng-container [ngSwitch]="activeLayout">
      <app-home  *ngSwitchCase="'home1'"></app-home>
      <app-home3 *ngSwitchDefault></app-home3>
    </ng-container>
  `
})
export class HomeDispatcherComponent implements OnInit, OnDestroy {
  activeLayout: HomepageLayout = 'home1';
  private destroy$ = new Subject<void>();

  constructor(private readonly homepageService: HomepageService) {}

  ngOnInit(): void {
    this.homepageService.layout$.pipe(takeUntil(this.destroy$)).subscribe(layout => {
      this.activeLayout = layout;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
