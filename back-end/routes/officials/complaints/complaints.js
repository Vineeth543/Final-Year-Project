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

module.exports = router;
