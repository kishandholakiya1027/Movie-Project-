const express = require('express')

const route = express.Router();

const userdata = require('../controller/usercontroller');
const passport = require('passport');

route.get('/',userdata.user)

route.get('/moviedetail/:id',userdata.moviedetail)

route.get('/userlogin',userdata.userlogin)

route.get('/userregister',userdata.userregister)

route.post('/userinsertdata',userdata.userinsertdata)

route.post('/userinsertlogin', passport.authenticate('user',{failureRedirect : '/userlogin'}), userdata.userinsertlogin)

route.get('/moviebook/:id', passport.cheakauthanticateuser,userdata.moviebook)

route.post('/ticketBook', userdata.ticketBook);

route.use('/admin' ,require('./admin'));

route.use('/movie' , passport.cheakauthanticate ,require('./movieroute'));


module.exports = route ;