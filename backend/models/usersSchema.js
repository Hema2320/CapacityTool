const mongoose = require("mongoose");
const validator = require("validator");

const usersSchema = new mongoose.Schema({
    // fname: {
    //     type: String,
    //     required: true,
    //     trim: true
    // },
    profile:{
        type:String,
        required:true,
    },
    name: {
        type: String,
        required: true,
        trim: true
     },
    // lname: {
    //     type: String,
    //     required: true,
    //     trim: true
    // },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw Error("not valid email")
            }
        }
    },
    project:{
        type:String,
        required:true,    
    },
    taskName:{
        type:String,
        required:true,
    },
    
    status: {
        type: String,
        required: true,
    },
    estimation: {
        type: String,
        required: true,
    },
    spentTime:{
        type:String,
        required:true,
        datecreated:Date,
    },
    
    datecreated:Date,
    dateUpdated:Date
});

// model
const users = new mongoose.model("users",usersSchema);

module.exports = users;

