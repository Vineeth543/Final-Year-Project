const express = require("express");
const user = require("../../models/user");
var router = express.Router();

router.use(express.json());

const eServices = require("../../models/e-Services/eServices");
const serviceCategory = require("../../models/e-Services/serviceCategory");
const services = require("../../models/e-Services/services");

router.post("/index/eServices", (req, res) => {
  const eService = new eServices(req.body);
  eService
    .save()
    .then((re) => {
      res.send(re);
    })
    .catch((err) => {
      res.send(err);
    });
});
router.post("/index/eServices/serviceCategory", (req, res) => {
  const newserviceCategory = new serviceCategory(req.body);
  newserviceCategory
    .save()
    .then((re) => {
      res.send(re);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/index", (req, res) => {
  user
    .find()
    .then((doc) => {
      res.send(doc);
    })
    .catch((err) => {
      res.send(err);
    });
});

//SignIn
router.post("/user/login", (req, res) => {
  user
    .findOne({ phone: req.body.phone })
    .then((doc) => {
      if (doc == null) {
        res.send({ msg: "No user exists", status: "error" });
      } else {
        if (req.body.password == doc.password) {
          res.send({ msg: "Login Successful", status: "success" });
        } else {
          res.send({ msg: "Invalid Credentials", status: "error" });
        }
      }
    })
    .catch((err) => {
      console.log(req);
      res.send(err);
      console.log("Error");
    });
});

//Signup
router.post("/user/signup", (req, res) => {
  const newUser = new user(req.body);
  newUser
    .save()
    .then((result) => {
      res.send("User created Successfully");
    })
    .catch((err) => {
      res.send("User already exists");
    });
});

module.exports = router;
