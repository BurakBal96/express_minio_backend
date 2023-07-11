import { minioClient } from "../../helpers/MinioClient";

export default async (req, res, next) => {
  try {
    const { bucketName } = req.params;
    if (!bucketName) {
      throw new Error("Bucket name cannot be empty");
    }

    if (!await minioClient.bucketExists(bucketName)) {
      throw new Error("Bucket does not exist");
    }

    await minioClient.removeBucket(bucketName);

    res.json({ message: "Bucket removed successfully" });
  } catch (err) {
    next(err);
  }
};
