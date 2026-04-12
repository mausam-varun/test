import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../config/app-config';

interface HomeSection {
  section: string;
  image_url?: string;
  top_label?: string;
  main_title?: string;
  description?: string;
  button_text?: string;
  button_link?: string;
  is_active?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class HomeSectionsService {
  private readonly apiBase = API_ENDPOINTS.homeSections || '/api/home-sections';

  constructor(private readonly http: HttpClient) {}

  /**
   * Get a specific home section by name (public endpoint)
   */
  getSection(sectionName: string): Observable<HomeSection> {
    return this.http.get<HomeSection>(`${this.apiBase}/public/${sectionName}`);
  }

  /**
   * Get all active home sections (public endpoint)
   */
  getActiveSections(): Observable<HomeSection[]> {
    return this.http.get<HomeSection[]>(`${this.apiBase}/public`);
  }

  /**
   * Get all home sections (admin endpoint)
   */
  getAllSections(): Observable<HomeSection[]> {
    const token = localStorage.getItem('adminToken');
    const headers = this.getAuthHeaders(token);
    return this.http.get<HomeSection[]>(this.apiBase, { headers });
  }

  /**
   * Update a home section (admin endpoint)
   */
  updateSection(sectionName: string, data: Partial<HomeSection>): Observable<HomeSection> {
    const token = localStorage.getItem('adminToken');
    const headers = this.getAuthHeaders(token);
    return this.http.put<HomeSection>(`${this.apiBase}/${sectionName}`, data, { headers });
  }

  /**
   * Update a section with image file (admin endpoint)
   */
  updateSectionWithImage(sectionName: string, formData: FormData): Observable<HomeSection> {
    const token = localStorage.getItem('adminToken');
    const headers = token ? new HttpHeaders({ Authorization: `Bearer ${token}` }) : new HttpHeaders();
    return this.http.put<HomeSection>(`${this.apiBase}/${sectionName}`, formData, { headers });
  }

  /**
   * Helper method to create auth headers
   */
  private getAuthHeaders(token: string | null): HttpHeaders {
    if (!token) {
      return new HttpHeaders();
    }
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }
}
