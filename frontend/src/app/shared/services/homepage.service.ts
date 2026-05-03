import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type HomepageLayout = 'home1' | 'home3';

const STORAGE_KEY = 'dc_active_homepage';

@Injectable({ providedIn: 'root' })
export class HomepageService {
  private layoutSubject = new BehaviorSubject<HomepageLayout>(this.readFromStorage());

  layout$ = this.layoutSubject.asObservable();

  get layout(): HomepageLayout {
    return this.layoutSubject.value;
  }

  setLayout(layout: HomepageLayout): void {
    try { localStorage.setItem(STORAGE_KEY, layout); } catch {}
    this.layoutSubject.next(layout);
  }

  private readFromStorage(): HomepageLayout {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as HomepageLayout | null;
      if (stored && ['home1', 'home3'].includes(stored)) return stored;
    } catch {}
    return 'home1';
  }
}
