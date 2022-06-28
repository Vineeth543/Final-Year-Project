// Import libraries
import AWS from "aws-sdk";

// AWS_ACCESS_KEY_ID=AKIAQKNSN2M4YUTCHY6P
// AWS_SECRET_ACCESS_KEY=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

// AWS S3 bucket config
const s3Bucket = new AWS.S3({
  accessKeyId: "AKIAQKNSN2M4YUTCHY6P",
  secretAccessKey: "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",
  region: "ap-south-1",
});

export const s3Upload = (options) => {
  return new Promise((resolve, reject) =>
    s3Bucket.upload(options, (error, data) => {
      if (error) return reject(error);
      return resolve(data);
    })
  );
};
