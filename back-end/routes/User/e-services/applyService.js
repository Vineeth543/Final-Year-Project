// const express = require("express");
// const aws = require("aws-sdk");
// const multer = require("multer");
// const multerS3 = require("multer-s3");

// var router = express.Router();
// router.use(express.json());

// const s3 = new aws.S3({
//   accessKeyId: "AKIAQKNSN2M4YUTCHY6P",
//   secretAccessKey: "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",
//   region: "ap-south-1",
// });
// const storage = multer.memoryStorage();
// const upload = multer({ storage });

// router.post("/user/services/app", upload.single("userDocument"), (req, res) => {
//   const params = {
//     Bucket: "zomato-clone-vineeth",
//     Key: req.file.originalname + "-" + Date.now(),
//     Body: req.file.buffer,
//     ACL: "public-read",
//     ContentType: req.file.mimetype,
//   };
//   s3.upload(params, (error, data) => {
//     if (error) {
//       res.status(500).send({ err: error });
//     }
//     res.status(200).send({ data: data });
//   });
// });
// module.exports = router;

const express = require("express");
const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const appliedService = require("../../../models/appliedService");

var router = express.Router();
router.use(express.json());

const s3 = new aws.S3({
  accessKeyId: "AKIAQKNSN2M4YUTCHY6P",
  secretAccessKey: "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",
  region: "ap-south-1",
});
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post(
  "/user/services/apply/:serviceId/:userId",
  upload.array("userDocument", 100),
  (req, res) => {
    const detail = [];
    req.files.map((file, index) => {
      const params = {
        Bucket: "zomato-clone-vineeth",
        Key: file.originalname + "-" + Date.now(),
        Body: file.buffer,
        ACL: "public-read",
        ContentType: file.mimetype,
      };
      s3.upload(params, (error, data) => {
        if (error) {
          res.status(500).send("Error in uploading.");
          return;
        } else {
          detail.push(data.Location);
          if (index === req.files.length - 1) {
            const newAppliedService = new appliedService({
              user: req.params.userId,
              service: req.params.serviceId,
              secretary: true,
              userDocuments: detail,
            });
            newAppliedService.save();
            res.status(200).send("Service applied successfully.");
          }
        }
      });
    });
  }
);
module.exports = router;
