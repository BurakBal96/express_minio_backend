import { minioClient } from "../../helpers/MinioClient";

export default async (req, res, next) => {
  const { bucketName } = req.params;
  var stream = minioClient.listObjectsV2(bucketName, "", true, "");
  let data = [];

  stream.on("data", (obj) => {
    data.push(obj);
  });

  stream.on("end", async () => {
    try {
      await removeEntities(bucketName, data);
      res.json({ message: "Bucket emptied successfully" });
    } catch (err) {
      next(err);
    }
  });

  stream.on("error", (err) => {
    next(err);
  });
};

const removeEntities = async (bucketName, data) => {
  return minioClient.removeObjects(bucketName, data);
};
