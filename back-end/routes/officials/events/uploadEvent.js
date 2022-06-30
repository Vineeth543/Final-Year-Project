const express = require("express");
const events = require("../../../models/Events/event");

const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");

var router = express.Router();
router.use(express.json());

const s3 = new aws.S3({
  accessKeyId: "AKIAQKNSN2M4YUTCHY6P",
  secretAccessKey: "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",
  region: "ap-south-1",
});
const storage = multer.memoryStorage();
const upload = multer({ storage });

/*************************Routes************************* */

router.post(
  "/admin/events/uploadEvent/aws",
  upload.single("eventPoster"),
  (req, res) => {
    const params = {
      Bucket: "zomato-clone-vineeth",
      Key: req.file.originalname + "-" + Date.now(),
      Body: req.file.buffer,
      ACL: "public-read",
      ContentType: req.file.mimetype,
    };
    s3.upload(params, (error, data) => {
      if (error) {
        res.status(500).send({ err: error });
        return;
      } else {
        const posterLink = data.Location;
        const newEvent = new events({
          name: req.body.name,
          eventType: req.body.eventType,
          date: req.body.date,
          poster: posterLink,
          description: req.body.description,
          place: req.body.place,
        });
        newEvent
          .save()
          .then((result) => {
            res.send("Event created successfully.");
          })
          .catch((err) => {
            res.send("Event creation failed.");
          });
      }
    });
  }
);

router.post("/admin/events/uploadEvent", (req, res) => {
  const newEvent = new events({
    name: req.body.name,
    eventType: req.body.eventType,
    date: req.body.date,
    link: req.body.link,
    place: req.body.place,
    description: req.body.description,
  });
  newEvent
    .save()
    .then((doc) => {
      res.send("Event created successfully");
    })
    .catch((err) => {
      res.send("Event creation failed");
    });
});

router.get("/admin/events/viewEvent/:eventType", (req, res) => {
  events
    .find({ eventType: req.params.eventType })
    .then((doc) => {
      res.send(doc);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
