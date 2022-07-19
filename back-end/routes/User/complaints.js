const express = require("express");

const complaint = require("../../models/complaint");
const { uploadFile } = require("../../middlewares/s3");

var router = express.Router();
router.use(express.json());

const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage });

//uploading the new complaint
router.post(
  "/user/complaint/new",
  upload.single("complaintFile"),
  async (req, res) => {
    const data = await uploadFile(req.file);
    const fileLink = data.Location;
    const newComplaint = new complaint({
      user: req.body.userId,
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      description: req.body.description,
      priority: req.body.priority,
      image: fileLink,
    });
    newComplaint
      .save()
      .then((result) => {
        res.send("Complaint raised successfully.");
      })
      .catch((err) => {
        res.send("Complaint creation failed.");
      });
  }
);

module.exports = router;
