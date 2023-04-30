const { urlencoded } = require('express');
const express = require('express');

const port = 8111;

const app = express();

const mongoose = require('./config/admin')
const passport = require('passport')
const passlocal = require('./config/passport-local-statagy')
const passlocaluser  = require('./config/passport-stretegy')
const cookie = require('cookie-parser')
const session = require('express-session')
const flash = require('connect-flash');
const cflash = require('./config/middleware')
app.use('/uplods',express.static('uplods'))
app.set('view engine','ejs');
app.use(express.static('assets'));




app.use(express.urlencoded())
app.use(urlencoded());
app.use(session({
    name : 'Ecommerce',
    secret : '12345',
    resave : false,
    saveUninitialized : false,
    cookie : {
        maxAge : 100000 * 100000,
    }   
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(passport.setprofile);
app.use(passport.setprofilee);
app.use(cookie());
app.use(flash());
app.use(cflash.flash);
app.use('/',require('./routes/index'));


app.get('/home',(req,res)=>{
    res.render('dashbord');
})

app.use('/admin', require('./routes/admin'))
app.use('/booking',require('./routes/booking'))
app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false
    }
    console.log("server is connect port",port);
})