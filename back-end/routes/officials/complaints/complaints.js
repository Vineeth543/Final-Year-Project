const express = require("express");
const complaint = require("../../../models/complaint");
var router = express.Router();

// retrieve the comlaints from the database
router.get("/official/complaints", (req, res) => {
  complaint
    .find()
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

module.exports = router;
