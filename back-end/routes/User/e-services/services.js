const express = require("express");
const user = require("../../../models/home/user");
const service = require("../../../models/service");
const serviceCategory = require("../../../models/e-Services/serviceCategory");
const services = require("../../../models/e-Services/services");
var router = express.Router();

router.use(express.json());

//getting services data from database
router.get("/user/services/:id", (req, res) => {
  serviceCategory
    .find({ eService: req.params.id })
    .then((doc) => {
      res.send(doc);
    })
    .catch((doc) => {
      res.send("Nil");
    });
});

router.get("/user/services/view/:id", (req, res) => {
  services
    .find({ serviceCategory: req.params.id, status: true })
    .then((doc) => {
      res.send(doc);
    })
    .catch((doc) => {
      res.send("Nil");
    });
});

module.exports = router;
