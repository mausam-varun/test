const authService = require('../services/authService');

function extractBearerToken(req) {
  const authHeader = req.headers.authorization || '';
  return authHeader.replace(/^Bearer\s+/i, '').trim();
}

async function resolveCustomerUser(req) {
  const token = extractBearerToken(req);
  if (!token) {
    return null;
  }

  const match = token.match(/^user-token-(\d+)$/);
  if (!match) {
    return null;
  }

  const userId = Number(match[1]);
  if (!Number.isInteger(userId) || userId <= 0) {
    return null;
  }

  return authService.getCustomerUserById(userId);
}

async function optionalCustomerAuth(req, res, next) {
  try {
    const user = await resolveCustomerUser(req);
    if (user) {
      req.user = user;
    }
    next();
  } catch (error) {
    next();
  }
}

async function requireCustomerAuth(req, res, next) {
  try {
    const user = await resolveCustomerUser(req);
    if (!user) {
      return res.status(401).json({ error: 'Customer login required' });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid customer session' });
  }
}

module.exports = {
  optionalCustomerAuth,
  requireCustomerAuth
};
