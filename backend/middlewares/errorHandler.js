const multer = require('multer');

function notFoundHandler(req, res, next) {
  res.status(404).json({ message: 'Route not found' });
}

function errorHandler(error, req, res, next) {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ message: 'Uploaded file is too large' });
    }
    return res.status(400).json({ message: error.message });
  }

  const statusCode = error.statusCode || 500;
  const message = error.message || 'Internal server error';

  if (statusCode >= 500) {
    console.error(error);
  }

  return res.status(statusCode).json({ message });
}

module.exports = {
  notFoundHandler,
  errorHandler
};
