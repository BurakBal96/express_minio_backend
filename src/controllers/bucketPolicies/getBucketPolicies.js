import { minioClient } from "../../helpers/MinioClient";

export default async (req, res, next) => {
  try {
    const policy = await minioClient.getBucketPolicy(req.params.bucketName);
    
    res.json(JSON.parse(policy));
  }catch(err) {
    next(err);
  }
};
