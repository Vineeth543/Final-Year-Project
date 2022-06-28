// Import libraries
const express = require("express");
const multer = require("multer");

// Import Database Model
import { ImageModel } from "../../../models/Images/image";

// Utilities
import { s3Upload } from "../../../models/Images/s3";

const router = express.Router();

// Multer config
const storage = multer.memoryStorage();
const upload = multer({ storage });

/*
Route    /
Des      Upload given image to S3 bucket and saves file link to mongoDB
Params   _id
Access   Public
Method   POST
*/

router.post("/image", upload.single("file"), (req, res) => {
  try {
    const file = req.file;
    if (!file) return res.status(404).json({ error: "Image Not Found." });
    //   S3 Bucket options
    const bucketOptions = {
      Bucket: "zomato-clone-vineeth",
      Key: file.originalname,
      Body: file.buffer,
      ContentType: file.mimetype,
      ACL: "public-read", // Access Control List
    };

    const uploadImage = s3Upload(bucketOptions);

    if (!uploadImage)
      return res.status(404).json({ error: "Image upload failed." });

    return res.status(200).json({ uploadImage });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
