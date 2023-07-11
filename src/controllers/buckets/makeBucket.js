import { minioClient } from "../../helpers/MinioClient";

export default async (req, res, next) => {
  try {
    const { bucketName, publicAccess = false } = req.body;
    await makeBucket(bucketName, publicAccess);

    res.json({ message: "Bucket created successfully" });
  } catch (err) {
    next(err);
  }
};

export const makeBucket = async (
  bucketName,
  publicAccess,
  bypassExistControl = false
) => {
  if (!bucketName) {
    throw new Error("Bucket name cannot be empty");
  }

  if (!bypassExistControl && (await minioClient.bucketExists(bucketName))) {
    throw new Error("Bucket already exists");
  }

  await minioClient.makeBucket(bucketName, "");
  if (publicAccess) await setBucketPolicy(bucketName);
};

const setBucketPolicy = (bucketName) => {
  const policy = JSON.stringify({
    Version: "2012-10-17",
    Statement: [
      {
        Action: ["s3:GetObject"],
        Effect: "Allow",
        Principal: {
          AWS: ["*"],
        },
        Resource: [`arn:aws:s3:::${bucketName}/*`],
        Sid: "",
      },
    ],
  });

  return minioClient.setBucketPolicy(bucketName, policy);
};
