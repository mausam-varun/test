const authService = require('../services/authService');

async function requireAdminAuth(req, res, next) {
  try {
    const authHeader = req.headers.authorization || '';
    const token = authHeader.replace(/^Bearer\s+/i, '').trim();

    if (!token) {
      return res.status(401).json({ error: 'Admin authorization token required' });
    }

    const match = token.match(/^admin-token-(\d+)$/);
    if (!match) {
      return res.status(401).json({ error: 'Invalid admin token format' });
    }

    const adminId = Number(match[1]);
    const admin = await authService.getAdminUserById(adminId);

    if (!admin) {
      return res.status(401).json({ error: 'Admin not found' });
    }

    req.admin = admin;
    req.adminId = adminId;
    next();
  } catch (error) {
    return res.status(500).json({ error: 'Admin authentication failed' });
  }
}

module.exports = {
  requireAdminAuth
};
