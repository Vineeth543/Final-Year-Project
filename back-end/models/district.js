const mongoose  = require('mongoose');
const schema  = mongoose.Schema;

const districtSchema = new schema({
    name:{
        type :String,
        required:true
    },
},{timestamps : true});

const user = mongoose.model('users',userSchema);
module.exports = user;