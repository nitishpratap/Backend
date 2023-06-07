const mongoose =  require('mongoose')
const validator = require('validator');
const loginSchema = new mongoose.Schema({
    email : {
        type  : String,
        required : true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is invalid");
            }
        }
    },
    password : {
        type : String,
        required: true
    }
    })
const login =  new mongoose.model("login",loginSchema)
module.exports = login
