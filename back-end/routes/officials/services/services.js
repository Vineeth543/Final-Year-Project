const express = require("express");
const user = require("../../../models/home/user");
const eServices = require("../../../models/e-Services/eServices");
const serviceCategory = require("../../../models/e-Services/serviceCategory");
const services = require("../../../models/e-Services/services");
var router = express.Router();

router.use(express.json());

//getting services data from database
router.get("/admin/services/add-service/:id", (req, res) => {
  serviceCategory
    .find({ eService: req.params.id })
    .then((doc) => {
      res.send(doc);
    })
    .catch((doc) => {
      res.send("Nil");
    });
});

router.post("/admin/services/add-service", (req, res) => {
  const newService = services({
    serviceCategory: req.body.serviceCategory,
    name: req.body.name,
    overview: req.body.overview,
    documents: req.body.documents,
  });
  newService
    .save()
    .then((doc) => {
      res.send("Service added successfully");
    })
    .catch((err) => {
      res.send("Not able to add the service");
    });
});

router.get("/admin/services/view/:eServiceId", (req, res) => {
  serviceCategory
    .find({ eService: req.params.eServiceId })
    .then((doc) => {
      res.send(doc);
    })
    .catch((doc) => {
      res.send("Nil");
    });
});

router.get("/admin/services/view/:eServiceId/:categoryId", (req, res) => {
  services
    .find({ serviceCategory: req.params.categoryId })
    .then((doc) => {
      res.send(doc);
    })
    .catch((doc) => {
      res.send("Nil");
    });
});

router.put("/admin/services/view/delete", (req, res) => {
  services
    .deleteOne({ _id: req.body.serviceId })
    .then((doc) => {
      res.send("Service deleted successfully.");
    })
    .catch((doc) => {
      res.send("Not able to delete the service.");
    });
});

module.exports = router;
