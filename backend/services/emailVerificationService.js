const verificationStore = new Map();
const CODE_TTL_MS = 10 * 60 * 1000;

function generateCode() {
  return String(Math.floor(100000 + Math.random() * 900000));
}

function createVerification(userId, payload) {
  const code = generateCode();
  const expiresAt = Date.now() + CODE_TTL_MS;

  verificationStore.set(Number(userId), {
    code,
    expiresAt,
    ...payload
  });

  return { code, expiresAt };
}

function getVerification(userId) {
  const entry = verificationStore.get(Number(userId));
  if (!entry) {
    return null;
  }

  if (Date.now() > entry.expiresAt) {
    verificationStore.delete(Number(userId));
    return null;
  }

  return entry;
}

function clearVerification(userId) {
  verificationStore.delete(Number(userId));
}

function verifyCode(userId, code) {
  const entry = getVerification(userId);
  if (!entry) {
    return null;
  }

  if (String(entry.code) !== String(code || '')) {
    return false;
  }

  return entry;
}

module.exports = {
  createVerification,
  getVerification,
  clearVerification,
  verifyCode,
  CODE_TTL_MS
};
