const mongoose = require('mongoose');
const multer = require('multer')
const imagepath = '/uplods/movie';
const path = require('path')

const MovieSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    language :{
        type : String,
        required : true
    },
    subtitle :{
        type : String,
        required : true
    },
    price :{
        type : String,
        required : true
    },
    quality :{
        type : Array,
        required : true
    },
    director :{
        type : String,
        required : true
    },
    stars:{
        type : String,
        required : true
    },
    genres:{
        type : Array,
        required : true
    },
    avatar:{
        type : String,
        required : true
    },
    movietime : {
        type : String,
        required : true
    },
    active :{
        type : Boolean,
        required:true
    }



})

var storage = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null,path.join(__dirname,'..',imagepath))
    },
    filename : function(req,file,cb){
        cb(null,file.fieldname+'-'+Date.now())
    }
})
MovieSchema.statics.uploadphoto = multer({storage:storage}).single('avatar');
MovieSchema.statics.imgpath = imagepath

const Movie = mongoose.model('movie',MovieSchema);

module.exports = Movie;