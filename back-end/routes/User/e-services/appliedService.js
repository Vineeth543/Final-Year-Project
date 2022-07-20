const express = require("express");
const appliedService = require("../../../models/appliedService");
const services = require("../../../models/e-Services/services");

var router = express.Router();

router.use(express.json());

router.post("/user/services/:id", (req, res) => {
  const appliedServiceData = new appliedService({
    user: req.body.user,
    service: req.body.service,
  });
  appliedService
    .find({ eService: req.params.id })
    .then((doc) => {
      res.send(doc);
    })
    .catch((doc) => {
      res.send("Nil");
    });
});

module.exports = router;
