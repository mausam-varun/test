const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const workspaceRoot = path.resolve(projectRoot, '..');
const outputFilePath = path.join(projectRoot, 'src/app/config/app-env.generated.ts');

function parseEnvFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return {};
  }

  const raw = fs.readFileSync(filePath, 'utf8');
  const values = {};

  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) {
      continue;
    }

    const separatorIndex = trimmed.indexOf('=');
    if (separatorIndex <= 0) {
      continue;
    }

    const key = trimmed.slice(0, separatorIndex).trim();
    let value = trimmed.slice(separatorIndex + 1).trim();

    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }

    values[key] = value;
  }

  return values;
}

function escapeForTs(value) {
  return String(value)
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'");
}

const candidateEnvFiles = [
  path.join(workspaceRoot, '.env'),
  path.join(workspaceRoot, 'backend', '.env'),
  path.join(projectRoot, '.env')
];

const envFilePath = candidateEnvFiles.find((filePath) => fs.existsSync(filePath));
const envValues = envFilePath ? parseEnvFile(envFilePath) : {};

const googleClientId = process.env.GOOGLE_CLIENT_ID || envValues.GOOGLE_CLIENT_ID || 'YOUR_GOOGLE_CLIENT_ID';
const googlePlacesApiKey = process.env.GOOGLE_PLACES_API_KEY || envValues.GOOGLE_PLACES_API_KEY || 'YOUR_GOOGLE_PLACES_API_KEY';

const fileContents = `export const GENERATED_APP_ENV = {\n  GOOGLE_CLIENT_ID: '${escapeForTs(googleClientId)}',\n  GOOGLE_PLACES_API_KEY: '${escapeForTs(googlePlacesApiKey)}'\n} as const;\n`;

fs.writeFileSync(outputFilePath, fileContents, 'utf8');
const envSourceLabel = envFilePath ? path.relative(workspaceRoot, envFilePath) : 'process env defaults';
console.log(`Synced frontend env config from ${envSourceLabel} to ${path.relative(projectRoot, outputFilePath)}`);