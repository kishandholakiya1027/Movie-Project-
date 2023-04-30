const express = require('express');
const route = express.Router();
const passport = require('passport')
const admindb = require('../model/admindata')
const admindata = require('../controller/admincontroller')

// route.get('/home',passport.cheakauthanticate,admindata.dashbord);
route.get('/',passport.cheakauthanticate,admindata.home);

route.get('/register',admindata.register);

route.get('/forgot',admindata.forgot);

route.get('/profile',admindata.profile)

// route.get('/profile'.admindata.profile)
route.post('/forgotpass',admindata.forgotpass)

route.post('/otp', admindata.otp);

route.post('/resetpass',admindata.resetpass)

route.post('/signupp',admindata.signupp)


route.get('/addadmin',passport.cheakauthanticate,admindata.addadmin);

route.get('/viewAdmin',passport.cheakauthanticate,admindata.viewadmin)

route.post('/insertAdminData',admindata.insertAdminData);

route.get('/Admindeletedata/:id',admindata.Admindeletedata)

route.get('/Adminupdatedata/:id',admindata.Adminupdatedata)

route.post('/insertupdatedata',passport.cheakauthanticate,admindata.insertupdatedata)

route.get('/login',admindata.login);

route.post('/getlogin',passport.authenticate('admin',{failureRedirect:'/login'}),admindata.getlogin)

route.get('/logout',admindata.logout)


route.use('/movie',passport.cheakauthanticate, require('./movieroute'));


module.exports = route;