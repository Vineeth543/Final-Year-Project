const express = require('express');
const event = require('../../models/event');

var router = express.Router();

//get the events from the databse
router.get('/user/events',(req,res)=>{
    event.find()
    .then(doc =>{
        res.send(doc);
    })
    .catch(err =>{
        res.send("failed to fetch events");
    });
});

//upload the events to the database
router.post('/user/events',(req,res)=>{
    const newEvent = new event(req.body);
    newEvent.save()
    .then(doc =>{
        res.send(doc);
    })
    .catch(err =>{
        res.send("Not able to upload the new event");
    });
});
module.exports = router;