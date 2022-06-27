const mongoose  = require('mongoose');
const schema  = mongoose.Schema;

const eventSchema = new schema({
    name:{
        type :String,
        required:true
    },
    description:{
        type : String,
        required : true,
    },
    place: { 
        type : String,
        required: true
    }
},{timestamps : true});

const event = mongoose.model('events',eventSchema);
module.exports = event;