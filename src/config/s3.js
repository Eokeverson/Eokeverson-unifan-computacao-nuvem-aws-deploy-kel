const { S3Client } = require('@aws-sdk/client-s3');

// Configura o AWS SDK v3 usando as tuas variáveis de ambiente.
const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  // As credenciais são carregadas do ficheiro .env para desenvolvimento local.
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

module.exports = s3Client;