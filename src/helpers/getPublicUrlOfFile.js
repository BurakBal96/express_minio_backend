export const getPublicUrlOfFile = (bucketName, fileName) =>
  `https://${process.env["endpoint"]}/${bucketName}/${fileName}`;
