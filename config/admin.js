const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://harshilbavishi96:BxwdkEhAfhmUM5ip@jarvismovie.fe9w98s.mongodb.net/");

const db = mongoose.connection;

db.on('error',console.error.bind("error",'mongodb not connected'));

db.once('open',function(err){
    if(err){
        console.log(err);
        return false;
    }
    console.log('db is connected');
})

module.exports = db;