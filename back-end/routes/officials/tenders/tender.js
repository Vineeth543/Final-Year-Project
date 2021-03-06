const express = require("express");
const tender = require("../../../models/Tenders/tender");
const appliedTender = require("../../../models/tenders/appliedTenders");
var router = express.Router();

router.use(express.json());

// Adding new tender to database
router.post("/official/tenders/create", (req, res) => {
  const newTender = new tender({
    title: req.body.title,
    description: req.body.description,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
  });
  newTender
    .save()
    .then((doc) => {
      res.send("Tender created successfully");
    })
    .catch((res) => {
      res.send("Not able to create the tender");
    });
});

//getting the tender list
router.get("/official/tenders/view", (req, res) => {
  tender
    .find()
    .then((doc) => {
      res.send(doc);
    })
    .catch((err) => {
      res.send(err);
    });
});

//getting the Individual tender information
router.get("/official/tenders/view/:id", (req, res) => {
  tender
    .findOne({ _id: req.params.id })
    .then((doc) => {
      res.send(doc);
    })
    .catch((err) => {
      res.send(err);
    });
});

//deleting the tender
router.get("/official/tenders/delete/:id", (req, res) => {
  appliedTender
    .deleteMany({ tender: req.params.id })
    .then((doc1) => {
      tender
        .deleteOne({ _id: req.params.id })
        .then((doc2) => {
          res.send("Tender deleted successfully");
        })
        .catch((err1) => {
          res.send("Not able to delete the tender");
        });
    })
    .catch((err2) => {
      res.send("Not able to delete the tender");
    });
});

//setting the status of applied tender
router.post("/user/tenders/approve", (req, res) => {
  appliedTender
    .find({ tender: req.body.tenderId, status: "applied" })
    .then((doc) => {
      doc.forEach(async (element, index) => {
        if (element._id != req.body.appliedTenderId) {
          doc[index].status = "rejected";
        } else {
          doc[index].status = "accepted";
        }
        await doc[index].save();
      });
      tender.findOne({ _id: req.body.tenderId }).then((doc) => {
        doc.status = "inactive";
        doc.save();
      });
      res.send("Status updated successfully");
    })
    .catch((err) => {
      res.send("Failed to update the status");
    });
});

//user getting the applied tender details
router.get("/user/dashboard/tenders/:id", (req, res) => {
  appliedTender.find({ user: req.params.id }).then(async (doc) => {
    const tenderList = [];
    for (let i = 0; i < doc.length; i++) {
      let element = doc[i];
      await tender.findOne({ _id: element.tender }).then((result) => {
        tenderList.push({ data: element, tender: result });
      });
    }
    res.send(tenderList);
  });
});

module.exports = router;
