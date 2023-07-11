import { minioClient } from "../../helpers/MinioClient";
import { BUCKET_NAME } from "./constants";
import { makeBucket } from "../buckets/makeBucket";

export default async (req, res, next) => {
  try {
    if (!(await minioClient.bucketExists(BUCKET_NAME))) {
      await makeBucket(BUCKET_NAME, true, true);
    }
    next();
  } catch (err) {
    next(err);
  }
};
