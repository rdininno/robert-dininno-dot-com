require("dotenv").config();
const cors = require("cors");
const express = require("express");
const path = require("path");
const AWS = require("aws-sdk");
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: "ca-central-1",
});

const s3 = new AWS.S3();

app.use(express.json());

app.get("/generate-presigned-url", (req, res) => {
  const { fileName } = req.query;

  const url = s3.getSignedUrl("getObject", {
    Bucket: process.env.AWS_S3_BUCKET,
    Key: fileName,
    Expires: 60 * 8,
  });

  res.send({ url });
});

app.use("/", express.static(path.join(__dirname, "../build")));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
