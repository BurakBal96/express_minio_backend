import { minioClient } from "../../helpers/MinioClient";
import { getPublicUrlOfFile } from "../../helpers/getPublicUrlOfFile";
import { BUCKET_NAME } from "./constants";

export const getImageUrl = async (req, res, next) => {
  try {
    const stats = await minioClient.statObject(
      BUCKET_NAME,
      req.params.fileName
    );

    if (stats.size) {
      res.json({
        data: { ...stats, url: getPublicUrlOfFile(BUCKET_NAME, req.params.fileName) },
      });
    } else {
      res.status(404).json({ message: "Image not found" });
    }
  } catch (error) {
    next(new Error("Image not found"));
  }
};
