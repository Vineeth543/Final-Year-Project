const mongoose  = require('mongoose');
const { boolean } = require('webidl-conversions');
const schema  = mongoose.Schema;

const eServiceSchema = new schema({
    name:{
        type :String,
        required:true
    },
    status:{
        type: Boolean,
        default : true
    }
},{timestamps : true});

const eService = mongoose.model('e-services',eServiceSchema);
module.exports = eService;