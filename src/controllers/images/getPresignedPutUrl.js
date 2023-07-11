import { minioClient } from "../../helpers/MinioClient";
import { BUCKET_NAME } from "./constants";
import { v4 as uuidv4 } from "uuid";
const path = require("path");

export const getPresignedPutUrl = async (req, res, next) => {
  const { name } = req.query;
  try {
    if (!name) {
      throw new Error("File name cannot be empty");
    }

    const suffix = uuidv4();
    const ext = path.extname(name);
    const fileName = path.basename(name, ext) + "-" + suffix + ext;

    const presignedUrl = await minioClient.presignedPutObject(
      BUCKET_NAME, // req.query.bucketName,
      fileName,
      1800 // expire after 30 minutes
    );

    res.json({ data: presignedUrl });
  } catch (error) {
    next(error);
  }
};
