require("dotenv").config();
const S3 = require("aws-sdk/clients/s3");

const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey,
});

// uploads a file to s3
function uploadFile(file) {
  const uploadParams = {
    Bucket: bucketName,
    Body: file.buffer,
    Key: Date.now() + "-" + file.originalname,
    ContentType: file.mimetype,
  };
  return s3.upload(uploadParams).promise();
}

function uploadCertificateFromDisk(file) {
  const uploadParams = {
    Bucket: bucketName,
    Body: file,
    Key: Date.now() + "-certificate.pdf",
    ContentType: file.mimetype,
  };
  return s3.upload(uploadParams).promise();
}

exports.uploadCertificateFromDisk = uploadCertificateFromDisk;

exports.uploadFile = uploadFile;
