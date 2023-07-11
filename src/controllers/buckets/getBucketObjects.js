import { minioClient } from "../../helpers/MinioClient";

export default (req, res, next) => {
  var stream = minioClient.listObjectsV2(req.params.bucketName, "", true, "");
  let data = [];

  stream.on("data", (obj) => {
    data.push(obj);
  });

  stream.on("end", () => {
    res.json(data);
  });

  stream.on("error", (err) => {
    next(err);
  });
};
