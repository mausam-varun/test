const { v2: cloudinary } = require('cloudinary');
const streamifier = require('streamifier');
const fs = require('fs/promises');
const path = require('path');
const crypto = require('crypto');
const sharp = require('sharp');

const hasCloudinaryConfig = Boolean(
  process.env.CLOUDINARY_CLOUD_NAME &&
  process.env.CLOUDINARY_API_KEY &&
  process.env.CLOUDINARY_API_SECRET
);

if (hasCloudinaryConfig) {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  });
}

function getUploadsDir() {
  return path.join(__dirname, '..', 'uploads');
}

function getLocalBaseUrl() {
  const port = Number(process.env.PORT) || 5001;
  return `http://localhost:${port}`;
}

function getPositiveNumber(value, fallback) {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

const PRODUCT_IMAGE_MAX_WIDTH = getPositiveNumber(process.env.PRODUCT_IMAGE_MAX_WIDTH, 1600);
const PRODUCT_IMAGE_MAX_HEIGHT = getPositiveNumber(process.env.PRODUCT_IMAGE_MAX_HEIGHT, 1600);
const PRODUCT_IMAGE_JPEG_QUALITY = Math.min(100, Math.max(80, getPositiveNumber(process.env.PRODUCT_IMAGE_JPEG_QUALITY, 90)));

async function optimizeImageBuffer(fileBuffer, mimeType = 'image/jpeg') {
  if (!fileBuffer) {
    throw new Error('Image buffer is required for upload');
  }

  const pipeline = sharp(fileBuffer, { failOn: 'none' })
    .rotate()
    .resize({
      width: PRODUCT_IMAGE_MAX_WIDTH,
      height: PRODUCT_IMAGE_MAX_HEIGHT,
      fit: 'inside',
      withoutEnlargement: true
    })
    .withMetadata();

  if (mimeType === 'image/png') {
    const { data, info } = await pipeline
      .png({
        compressionLevel: 9,
        adaptiveFiltering: true,
        effort: 10,
        palette: false
      })
      .toBuffer({ resolveWithObject: true });

    return {
      buffer: data,
      mimeType: 'image/png',
      width: info.width,
      height: info.height,
      bytes: info.size || data.length
    };
  }

  const { data, info } = await pipeline
    .jpeg({
      quality: PRODUCT_IMAGE_JPEG_QUALITY,
      mozjpeg: true,
      progressive: true,
      chromaSubsampling: '4:4:4'
    })
    .toBuffer({ resolveWithObject: true });

  return {
    buffer: data,
    mimeType: 'image/jpeg',
    width: info.width,
    height: info.height,
    bytes: info.size || data.length
  };
}

async function saveImageLocally(fileBuffer, mimeType = 'image/jpeg') {
  const uploadsDir = getUploadsDir();
  await fs.mkdir(uploadsDir, { recursive: true });

  const extension = mimeType === 'image/png' ? '.png' : '.jpg';
  const fileName = `product-${Date.now()}-${crypto.randomUUID()}${extension}`;
  const filePath = path.join(uploadsDir, fileName);

  await fs.writeFile(filePath, fileBuffer);

  return `${getLocalBaseUrl()}/uploads/${fileName}`;
}

async function uploadImage(fileBuffer, mimeType) {
  const optimizedImage = await optimizeImageBuffer(fileBuffer, mimeType);

  if (!hasCloudinaryConfig) {
    return saveImageLocally(optimizedImage.buffer, optimizedImage.mimeType);
  }

  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: process.env.CLOUDINARY_FOLDER || 'divara-craft/products',
        resource_type: 'image',
        transformation: [
          { width: PRODUCT_IMAGE_MAX_WIDTH, height: PRODUCT_IMAGE_MAX_HEIGHT, crop: 'limit' },
          { quality: 'auto:best', fetch_format: 'auto' }
        ]
      },
      (error, result) => {
        if (error) {
          return reject(error);
        }
        return resolve(result.secure_url);
      }
    );

    streamifier.createReadStream(optimizedImage.buffer).pipe(uploadStream);
  });
}

function getPublicIdFromUrl(imageUrl) {
  if (!imageUrl || typeof imageUrl !== 'string') {
    return null;
  }

  const [baseUrl] = imageUrl.split('?');
  const marker = '/upload/';
  const markerIndex = baseUrl.indexOf(marker);

  if (markerIndex === -1) {
    return null;
  }

  let path = baseUrl.slice(markerIndex + marker.length);
  path = path.replace(/^v\d+\//, '');

  const extensionIndex = path.lastIndexOf('.');
  if (extensionIndex === -1) {
    return path;
  }

  return path.slice(0, extensionIndex);
}

async function deleteImageByUrl(imageUrl) {
  if (!imageUrl || typeof imageUrl !== 'string') {
    return;
  }

  const localPrefix = `${getLocalBaseUrl()}/uploads/`;
  if (imageUrl.startsWith(localPrefix)) {
    const fileName = imageUrl.slice(localPrefix.length);
    const filePath = path.join(getUploadsDir(), fileName);
    await fs.rm(filePath, { force: true });
    return;
  }

  if (!hasCloudinaryConfig) {
    return;
  }

  const publicId = getPublicIdFromUrl(imageUrl);
  if (!publicId) {
    return;
  }

  await cloudinary.uploader.destroy(publicId, {
    resource_type: 'image'
  });
}

module.exports = {
  uploadImage,
  deleteImageByUrl,
  optimizeImageBuffer
};
