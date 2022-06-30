const express = require("express");
const event = require("../../../models/Events/event");
var router = express.Router();

router.use(express.json());

//deleting the event from database
router.post("/admin/events/deleteEvents", (req, res) => {
  event
    .deleteOne({ _id: req.body.id })
    .then((doc) => {
      res.send("Event deleted successfully");
    })
    .catch((doc) => {
      res.send("Failed to delete event");
    });
});

module.exports = router;
