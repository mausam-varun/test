const express = require('express');
const authService = require('../services/authService');
const emailService = require('../services/emailService');
const emailVerificationService = require('../services/emailVerificationService');

const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Name, email, and password are required' });
    }

    const user = await authService.createCustomerUser({
      name,
      email,
      password,
      phone
    });

    res.status(201).json({
      status: 'ok',
      user,
      token: `user-token-${user.id}`
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/user-login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const user = await authService.loginCustomerUser(email, password);

    res.json({
      status: 'ok',
      user,
      token: `user-token-${user.id}`
    });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

router.put('/profile/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    const user = await authService.updateCustomerProfile(id, {
      name,
      email,
      phone
    });

    res.json({
      status: 'ok',
      user
    });
  } catch (error) {
    const statusCode = String(error.message || '').includes('not found') ? 404 : 400;
    res.status(statusCode).json({ error: error.message });
  }
});

router.post('/profile/:id/request-email-verification', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    const existingUser = await authService.getCustomerUserById(id);
    if (!existingUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    const nextEmail = String(email || '').trim().toLowerCase();
    if (!nextEmail) {
      return res.status(400).json({ error: 'Valid email is required' });
    }

    if (String(existingUser.email || '').toLowerCase() === nextEmail) {
      return res.status(400).json({ error: 'Email is unchanged; no verification needed' });
    }

    const { code } = emailVerificationService.createVerification(id, {
      userId: Number(id),
      name: String(name || '').trim(),
      email: nextEmail,
      phone: String(phone || '').trim()
    });

    await emailService.sendProfileVerificationEmail({
      to: nextEmail,
      code,
      name: String(name || '').trim()
    });

    res.json({
      status: 'ok',
      message: 'Verification code sent to your new email address.'
    });
  } catch (error) {
    res.status(400).json({ error: error.message || 'Failed to send verification email' });
  }
});

router.post('/profile/:id/verify-email-update', async (req, res) => {
  try {
    const { id } = req.params;
    const { code } = req.body;

    if (!code) {
      return res.status(400).json({ error: 'Verification code is required' });
    }

    const verification = emailVerificationService.verifyCode(id, code);
    if (verification === false) {
      return res.status(400).json({ error: 'Invalid verification code' });
    }

    if (!verification) {
      return res.status(400).json({ error: 'Verification expired. Request a new code.' });
    }

    const user = await authService.updateCustomerProfile(id, {
      name: verification.name,
      email: verification.email,
      phone: verification.phone
    });

    emailVerificationService.clearVerification(id);

    res.json({
      status: 'ok',
      user,
      message: 'Email verified and profile updated successfully.'
    });
  } catch (error) {
    const statusCode = String(error.message || '').includes('not found') ? 404 : 400;
    res.status(statusCode).json({ error: error.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const user = await authService.loginAdminUser(email, password);
    
    // In a real app, you'd return a JWT or session token here
    res.json({
      status: 'ok',
      user,
      token: `admin-token-${user.id}` // Placeholder token for demo
    });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

// Register (admin only, should be restricted in production)
router.post('/register', async (req, res) => {
  try {
    const { email, password, userType } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const user = await authService.createAdminUser(email, password, userType || 'admin');
    res.status(201).json({ status: 'ok', user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all admin users
router.get('/users', async (req, res) => {
  try {
    const users = await authService.getAllAdminUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get user by ID
router.get('/users/:id', async (req, res) => {
  try {
    const user = await authService.getAdminUserById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/admins/:id/currency', async (req, res) => {
  try {
    const preferredCurrency = await authService.getAdminCurrencyPreference(req.params.id);
    res.json({
      status: 'ok',
      adminId: Number(req.params.id),
      preferred_currency: preferredCurrency
    });
  } catch (error) {
    const statusCode = String(error.message || '').includes('not found') ? 404 : 400;
    res.status(statusCode).json({ error: error.message });
  }
});

router.put('/admins/:id/currency', async (req, res) => {
  try {
    const { currency } = req.body || {};
    if (!currency) {
      return res.status(400).json({ error: 'currency is required' });
    }

    const updated = await authService.updateAdminCurrencyPreference(req.params.id, currency);
    res.json({
      status: 'ok',
      ...updated
    });
  } catch (error) {
    const statusCode = String(error.message || '').includes('not found') ? 404 : 400;
    res.status(statusCode).json({ error: error.message });
  }
});

// Delete user
router.delete('/users/:id', async (req, res) => {
  try {
    const deleted = await authService.deleteAdminUser(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ status: 'ok', message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Google OAuth Sign-In
router.post('/google-signin', async (req, res) => {
  try {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({ error: 'Google token is required' });
    }

    if (typeof token !== 'string') {
      return res.status(400).json({ error: 'Token must be a string' });
    }

    const user = await authService.loginOrCreateGoogleUser(token);

    if (!user || !user.id) {
      return res.status(500).json({ error: 'User creation or retrieval failed' });
    }

    res.json({
      status: 'ok',
      user,
      token: `user-token-${user.id}`
    });
  } catch (error) {
    console.error('Google OAuth error:', {
      message: error.message,
      stack: error.stack,
      tokenLength: req.body?.token?.length
    });

    const errorMessage = error.message || 'Google sign-in failed';
    const statusCode = errorMessage.includes('already registered') ? 409 : 401;

    res.status(statusCode).json({ 
      error: errorMessage,
      code: statusCode
    });
  }
});

router.post('/google-signin-profile', async (req, res) => {
  try {
    const { email, name, picture } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const user = await authService.loginOrCreateGoogleProfileUser({ email, name, picture });

    if (!user || !user.id) {
      return res.status(500).json({ error: 'User creation or retrieval failed' });
    }

    res.json({
      status: 'ok',
      user,
      token: `user-token-${user.id}`
    });
  } catch (error) {
    res.status(401).json({ error: error.message || 'Google sign-in failed' });
  }
});

module.exports = router;
