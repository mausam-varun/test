require('dotenv').config();

const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const rateLimit = require('express-rate-limit');

const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');
const orderRoutes = require('./routes/orderRoutes');
const sliderRoutes = require('./routes/sliderRoutes');
const aiQueueRoutes = require('./routes/aiQueueRoutes');
const settingsRoutes = require('./routes/settingsRoutes');
const { initializeDatabase } = require('./services/db');
const { notFoundHandler, errorHandler } = require('./middlewares/errorHandler');

const app = express();
const PORT = Number(process.env.PORT) || 5001;

app.use(helmet());
app.use(compression());
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 500,
  standardHeaders: true,
  legacyHeaders: false
});
app.use(limiter);

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/slider', sliderRoutes);
app.use('/api/admin/ai-queue', aiQueueRoutes);
app.use('/api/settings', settingsRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

async function startServer() {
  try {
    await initializeDatabase();
    app.listen(PORT, () => {
      console.log(`Admin backend running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error.message);
    process.exit(1);
  }
}

startServer();