require('dotenv').config();

const { Worker } = require('bullmq');
const { processProductForSimilarity } = require('../services/aiProductService');
const {
  getQueueConfig,
  getRedisConnection,
  enqueueDeadLetterJob
} = require('../services/aiIndexQueue');

const { queueName } = getQueueConfig();
const concurrency = Math.max(1, Number(process.env.AI_INDEX_WORKER_CONCURRENCY) || 2);

const worker = new Worker(
  queueName,
  async (job) => {
    const { productId, imageUrl, metadata } = job.data || {};

    if (!productId || !imageUrl) {
      throw new Error('Missing productId or imageUrl in AI indexing job payload');
    }

    const result = await processProductForSimilarity({
      productId,
      imageUrl,
      metadata: metadata || {}
    });

    return {
      productId,
      stored: Boolean(result?.stored),
      status: result?.status || 'success'
    };
  },
  {
    connection: getRedisConnection(),
    concurrency
  }
);

worker.on('ready', () => {
  console.log(`[AIWorker] Ready. Queue=${queueName}, concurrency=${concurrency}`);
});

worker.on('active', (job) => {
  console.log(`[AIWorker] Processing job ${job.id} for product ${job.data?.productId}`);
});

worker.on('completed', (job, result) => {
  console.log(`[AIWorker] Completed job ${job.id}:`, result);
});

worker.on('failed', (job, error) => {
  const jobId = job?.id || 'unknown';
  console.error(`[AIWorker] Failed job ${jobId}:`, error.message);

  const attemptsMade = Number(job?.attemptsMade || 0);
  const maxAttempts = Number(job?.opts?.attempts || 1);
  const isExhausted = attemptsMade >= maxAttempts;

  if (!isExhausted) {
    return;
  }

  enqueueDeadLetterJob({
    sourceQueue: queueName,
    sourceJobId: String(jobId),
    productId: job?.data?.productId,
    imageUrl: job?.data?.imageUrl,
    metadata: job?.data?.metadata || {},
    attemptsMade,
    maxAttempts,
    failedReason: error?.message || job?.failedReason || 'Unknown failure',
    failedAt: new Date().toISOString()
  })
    .then((dlqJob) => {
      console.error(`[AIWorker] Job ${jobId} moved to DLQ as ${dlqJob.jobId}`);
    })
    .catch((dlqError) => {
      console.error(`[AIWorker] Failed to move job ${jobId} to DLQ:`, dlqError.message);
    });
});

worker.on('error', (error) => {
  console.error('[AIWorker] Worker error:', error.message);
});

async function shutdown(signal) {
  console.log(`[AIWorker] Received ${signal}. Shutting down worker...`);
  try {
    await worker.close();
    await getRedisConnection().quit();
    process.exit(0);
  } catch (error) {
    console.error('[AIWorker] Graceful shutdown failed:', error.message);
    process.exit(1);
  }
}

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));
