import { minioClient } from "../../helpers/MinioClient";

export default async (req, res, next) => {
  try {
    await minioClient.setBucketPolicy(
      req.params.bucketName,
      JSON.stringify(req.body)
    );

    res.json({ message: "success" });
  } catch (error) {
    next(error);
  }
};
