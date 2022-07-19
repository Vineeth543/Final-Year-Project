const express = require("express");
const officials = require("../../models/home/officials");
const users = require("../../models/home/user");
var router = express.Router();

router.use(express.json());

//official signIn
router.post("/login", (req, res) => {
  officials
    .findOne({ phone: req.body.phone, role: req.body.role })
    .then((doc) => {
      if (doc == null) {
        res.send({
          msg: "No official exists with this credentials.",
          status: "failure",
        });
      } else {
        if (req.body.password == doc.password) {
          res.send({ msg: "Login successfull", status: "success" });
        } else {
          res.send({ msg: "Incorrect Password", status: "failue" });
        }
      }
    })
    .catch((err) => {
      res.send(err);
    });
});

//Signup
router.post("/signup", (req, res) => {
  const newOfficial = new officials(req.body);
  newOfficial
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send("official already exists");
    });
});

// retrieve the users data from the database for the officials
router.get("/official/users", (req, res) => {
  users
    .find()
    .then((doc) => {
      res.send(doc);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
