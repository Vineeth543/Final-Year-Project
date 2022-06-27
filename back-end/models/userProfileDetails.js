const mongoose  = require('mongoose');
const schema  = mongoose.Schema;

const userDetailsSchema = new schema({
    userId:{
        type:schema.Types.ObjectId,
        ref : 'users',
        required:true
    },
    fatherName:{
        type: String
    },
    motherName:{
        type:String
    },
    address:{
        type:String
    },
    village:{
        type:String
    },
    taluk:{
        type:String
    },
    district:{
        type:String
    },
    documents:[{
        file:{
            type:Buffer
        },
        documentName:{
            type:String
        }
    }]
},{timestamps : true});

const userDetails = mongoose.model('userDetails',userDetailsSchema);
module.exports = userDetails;