const express = require("express");
const user = require("../../../models/home/user");
const service = require("../../../models/service");
const serviceCategory = require("../../../models/e-Services/serviceCategory");
const services = require("../../../models/e-Services/services");
var router = express.Router();

router.use(express.json());

//getting subcategory by main cat id data from database
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

// getting services under perticular sub category from database
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

// getting service required documents from database
router.get("/user/services/view/apply/:serviceId", (req, res) => {
  services
    .findOne({ _id: req.params.serviceId, status: true })
    .then((doc) => {
      res.send(doc);
    })
    .catch((doc) => {
      res.send("Nil");
    });
});

module.exports = router;
