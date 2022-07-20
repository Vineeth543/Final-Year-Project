const express = require("express");
const serviceCategory = require("../../../models/e-Services/serviceCategory");
const services = require("../../../models/e-Services/services");
const appliedService = require("../../../models/appliedService");
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

//user getting the applied service details
router.get("/user/dashboard/services/:id", (req, res) => {
  appliedService.find({ user: req.params.id }).then(async (doc) => {
    const serviceList = [];
    for (let i = 0; i < doc.length; i++) {
      let element = doc[i];
      await services.findOne({ _id: element.service }).then((result) => {
        serviceList.push({ data: element, service: result });
      });
    }
    res.send(serviceList);
  });
});

module.exports = router;
