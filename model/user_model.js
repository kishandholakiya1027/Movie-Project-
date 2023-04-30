const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    movieId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'movie',
        required : true
   },
    phone : {
        type : String,
        required : true
    },
    sheat : {
        type : String,
        required : true
    },
    total : {
        type : String,
        required : true
    },
})
const user = mongoose.model('User__',UserSchema);
module.exports = user;