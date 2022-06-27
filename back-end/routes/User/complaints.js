const express = require('express');
const complaint = require('../../models/complaint');

const path = require('path');

var router = express.Router();
var {uploadComplaint} = require('../../middlewares/upload');
const { async } = require('jshint/src/prod-params');

const fs = require("fs");
//router.use(uploadComplaint.array()); 

// retrieve the comlaints from the database
router.get("/user/complaints",(req,res)=>{
    complaint.find()
    .then(doc =>{
        res.send(doc[1].name);
    })
    .catch(err=>{
        res.send(err);
    });
});

//upload the new complaints
router.post("/user/complaints",uploadComplaint.array('avatar',5),(req,res)=>{
   
    const newComplaint = new complaint({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        description:req.body.desc,
        file:{
            // data : new Buffer(encode_img,'base64')
            data : fs.readFileSync(path.join('./complaintFiles/'+req.files[0].filename))
        }
    });
    newComplaint.save()
    .then(doc=>{
        res.send(doc);
    })
    .catch(err =>{
        res.send(err);
    });
});


module.exports = router;