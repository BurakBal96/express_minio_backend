import express from "express";
import getBucketPolicies from "../controllers/bucketPolicies/getBucketPolicies";
import setBucketPolicies from "../controllers/bucketPolicies/setBucketPolicies";

const root = express.Router();

root.get("/:bucketName", getBucketPolicies);
root.post("/:bucketName", setBucketPolicies);

export default root;
