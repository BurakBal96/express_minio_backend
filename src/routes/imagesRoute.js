import express from "express";
import { getPresignedPutUrl } from "../controllers/images/getPresignedPutUrl";
import { getImageUrl } from "../controllers/images/getImageUrl";
import checkBucketExist from "../controllers/images/checkBucketExist";

const root = express.Router();

root.get("/getUploadUrl", checkBucketExist, getPresignedPutUrl);
root.get("/:fileName", checkBucketExist, getImageUrl);

export default root;
