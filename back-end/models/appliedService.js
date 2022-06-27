const mongoose  = require('mongoose');
const schema  = mongoose.Schema;

const appliedServiceSchema = new schema({
    service:{
        type : schema.Types.ObjectId,
        ref: 'services',
        required:true,
    },
    user:{
        type : schema.Types.ObjectId,
        ref :'users',
        required : true,
    },
    date: { 
        type : Date,
        default : Date.now
    },
    secretary:{
        type:Boolean,
        default:false
    },
    pdo:{
        type:Boolean,
        default:false
    },
    status: {
        type : String,
        enum :["rejected","accepted","completed","applied"],
        default : "applied"
    }
},{timestamps : true});

const appliedService = mongoose.model('applied-services',appliedServiceSchema);
module.exports = appliedService;