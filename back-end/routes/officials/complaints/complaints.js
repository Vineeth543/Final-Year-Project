const express = require("express");
const complaint = require("../../../models/complaint");
var router = express.Router();

// retrieve the comlaints from the database
router.get("/official/complaints/:status", (req, res) => {
  complaint
    .find({ status: req.params.status })
    .then((doc) => {
      res.send(doc);
    })
    .catch((err) => {
      res.send(err);
    });
});

// Sending responses to the user
router.post("/official/complaints/response", (req, res) => {
  complaint
    .findOne({ _id: req.body.id })
    .then((doc) => {
      doc.remarks = req.body.response;
      doc
        .save()
        .then((result) => {
          res.send("Response sent successfully.");
        })
        .catch((err) => {
          res.send("Response sending failed.");
        });
    })
    .catch((err) => {
      res.send("Response sending failed.");
    });
});

// update the comlaints status
router.post("/official/complaints/update", (req, res) => {
  complaint
    .findOne({ _id: req.body.id })
    .then((doc) => {
      doc.status = req.body.status;
      doc
        .save()
        .then((result) => {
          res.send("Status updated successfully");
        })
        .catch((err) => {
          res.send("Failed to update the status");
        });
    })
    .catch((err) => {
      res.send("Failed to update the status outside.");
    });
});

module.exports = router;
