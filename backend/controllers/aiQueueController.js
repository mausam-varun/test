const asyncHandler = require('../utils/asyncHandler');
const AppError = require('../utils/AppError');
const {
  getQueueStats,
  listQueueJobs,
  retryQueueJob,
  removeQueueJob
} = require('../services/aiIndexQueue');
const {
  getAiProviderState,
  setDefaultAiProvider
} = require('../services/openai.service');

function parseDlqFlag(value) {
  const normalized = String(value || '').trim().toLowerCase();
  return ['1', 'true', 'yes', 'dlq'].includes(normalized);
}

exports.getAiQueueStats = asyncHandler(async (req, res) => {
  const stats = await getQueueStats();
  res.status(200).json(stats);
});

exports.getAiProviderConfig = asyncHandler(async (req, res) => {
  res.status(200).json(getAiProviderState());
});

exports.updateAiProviderConfig = asyncHandler(async (req, res) => {
  const nextProvider = setDefaultAiProvider(req.body?.provider || req.body?.ai_provider || req.query?.provider);
  res.status(200).json({
    ...getAiProviderState(),
    message: `AI model set to ${nextProvider === 'gemini' ? 'Gemini' : 'OpenAI'}.`
  });
});

exports.getAiQueueJobs = asyncHandler(async (req, res) => {
  const state = String(req.query.state || 'failed').toLowerCase();
  const limit = Number(req.query.limit || 20);
  const fromDlq = parseDlqFlag(req.query.dlq);

  const allowedStates = ['waiting', 'active', 'delayed', 'completed', 'failed', 'paused'];
  if (!allowedStates.includes(state)) {
    throw new AppError(`Invalid state. Allowed: ${allowedStates.join(', ')}`, 400);
  }

  const jobs = await listQueueJobs(state, limit, fromDlq);
  res.status(200).json({
    state,
    dlq: fromDlq,
    count: jobs.length,
    jobs
  });
});

exports.retryAiQueueJob = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const fromDlq = parseDlqFlag(req.query.dlq);
  const aiProvider = req.body?.provider || req.body?.ai_provider || req.query?.provider || null;

  if (!id) {
    throw new AppError('Job id is required', 400);
  }

  try {
    const result = await retryQueueJob(id, fromDlq, aiProvider);
    res.status(200).json(result);
  } catch (error) {
    throw new AppError(error.message || 'Unable to retry job', 404);
  }
});

exports.removeAiQueueJob = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const fromDlq = parseDlqFlag(req.query.dlq);

  if (!id) {
    throw new AppError('Job id is required', 400);
  }

  try {
    const result = await removeQueueJob(id, fromDlq);
    res.status(200).json(result);
  } catch (error) {
    throw new AppError(error.message || 'Unable to remove job', 404);
  }
});
