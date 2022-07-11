const express = require("express");
const tender = require("../../../models/Tenders/tender");
var router = express.Router();

router.use(express.json());

// Adding new tender to database
router.post("/official/tenders/create", (req, res) => {
  const newTender = new tender({
    title: req.body.title,
    description: req.body.description,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
  });
  newTender
    .save()
    .then((doc) => {
      res.send("Tender created successfully");
    })
    .catch((res) => {
      res.send("Not able to create the tender");
    });
});

//getting the tender list
router.get("/official/tenders/view", (req, res) => {
  tender
    .find()
    .then((doc) => {
      res.send(doc);
    })
    .catch((err) => {
      res.send(err);
    });
});

//getting the Individual tender information
router.get("/official/tenders/view/:id", (req, res) => {
  tender
    .findOne({ _id: req.params.id })
    .then((doc) => {
      res.send(doc);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
