const express = require("express");
const user = require("../../../models/home/user");
const service = require("../../../models/e-Services/services");
const appliedService = require("../../../models/appliedService");
var router = express.Router();

router.use(express.json());

/************************Secretary*************************************** */

//getting the applied service list
router.get("/secretary/dashboard/appliedServices", (req, res) => {
  appliedService
    .find({ status: "applied", secretary: true })
    .then((doc) => {
      user.find().then((result) => {
        service.find().then((out) => {
          res.send({ users: result, services: out, doc: doc });
        });
      });

      //res.send(doc);
    })
    .catch((doc) => {
      res.send("Nil");
    });
});

//get one applied service details
router.get("/secretary/dashboard/appliedServices/:id", (req, res) => {
  appliedService
    .findOne({ _id: req.params.id })
    .then((doc) => {
      res.send(doc);
    })
    .catch((doc) => {
      res.send("Nil");
    });
});

//update applied service status
router.post("/secretary/dashboard/appliedServices/status", (req, res) => {
  appliedService
    .findOne({ _id: req.body.id })
    .then((doc) => {
      if (req.body.status === "accepted") {
        doc.status = req.body.status;
        doc.secretary = false;
        doc.pdo = true;
      } else if (req.body.status == "rejected") {
        doc.status = req.body.status;
      }
      doc
        .save()
        .then((result) => {
          res.send("Status upadated successfully");
        })
        .catch((err) => {
          res.send("Failed to update the status");
        });
    })
    .catch((doc) => {
      res.send("Nil");
    });
});

/************************************PDO**************************** */
module.exports = router;
