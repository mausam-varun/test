# Divara Craft - Architecture Scaling Upgrade (Implemented)

## Objective
This upgrade introduces a durable background-processing architecture for AI product indexing, so API requests stay fast and indexing work is retried safely outside the web process.

## What Was Implemented

### 1) Redis-backed queue layer (BullMQ)
- Added queue service: `backend/services/aiIndexQueue.js`
- Added dependencies in `backend/package.json`:
  - `bullmq`
  - `ioredis`

Why:
- Moves long-running/fragile AI indexing from in-process fire-and-forget to durable jobs.
- Supports retries and backoff when AI service/network is transiently unavailable.

### 2) Dedicated AI indexing worker process
- Added worker entrypoint: `backend/workers/aiIndexWorker.js`
- Added script: `npm run worker:ai-index`

Why:
- Separates API concerns from background execution.
- Lets you scale workers independently from web API replicas.
- Improves resilience; worker restarts do not lose queued jobs.

### 3) API workflow integration
- Updated `backend/services/productAiWorkflowService.js`
  - `async` mode now enqueues jobs into BullMQ.
  - If queue is temporarily unavailable, it falls back to in-process async handling to avoid blocking product creation.

Why:
- Preserves current user experience while enabling durable queue-first behavior.

### 4) Container orchestration changes
- Updated `docker-compose.yml`:
  - Added `redis` service.
  - Updated `admin-backend` env/dependencies to use Redis.
  - Added `ai-index-worker` service to process queue jobs.

Why:
- Makes queue/worker architecture runnable as a full stack in one compose command.

### 5) Environment configuration
- Updated `backend/.env.example` with queue/Redis variables:
  - `REDIS_HOST`, `REDIS_PORT`, `REDIS_DB`, `REDIS_PASSWORD`
  - `AI_INDEX_QUEUE_NAME`, `AI_INDEX_QUEUE_ATTEMPTS`, `AI_INDEX_QUEUE_BACKOFF_MS`
  - `AI_INDEX_WORKER_CONCURRENCY`

Why:
- Standardizes deployment configuration for local/dev/prod.

### 6) Dead-letter queue (DLQ) for exhausted jobs
- Updated worker: `backend/workers/aiIndexWorker.js`
- Updated queue service: `backend/services/aiIndexQueue.js`

What now happens:
- If a job fails all configured attempts, worker pushes a compact failure payload into DLQ.
- DLQ keeps source job id, product id, failure reason, and timestamps for manual recovery.

Why:
- Prevents silent failure after max retries.
- Preserves recoverable failure context for operators.

### 7) Queue observability and operations API
- Added controller: `backend/controllers/aiQueueController.js`
- Added routes: `backend/routes/aiQueueRoutes.js`
- Mounted in server: `/api/admin/ai-queue/*`

Endpoints:
- `GET /api/admin/ai-queue/stats`
- `GET /api/admin/ai-queue/jobs?state=failed&limit=25`
- `GET /api/admin/ai-queue/jobs?state=waiting&limit=25&dlq=true`
- `POST /api/admin/ai-queue/jobs/:id/retry`
- `POST /api/admin/ai-queue/jobs/:id/retry?dlq=true`
- `DELETE /api/admin/ai-queue/jobs/:id`
- `DELETE /api/admin/ai-queue/jobs/:id?dlq=true`

Why:
- Gives operational visibility and recovery controls without touching Redis directly.

### 8) Admin UI monitor for queue operations
- Added component: `frontend/src/app/admin/queue-monitor/*`
- Added route: `/admin/ai-queue`
- Added sidebar nav item in admin layout.

Why:
- Enables non-developer operations to monitor failed jobs and trigger retry/remove actions.

## Runtime Flow (New)

1. Product create/update API receives request.
2. `runPrimaryImageAiWorkflow` decides mode from `AI_INDEXING_MODE`.
3. In `async` mode, API enqueues `index-product` job in Redis via BullMQ.
4. Worker consumes job and calls `processProductForSimilarity`.
5. On transient failure, BullMQ retries with exponential backoff.
6. Job completion/failure is logged by the worker.
7. If all retries are exhausted, job is moved to DLQ.
8. Admin monitor can inspect and retry/remove failed or DLQ jobs.

## Files Changed (Architecture Upgrade)

- `backend/services/productAiWorkflowService.js`
- `backend/services/aiIndexQueue.js` (new)
- `backend/workers/aiIndexWorker.js` (new)
- `backend/controllers/aiQueueController.js` (new)
- `backend/routes/aiQueueRoutes.js` (new)
- `backend/package.json`
- `backend/package-lock.json`
- `backend/.env.example`
- `docker-compose.yml`
- `frontend/src/app/admin/queue-monitor/queue-monitor.component.ts` (new)
- `frontend/src/app/admin/queue-monitor/queue-monitor.component.html` (new)
- `frontend/src/app/admin/queue-monitor/queue-monitor.component.scss` (new)
- `frontend/src/app/admin/admin-routing.module.ts`
- `frontend/src/app/admin/admin.module.ts`
- `frontend/src/app/admin/layout/admin-layout.component.ts`

## How To Run

### Option A: Docker Compose (recommended)
```bash
docker compose up --build
```

This will start:
- `mysql`
- `qdrant`
- `redis`
- `ai-service`
- `admin-backend`
- `ai-index-worker`

### Option B: Local split processes
```bash
# terminal 1: redis
redis-server

# terminal 2: backend API
cd backend
npm run dev

# terminal 3: worker
cd backend
npm run worker:ai-index
```

## Production Notes

1. Set Redis auth/TLS in production (`REDIS_PASSWORD`, secure network).
2. Run multiple worker replicas for higher throughput.
3. Keep API replicas stateless; queue handles durability.
4. Add queue metrics dashboard (Bull Board / Prometheus) next.
5. Add alerting (Slack/email) on DLQ growth or repeated failures.

## Next Recommended Improvements

1. Add job status persistence table (`ai_jobs`) for historical reporting.
2. Add distributed tracing across API -> queue -> worker -> AI service.
3. Introduce request id correlation logging.
4. Add autoscaling policy based on queue depth.
5. Add role-based auth guard for `/api/admin/ai-queue/*` endpoints.
