const mongoose  = require('mongoose');
const schema  = mongoose.Schema;

const pdoSchema = new schema({
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
        type : Number,
        required : true,
        unique : true
    },
    password : {
        type :String,
        required : true
    }
},{timestamps : true});

const secretarySchema = new schema({
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
        type : Number,
        required : true,
        unique : true
    },
    password : {
        type :String,
        required : true
    }
},{timestamps : true});

const presidentSchema = new schema({
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
        type : Number,
        required : true,
        unique : true
    },
    password : {
        type :String,
        required : true
    }
},{timestamps : true});

const pdo = mongoose.model('pdo',pdoSchema);
const secretary = mongoose.model('secretary',secretarySchema);
const president = mongoose.model('president',presidentSchema);
module.exports = {pdo,secretary,president};