const express = require("express");
const userDetails = require("../../models/userProfileDetails");
const users = require("../../models/home/user");
var router = express.Router();

router.use(express.json());

const fs = require("fs");

const path = require("path");

var { uploadUserDetails } = require("../../middlewares/upload");

router.get("/user/profile", (req, res) => {
  userDetails
    .find()
    .then((doc) => {
      res.send(doc);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.post("/user/profile", uploadUserDetails.array("avatar"), (req, res) => {
  var docList = [];
  userDetails.findOne({ userId: req.body.userId }).then((doc) => {
    if (doc != null && doc.documents.length > 0) docList = doc.documents;
    req.files.forEach((element) => {
      docList.push({
        file: fs.readFileSync(path.join("./UserDocuments/" + element.filename)),
        documentName: element.filename,
      });
    });
    if (doc != null) {
      doc.documents = docList;
      doc
        .save()
        .then((doc1) => {
          res.send(doc1);
        })
        .catch((err) => {
          res.send(err);
        });
    } else {
      const updateProfile = new userDetails({
        userId: req.body.userId,
        documents: docList,
      });
      updateProfile
        .save()
        .then((doc1) => {
          res.send(doc1);
        })
        .catch((err1) => {
          res.send(err1);
        });
    }
  });
});

router.post("/user/updateProfile", (req, res) => {
  userDetails.findOne({ userId: req.body.userId }).then((doc) => {
    if (doc != null) {
      doc.fatherName = req.body.fatherName;
      doc.motherName = req.body.motherName;
      doc.address = req.body.address;
      doc.village = req.body.village;
      doc.taluk = req.body.taluk;
      doc.district = req.body.district;
      doc
        .save()
        .then((doc1) => {
          res.send("Profile updated successfully");
        })
        .catch((err) => {
          res.send("Failed to update the profile");
        });
    } else {
      const updateProfile = new userDetails({
        userId: req.body.userId,
        fatherName: req.body.fatherName,
        motherName: req.body.motherName,
        address: req.body.address,
        village: req.body.village,
        taluk: req.body.taluk,
        district: req.body.district,
      });
      updateProfile
        .save()
        .then((doc1) => {
          res.send("Profile updated successfully");
        })
        .catch((err1) => {
          res.send("Not able to update the profile details");
        });
    }
  });
});

router.post("/user/details", (req, res) => {
  users.findOne({ _id: req.body.userId }).then((doc) => {
    if (doc != null) {
      res.send(doc);
    } else {
      res.send("No data found");
    }
  });
});

module.exports = router;
