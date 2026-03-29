import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

interface SidebarItem {
  label: string;
  route: string;
  icon: string; // inline SVG path data
}

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent {
  sidebarOpen = true;

  readonly navItems: SidebarItem[] = [
    {
      label: 'Add Product',
      route: '/admin/add-product',
      icon: 'M12 5v14M5 12h14'
    },
    {
      label: 'Products',
      route: '/admin/products',
      icon: 'M4 6h16M4 10h16M4 14h16M4 18h16'
    },
    {
      label: 'Users',
      route: '/admin/users',
      icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M29 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z'
    },
    {
      label: 'Slider Settings',
      route: '/admin/slider-settings',
      icon: 'M4 19h16M4 12h10M4 5h16M16 12l4-3v6l-4-3z'
    }
  ];

  constructor(private readonly router: Router) {}

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  isActive(route: string): boolean {
    return this.router.isActive(route, {
      paths: 'exact',
      queryParams: 'ignored',
      fragment: 'ignored',
      matrixParams: 'ignored'
    });
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth <= 768) {
      this.sidebarOpen = false;
    } else {
      this.sidebarOpen = true;
    }
  }
}
