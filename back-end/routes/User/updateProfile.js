const express = require('express');
const user = require('../../models/home/user');
const userDetails = require('../../models/userProfileDetails');
var router = express.Router();

router.use(express.json());

const fs = require("fs");

const path = require('path');

var { uploadUserDetails } = require('../../middlewares/upload');

router.get('/user/profile',(req,res)=>{
    userDetails.find()
    .then(doc=>{
        res.send(doc);
    })
    .catch(err=>{
        res.send(err);
    });
});

router.post('/user/profile', uploadUserDetails.array('avatar'), (req, res) => {
    var docList = [];
    userDetails.findOne({ userId: req.body.userId })
        .then(doc => {
            if(doc!=null && doc.documents.length>0)
               docList = doc.documents;
            req.files.forEach(element => {
                docList.push({
                    file: fs.readFileSync(path.join('./UserDocuments/' + element.filename)),
                    documentName: element.filename
                });
            });
            if(doc != null)
            {
                doc.documents = docList;
                doc.save()
                .then(doc1 => {
                    res.send(doc1);
                })
                .catch(err => {
                    res.send(err);
                }); 
            }
            else{
                const updateProfile = new userDetails({
                    userId:req.body.userId,
                    documents:docList
                });
                updateProfile.save()
                .then(doc1=>{
                    res.send(doc1);
                })
                .catch(err1=>{
                    res.send(err1);
                });
            }
        });
    
});

module.exports = router;