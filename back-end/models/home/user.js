const mongoose  = require('mongoose');
const schema  = mongoose.Schema;

const userSchema = new schema({
    name:{
        type :String,
        required:true
    },
    gender:{
        type:String,
    },
    email:{
        type:String
    },
    phone:{
        type : String,
        required : true,
        unique : true
    },
    password : {
        type :String,
        required : true
    }
},{timestamps : true});

const user = mongoose.model('users',userSchema);
module.exports = user;