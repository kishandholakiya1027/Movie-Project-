const mongoose = require('mongoose');
const AdminSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
      
    },
    phone : {
        type : String,
        required : true
      
    },
    avatar :{
        type : String,
        required : true
    },
    role : {
        type : String,
        required : true,
    }

})


const Admin = mongoose.model('Admin',AdminSchema);

module.exports = Admin;