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

module.exports = router;
