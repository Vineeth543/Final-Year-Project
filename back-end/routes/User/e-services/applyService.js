const express = require("express");
const multer = require("multer");
const appliedService = require("../../../models/appliedService");
const { uploadFile } = require("../../../middlewares/s3");

var router = express.Router();
router.use(express.json());

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post(
  "/user/services/apply/:serviceId/:userId",
  upload.array("userDocument", 20),
  async (req, res) => {
    const documentLinks = [];
    for (var i = 0; i < req.files.length; i++) {
      const data = await uploadFile(req.files[i]);
      documentLinks.push(data.Location);
    }
    const newAppliedService = new appliedService({
      user: req.params.userId,
      service: req.params.serviceId,
      secretary: true,
      userDocuments: documentLinks,
    });
    newAppliedService
      .save()
      .then((result) => {
        res.send("Service applied successfully.");
      })
      .catch((err) => {
        res.send("Something went wrong.");
      });
  }
);

module.exports = router;
