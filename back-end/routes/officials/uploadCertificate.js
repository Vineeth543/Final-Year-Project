const express = require("express");
const appliedService = require("../../models/appliedService");
var router = express.Router();

router.use(express.json());

const { uploadCertificateFromDisk } = require("../../middlewares/s3");

const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage });

const uploadServiceCertificate = async (file, id) => {
  const data = await uploadCertificateFromDisk(file);
  const certificateLink = data.Location;
  appliedService
    .findOne({ user: id })
    .then((doc) => {
      doc.certificate = certificateLink;
      doc
        .save()
        .then((result) => {
          console.log("Certificate uploaded successfully");
        })
        .catch((err) => {
          console.log("Certificate upload failed");
        });
    })
    .catch((err) => {
      console.log("Certificate upload failed");
    });
};

exports.uploadServiceCertificate = uploadServiceCertificate;
