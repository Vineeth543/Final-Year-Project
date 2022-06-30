const express = require("express");
const event = require("../../../models/Events/event");
var router = express.Router();

router.use(express.json());

//updating the eventType
router.post("/admin/events/viewEvents/updateEvent", (req, res) => {
  event
    .updateOne({ _id: req.body.id }, { eventType: req.body.eventType })
    .then((doc) => {
      res.send("Event type updated successfully.");
    })
    .catch((doc) => {
      res.send("Event type not updated.");
    });
});

module.exports = router;
