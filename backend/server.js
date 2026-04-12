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
const reviewRoutes = require('./routes/reviewRoutes');
const adminReviewRoutes = require('./routes/adminReviewRoutes');
const webhookRoutes = require('./routes/webhookRoutes');
const sliderRoutes = require('./routes/sliderRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const aiQueueRoutes = require('./routes/aiQueueRoutes');
const settingsRoutes = require('./routes/settingsRoutes');
const productCategoryRoutes = require('./routes/productCategoryRoutes');
const homeSectionsRoutes = require('./routes/homeSectionsRoutes');
const { initializeDatabase } = require('./services/db');
const { notFoundHandler, errorHandler } = require('./middlewares/errorHandler');

const app = express();
const PORT = Number(process.env.PORT) || 5001;

app.use(helmet());
app.use(compression());
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));

// Mount webhook routes BEFORE global JSON parser so Razorpay can receive raw body
app.use('/webhook', webhookRoutes);

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
app.use('/api/reviews', reviewRoutes);
app.use('/api/admin/reviews', adminReviewRoutes);
app.use('/api/slider', sliderRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/admin/ai-queue', aiQueueRoutes);
app.use('/api/settings', settingsRoutes);
app.use('/api/product-categories', productCategoryRoutes);
app.use('/api', homeSectionsRoutes);

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