const mongoose  = require('mongoose');
const schema  = mongoose.Schema;

const complaintSchema = new schema({
    name:{
        type :String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type : Number,
        required : true
    },
    description:{
        type : String,
        required : true,
    },
    file :{
        data: Buffer
    }
},{timestamps : true});

const complaint = mongoose.model('complaints',complaintSchema);
module.exports = complaint;