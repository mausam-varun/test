import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface HomeSection {
  id?: number;
  section: string;
  image_url?: string;
  top_label?: string;
  main_title?: string;
  description?: string;
  button_text?: string;
  button_link?: string;
  is_active?: boolean;
  created_at?: string;
  updated_at?: string;
}

@Injectable({
  providedIn: 'root'
})
export class HomeSectionsService {
  private apiBaseUrl = 'http://localhost:5002/api';

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('adminToken');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  /**
   * Get all home sections (admin)
   */
  getAllSections(): Observable<HomeSection[]> {
    return this.http.get<HomeSection[]>(
      `${this.apiBaseUrl}/home-sections`,
      { headers: this.getAuthHeaders() }
    );
  }

  /**
   * Get a specific home section
   */
  getSection(sectionName: string): Observable<HomeSection> {
    return this.http.get<HomeSection>(
      `${this.apiBaseUrl}/home-sections/public/${sectionName}`
    );
  }

  /**
   * Update a home section with image upload
   */
  updateSection(sectionName: string, data: Partial<HomeSection>, imageFile?: File): Observable<any> {
    const formData = new FormData();
    
    if (data.top_label) formData.append('top_label', data.top_label);
    if (data.main_title) formData.append('main_title', data.main_title);
    if (data.description) formData.append('description', data.description);
    if (data.button_text) formData.append('button_text', data.button_text);
    if (data.button_link) formData.append('button_link', data.button_link);
    if (data.is_active !== undefined) formData.append('is_active', data.is_active ? '1' : '0');
    
    if (imageFile) {
      formData.append('image', imageFile);
    }

    return this.http.put(
      `${this.apiBaseUrl}/home-sections/${sectionName}`,
      formData,
      { headers: this.getAuthHeaders() }
    );
  }

  /**
   * Update New Arrivals section
   */
  updateNewArrivals(data: Partial<HomeSection>, imageFile?: File): Observable<any> {
    return this.updateSection('new_arrivals', data, imageFile);
  }

  /**
   * Get New Arrivals section (public)
   */
  getNewArrivals(): Observable<HomeSection> {
    return this.http.get<HomeSection>(
      `${this.apiBaseUrl}/home-sections/public/new_arrivals`
    );
  }

  /**
   * Update Our Story section
   */
  updateOurStory(data: Partial<HomeSection>, imageFile?: File): Observable<any> {
    return this.updateSection('our_story', data, imageFile);
  }

  /**
   * Get Our Story section (public)
   */
  getOurStory(): Observable<HomeSection> {
    return this.http.get<HomeSection>(
      `${this.apiBaseUrl}/home-sections/public/our_story`
    );
  }
}
