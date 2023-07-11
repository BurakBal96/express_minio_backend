const Minio = require("minio");

const setting = {
  endPoint: process.env['endpoint'],
  useSSL: true,
  accessKey: process.env['access_key'],
  secretKey: process.env['secret_key'],
};

export const minioClient = new Minio.Client(setting);

export const makeBucket = (bucketName) => {
  minioClient.makeBucket(bucketName);
};
