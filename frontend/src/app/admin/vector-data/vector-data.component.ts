import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONFIG } from '../../config/app-config';

interface VectorCollection {
  name: string;
  status: string;
  pointsCount: number;
  vectorsCount: number;
  indexedVectorsCount: number;
}

interface VectorPoint {
  id: number | string;
  product_id: number | string;
  title: string;
  category: string;
  image_url: string;
  price: number;
  primary_color: string;
  colors: string[];
  hasVector: boolean;
  vectorSize: number;
  vectorPreview: number[];
  payload: Record<string, unknown>;
}

interface CollectionsResponse {
  defaultCollection: string;
  collections: VectorCollection[];
}

interface PointsResponse {
  collection: string;
  limit: number;
  nextPageOffset: number | string | null;
  points: VectorPoint[];
}

@Component({
  selector: 'app-vector-data',
  templateUrl: './vector-data.component.html',
  styleUrls: ['./vector-data.component.scss']
})
export class VectorDataComponent implements OnInit {
  private readonly apiUrl = `${APP_CONFIG.API_URL}/admin/vector-data`;

  collections: VectorCollection[] = [];
  selectedCollection = 'bangles';
  points: VectorPoint[] = [];
  pageOffsets: Array<number | string | null> = [null];
  currentPage = 1;
  nextPageOffset: number | string | null = null;
  limit = 25;
  withVector = false;
  searchTerm = '';
  expandedPointId: number | string | null = null;
  isLoadingCollections = false;
  isLoadingPoints = false;
  errorMessage = '';

  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {
    this.loadCollections();
  }

  get selectedCollectionMeta(): VectorCollection | undefined {
    return this.collections.find((collection) => collection.name === this.selectedCollection);
  }

  get filteredPoints(): VectorPoint[] {
    const query = this.searchTerm.trim().toLowerCase();
    if (!query) {
      return this.points;
    }

    return this.points.filter((point) => {
      const searchable = [
        point.id,
        point.product_id,
        point.title,
        point.category,
        point.primary_color,
        ...(point.colors || [])
      ].join(' ').toLowerCase();

      return searchable.includes(query);
    });
  }

  loadCollections(): void {
    this.isLoadingCollections = true;
    this.errorMessage = '';

    this.http.get<CollectionsResponse>(`${this.apiUrl}/collections`, { headers: this.getAdminHeaders() }).subscribe({
      next: (response) => {
        this.collections = response.collections || [];
        this.selectedCollection = this.collections.find((item) => item.name === response.defaultCollection)?.name
          || this.collections[0]?.name
          || response.defaultCollection
          || 'bangles';
        this.isLoadingCollections = false;
        this.resetPagination();
        this.loadPoints();
      },
      error: (error) => {
        this.isLoadingCollections = false;
        this.errorMessage = error?.error?.error || 'Failed to load vector collections.';
      }
    });
  }

  loadPoints(offset: number | string | null = this.pageOffsets[this.currentPage - 1] ?? null): void {
    if (!this.selectedCollection) {
      return;
    }

    this.isLoadingPoints = true;
    this.errorMessage = '';
    const params = new URLSearchParams({
      collection: this.selectedCollection,
      limit: String(this.limit),
      withVector: String(this.withVector)
    });

    if (offset !== null && offset !== undefined) {
      params.set('offset', String(offset));
    }

    this.http.get<PointsResponse>(`${this.apiUrl}/points?${params.toString()}`, { headers: this.getAdminHeaders() }).subscribe({
      next: (response) => {
        this.points = response.points || [];
        this.nextPageOffset = response.nextPageOffset;
        this.expandedPointId = null;
        this.isLoadingPoints = false;
      },
      error: (error) => {
        this.isLoadingPoints = false;
        this.errorMessage = error?.error?.error || 'Failed to load vector points.';
      }
    });
  }

  onCollectionChange(): void {
    this.resetPagination();
    this.loadPoints();
  }

  onLimitChange(): void {
    this.resetPagination();
    this.loadPoints();
  }

  onVectorToggle(): void {
    this.resetPagination();
    this.loadPoints();
  }

  refresh(): void {
    this.loadCollections();
  }

  nextPage(): void {
    if (this.nextPageOffset === null || this.nextPageOffset === undefined) {
      return;
    }

    this.pageOffsets[this.currentPage] = this.nextPageOffset;
    this.currentPage += 1;
    this.loadPoints(this.nextPageOffset);
  }

  previousPage(): void {
    if (this.currentPage <= 1) {
      return;
    }

    this.currentPage -= 1;
    this.loadPoints(this.pageOffsets[this.currentPage - 1] ?? null);
  }

  togglePayload(pointId: number | string): void {
    this.expandedPointId = this.expandedPointId === pointId ? null : pointId;
  }

  formatPayload(payload: Record<string, unknown>): string {
    return JSON.stringify(payload || {}, null, 2);
  }

  trackByPointId(index: number, point: VectorPoint): number | string {
    return point.id || index;
  }

  private resetPagination(): void {
    this.currentPage = 1;
    this.pageOffsets = [null];
    this.nextPageOffset = null;
  }

  private getAdminHeaders(): HttpHeaders {
    const token = localStorage.getItem('admin_token') || '';
    return token ? new HttpHeaders({ Authorization: `Bearer ${token}` }) : new HttpHeaders();
  }
}
