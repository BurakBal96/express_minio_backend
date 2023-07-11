import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import config from "./config";
import errorHandler from "./middleware/errorHandler";
import fourOhFour from "./middleware/fourOhFour";
import bucketsRoute from "./routes/bucketsRoute";
import imagesRoute from "./routes/imagesRoute";
import bucketPoliciesRoute from "./routes/bucketPoliciesRoute";

var bodyParser = require("body-parser");

const app = express();

// Apply most middleware first
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  cors({
    origin: config.clientOrigins[config.nodeEnv],
  })
);
app.use(helmet());
app.use(morgan("tiny"));

// Apply routes before error handling
app.get("/", (req, res) => { res.json({ message: "Hello World!" }) });
app.use("/buckets", bucketsRoute);
app.use("/images", imagesRoute);
app.use("/bucketPolicies", bucketPoliciesRoute);

// Apply error handling last
app.use(fourOhFour);
app.use(errorHandler);

export default app;
