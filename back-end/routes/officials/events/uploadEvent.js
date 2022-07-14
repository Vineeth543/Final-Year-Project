require("dotenv").config();
const express = require("express");

const events = require("../../../models/Events/event");
const { uploadFile } = require("../../../middlewares/s3");

var router = express.Router();
router.use(express.json());

const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage });

/*************************Routes************************* */

router.post(
  "/admin/events/uploadEvent/aws",
  upload.single("eventPoster"),
  async (req, res) => {
    const data = await uploadFile(req.file);
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
