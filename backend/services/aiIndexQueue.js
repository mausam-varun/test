const { Queue } = require('bullmq');
const IORedis = require('ioredis');

const DEFAULT_QUEUE_NAME = 'ai-product-indexing';
const DEFAULT_DLQ_NAME = 'ai-product-indexing-dlq';
const DEFAULT_ATTEMPTS = 5;
const DEFAULT_BACKOFF_MS = 5000;

let redisConnection = null;
let aiIndexQueue = null;
let aiIndexDlq = null;

function toNumber(value, fallback) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function getQueueConfig() {
  return {
    queueName: String(process.env.AI_INDEX_QUEUE_NAME || DEFAULT_QUEUE_NAME).trim() || DEFAULT_QUEUE_NAME,
    deadLetterQueueName:
      String(process.env.AI_INDEX_DLQ_NAME || DEFAULT_DLQ_NAME).trim() || DEFAULT_DLQ_NAME,
    attempts: Math.max(1, toNumber(process.env.AI_INDEX_QUEUE_ATTEMPTS, DEFAULT_ATTEMPTS)),
    backoffMs: Math.max(500, toNumber(process.env.AI_INDEX_QUEUE_BACKOFF_MS, DEFAULT_BACKOFF_MS))
  };
}

function getRedisConfig() {
  const host = String(process.env.REDIS_HOST || '127.0.0.1').trim();
  const port = toNumber(process.env.REDIS_PORT, 6379);
  const db = toNumber(process.env.REDIS_DB, 0);
  const password = process.env.REDIS_PASSWORD || undefined;

  return {
    host,
    port,
    db,
    password,
    maxRetriesPerRequest: null,
    enableReadyCheck: true
  };
}

function getRedisConnection() {
  if (!redisConnection) {
    redisConnection = new IORedis(getRedisConfig());
    redisConnection.on('error', (error) => {
      console.error('[AIQueue] Redis connection error:', error.message);
    });
  }

  return redisConnection;
}

function getAiIndexQueue() {
  if (!aiIndexQueue) {
    const { queueName } = getQueueConfig();
    aiIndexQueue = new Queue(queueName, {
      connection: getRedisConnection(),
      defaultJobOptions: {
        removeOnComplete: 1000,
        removeOnFail: 2000
      }
    });
  }

  return aiIndexQueue;
}

function getAiIndexDlq() {
  if (!aiIndexDlq) {
    const { deadLetterQueueName } = getQueueConfig();
    aiIndexDlq = new Queue(deadLetterQueueName, {
      connection: getRedisConnection(),
      defaultJobOptions: {
        removeOnComplete: 2000,
        removeOnFail: 5000
      }
    });
  }

  return aiIndexDlq;
}

async function enqueueAiIndexJob({ productId, imageUrl, metadata = {} }) {
  if (!productId || !imageUrl) {
    throw new Error('productId and imageUrl are required to enqueue AI indexing');
  }

  const queue = getAiIndexQueue();
  const { queueName, attempts, backoffMs } = getQueueConfig();

  const job = await queue.add(
    'index-product',
    {
      productId,
      imageUrl,
      metadata
    },
    {
      attempts,
      backoff: {
        type: 'exponential',
        delay: backoffMs
      },
      jobId: `ai-index:${productId}:${Date.now()}`
    }
  );

  return {
    jobId: job.id,
    queueName
  };
}

async function enqueueDeadLetterJob(payload) {
  const dlq = getAiIndexDlq();
  const { deadLetterQueueName } = getQueueConfig();

  const job = await dlq.add('dead-letter', payload, {
    attempts: 1,
    removeOnComplete: 5000,
    removeOnFail: 10000,
    jobId: `ai-dlq:${payload?.productId || 'unknown'}:${Date.now()}`
  });

  return {
    jobId: job.id,
    queueName: deadLetterQueueName
  };
}

async function getQueueStats() {
  const queue = getAiIndexQueue();
  const dlq = getAiIndexDlq();

  const [mainCounts, dlqCounts] = await Promise.all([queue.getJobCounts(), dlq.getJobCounts()]);
  const { queueName, deadLetterQueueName } = getQueueConfig();

  return {
    queueName,
    deadLetterQueueName,
    main: mainCounts,
    deadLetter: dlqCounts
  };
}

async function listQueueJobs(state = 'failed', limit = 20, fromDlq = false) {
  const queue = fromDlq ? getAiIndexDlq() : getAiIndexQueue();
  const normalizedState = String(state || 'failed').toLowerCase();
  const cappedLimit = Math.max(1, Math.min(100, Number(limit) || 20));

  const jobs = await queue.getJobs([normalizedState], 0, cappedLimit - 1, true);
  return jobs.map((job) => ({
    id: job.id,
    name: job.name,
    state: normalizedState,
    attemptsMade: job.attemptsMade,
    attemptsMax: Number(job.opts?.attempts || 1),
    failedReason: job.failedReason || null,
    timestamp: job.timestamp,
    processedOn: job.processedOn || null,
    finishedOn: job.finishedOn || null,
    data: job.data || {}
  }));
}

async function retryQueueJob(jobId, fromDlq = false, aiProvider = null) {
  const queue = fromDlq ? getAiIndexDlq() : getAiIndexQueue();
  const job = await queue.getJob(jobId);
  if (!job) {
    throw new Error('Job not found');
  }

  const selectedProvider = aiProvider ? String(aiProvider).trim().toLowerCase() : '';
  if (selectedProvider && typeof job.updateData === 'function') {
    await job.updateData({
      ...(job.data || {}),
      metadata: {
        ...(job.data?.metadata || {}),
        ai_provider: selectedProvider === 'gemini' ? 'gemini' : 'openai'
      }
    });
  }

  await job.retry();
  return {
    id: job.id,
    ai_provider: selectedProvider === 'gemini' ? 'gemini' : 'openai',
    message: selectedProvider ? `Job retried with ${selectedProvider === 'gemini' ? 'Gemini' : 'OpenAI'}` : 'Job retried'
  };
}

async function removeQueueJob(jobId, fromDlq = false) {
  const queue = fromDlq ? getAiIndexDlq() : getAiIndexQueue();
  const job = await queue.getJob(jobId);
  if (!job) {
    throw new Error('Job not found');
  }

  await job.remove();
  return { id: job.id, message: 'Job removed' };
}

module.exports = {
  enqueueAiIndexJob,
  enqueueDeadLetterJob,
  getAiIndexQueue,
  getAiIndexDlq,
  getQueueStats,
  listQueueJobs,
  retryQueueJob,
  removeQueueJob,
  getQueueConfig,
  getRedisConnection
};
