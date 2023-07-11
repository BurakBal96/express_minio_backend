import express from "express";
import getBuckets from "../controllers/buckets/getBuckets";
import getBucketObjects from "../controllers/buckets/getBucketObjects";
import makeBucket from "../controllers/buckets/makeBucket";
import removeBucket from "../controllers/buckets/removeBucket";
import emptyBucket from "../controllers/buckets/emptyBucket";

const root = express.Router();

root.get("/", getBuckets);
root.post("/", makeBucket);
root.get("/:bucketName", getBucketObjects);
root.post("/:bucketName", emptyBucket)
root.delete("/:bucketName", removeBucket);

export default root;
