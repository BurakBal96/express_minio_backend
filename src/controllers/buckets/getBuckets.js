import { minioClient } from "../../helpers/MinioClient";

export default async (req, res, next) => {
  try {
    const buckets = await minioClient.listBuckets();
    res.json({ data: buckets });
  } catch (err) {
    next(err);
  }
};
