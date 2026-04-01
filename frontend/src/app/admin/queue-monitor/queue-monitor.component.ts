import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINTS } from '../../config/app-config';

interface QueueStatsResponse {
  queueName: string;
  deadLetterQueueName: string;
  main: Record<string, number>;
  deadLetter: Record<string, number>;
}

interface QueueJob {
  id: string;
  state: string;
  attemptsMade: number;
  attemptsMax: number;
  failedReason: string | null;
  data: {
    productId?: number;
    imageUrl?: string;
    sourceJobId?: string;
    failedReason?: string | null;
  };
  timestamp: number;
  finishedOn: number | null;
}

interface QueueJobsResponse {
  jobs: QueueJob[];
}

@Component({
  selector: 'app-queue-monitor',
  templateUrl: './queue-monitor.component.html',
  styleUrls: ['./queue-monitor.component.scss']
})
export class QueueMonitorComponent implements OnInit {
  private readonly baseUrl = API_ENDPOINTS.adminAiQueue;

  loading = false;
  actionMessage = '';
  actionError = '';

  stats: QueueStatsResponse | null = null;
  failedJobs: QueueJob[] = [];
  deadLetterJobs: QueueJob[] = [];

  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.loading = true;
    this.actionError = '';

    this.http.get<QueueStatsResponse>(`${this.baseUrl}/stats`).subscribe({
      next: (stats) => {
        this.stats = stats;
        this.loadFailedJobs();
      },
      error: (err) => {
        this.loading = false;
        this.actionError = err?.error?.error || 'Failed to load queue stats';
      }
    });
  }

  loadFailedJobs(): void {
    this.http
      .get<QueueJobsResponse>(`${this.baseUrl}/jobs?state=failed&limit=25`)
      .subscribe({
        next: (response) => {
          this.failedJobs = response.jobs || [];
          this.loadDeadLetterJobs();
        },
        error: () => {
          this.failedJobs = [];
          this.loadDeadLetterJobs();
        }
      });
  }

  loadDeadLetterJobs(): void {
    this.http
      .get<QueueJobsResponse>(`${this.baseUrl}/jobs?state=waiting&limit=25&dlq=true`)
      .subscribe({
        next: (response) => {
          this.deadLetterJobs = response.jobs || [];
          this.loading = false;
        },
        error: () => {
          this.deadLetterJobs = [];
          this.loading = false;
        }
      });
  }

  retryJob(jobId: string, dlq = false): void {
    this.actionMessage = '';
    this.actionError = '';

    const suffix = dlq ? '?dlq=true' : '';
    this.http.post<{ message: string }>(`${this.baseUrl}/jobs/${jobId}/retry${suffix}`, {}).subscribe({
      next: (res) => {
        this.actionMessage = res?.message || 'Job retried';
        this.refresh();
      },
      error: (err) => {
        this.actionError = err?.error?.error || 'Failed to retry job';
      }
    });
  }

  removeJob(jobId: string, dlq = false): void {
    this.actionMessage = '';
    this.actionError = '';

    const suffix = dlq ? '?dlq=true' : '';
    this.http.delete<{ message: string }>(`${this.baseUrl}/jobs/${jobId}${suffix}`).subscribe({
      next: (res) => {
        this.actionMessage = res?.message || 'Job removed';
        this.refresh();
      },
      error: (err) => {
        this.actionError = err?.error?.error || 'Failed to remove job';
      }
    });
  }

  formatDate(value: number | null): string {
    if (!value) {
      return '-';
    }

    return new Date(value).toLocaleString();
  }

  countOf(bucket: Record<string, number> | undefined, key: string): number {
    return Number(bucket?.[key] || 0);
  }
}
