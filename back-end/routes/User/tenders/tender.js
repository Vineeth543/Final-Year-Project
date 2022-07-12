const express = require("express");
const appliedTender = require("../../../models/tenders/appliedTenders");
var router = express.Router();

router.use(express.json());

//applying for tender
router.post("/user/tenders/apply", (req, res) => {
  const newAppliedTender = new appliedTender({
    tender: req.body.tender,
    tendererName: req.body.tendererName,
    contactPerson: req.body.contactPerson,
    phone: req.body.phone,
    email: req.body.email,
    fax: req.body.fax,
    address: req.body.address,
    bidAmount: req.body.bidAmount,
  });
  newAppliedTender
    .save()
    .then((doc) => {
      res.send("Applied successfully");
    })
    .catch((res) => {
      res.send("Not able to apply");
    });
});

//getting users list who applied for particular tender
router.get("/user/tenders/apply/view/:id", (req, res) => {
  appliedTender
    .find({ tender: req.params.id })
    .sort("bidAmount")
    .then((doc) => {
      res.send(doc);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
