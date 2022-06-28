const express = require('express');
const user = require('../../models/home/user');
const service = require('../../models/service');
const appliedService = require('../../models/appliedService');
var router = express.Router();

router.use(express.json());

//posting new service to the database
router.post('/official/newService',(req,res) =>{
    const data = new service(req.body);
    data.save()
    .then(doc =>{
        res.send(doc);
    })
    .catch(err=>{
        res.send(err);
    });
});

//setting the status of the applied service
router.post('/officials/setStatus',(req,res)=>{
    appliedService.findOne({
        service:req.body.service,
        user: req.body.user,
    })
    .then(doc=>{
        doc.status = req.body.status;
        doc.save()
        .then(doc=>{
            res.send("Successfull");
        })
        .catch(err=>{
            res.send("failed");
        });
    })
    .catch(err=>{
        res.send("No applied service exist");
    });
});

module.exports = router;