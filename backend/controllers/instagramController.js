'use strict';

const DEFAULT_LIMIT = 6;
const MAX_LIMIT = 12;
const INSTAGRAM_MEDIA_FIELDS = 'id,caption,media_type,media_url,permalink,thumbnail_url,timestamp';

function normalizeLimit(value) {
  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed <= 0) {
    return DEFAULT_LIMIT;
  }
  return Math.min(parsed, MAX_LIMIT);
}

function getInstagramProfileUrl() {
  return process.env.INSTAGRAM_PROFILE_URL || 'https://www.instagram.com/divaracraft/';
}

async function getInstagramFeed(req, res) {
  const accessToken = String(process.env.INSTAGRAM_ACCESS_TOKEN || '').trim();
  const limit = normalizeLimit(req.query.limit);

  if (!accessToken) {
    return res.json({
      configured: false,
      profileUrl: getInstagramProfileUrl(),
      posts: []
    });
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);

  try {
    const endpoint = new URL('https://graph.instagram.com/me/media');
    endpoint.searchParams.set('fields', INSTAGRAM_MEDIA_FIELDS);
    endpoint.searchParams.set('limit', String(limit));
    endpoint.searchParams.set('access_token', accessToken);

    const response = await fetch(endpoint, { signal: controller.signal });
    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      const message = data?.error?.message || `Instagram returned ${response.status}`;
      throw new Error(message);
    }

    const posts = Array.isArray(data?.data) ? data.data.map((post) => ({
      id: post.id,
      caption: post.caption || '',
      mediaType: post.media_type || '',
      mediaUrl: post.media_url || post.thumbnail_url || '',
      thumbnailUrl: post.thumbnail_url || post.media_url || '',
      permalink: post.permalink || getInstagramProfileUrl(),
      timestamp: post.timestamp || ''
    })).filter((post) => post.mediaUrl || post.thumbnailUrl) : [];

    res.json({
      configured: true,
      profileUrl: getInstagramProfileUrl(),
      posts
    });
  } catch (error) {
    console.error('[instagram] feed error:', error);
    res.status(502).json({
      configured: true,
      profileUrl: getInstagramProfileUrl(),
      error: error.message || 'Failed to fetch Instagram feed',
      posts: []
    });
  } finally {
    clearTimeout(timeoutId);
  }
}

module.exports = {
  getInstagramFeed
};
