const express = require('express');
const user = require('../../models/user');
const service = require('../../models/service');
const appliedService = require('../../models/appliedService');
const services = require('./e-services/services');
const { ObjectId } = require('bson');
const { forEach } = require('lodash');


var router = express.Router();

router.use(services);

//user applying for the new service
router.post('/user/services/apply',(req,res)=>{
    const newServiceRequest = new appliedService(req.body);
    appliedService.find({ user : newServiceRequest.user })
    .then(doc =>{
        if(doc.length ==0){
            newServiceRequest.save()
            .then( result =>{
                res.send("Applied successfully");
            })
            .catch(err =>{
                res.send(err);
            });
        }
        else{
            doc.forEach( item => {
                if(item.service == newServiceRequest.service)
                {
                    res.send("Service already applied");
                }
                else{
                    newServiceRequest.save()
                    .then( result =>{
                        res.send("Applied successfully");
                    })
                    .catch(err =>{
                        res.send(err);
                    });
                }
            });
        }
    })
    .catch(err=>{
        res.send(err);
    });
});
module.exports = router;