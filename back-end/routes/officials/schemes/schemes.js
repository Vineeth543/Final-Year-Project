const express = require("express");
const scheme = require("../../../models/schemes/scheme");
const schemeCategory = require("../../../models/schemes/schemeCategory");
var router = express.Router();

router.use(express.json());

//Get the schemes category
router.get("/official/schemes/category", (req, res) => {
  schemeCategory
    .find()
    .then((doc) => {
      res.send(doc);
    })
    .catch((err) => {
      res.send(err);
    });
});

//Get the schemes
router.get("/official/schemes/category/scheme/:id", (req, res) => {
  scheme
    .find({ category: req.params.id })
    .then((doc) => {
      res.send(doc);
    })
    .catch((err) => {
      res.send(err);
    });
});

//adding the new scheme
router.post("/official/schemes/add", (req, res) => {
  const newScheme = new scheme(req.body);
  newScheme
    .save()
    .then((doc) => {
      res.send("New scheme added successfully");
    })
    .catch((err) => {
      res.send("Failed to add the scheme");
    });
});

//getting the single schema category details
router.get("/official/schemes/category/:id", (req, res) => {
  schemeCategory
    .findOne({ _id: req.params.id })
    .then((doc) => {
      res.send(doc);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
