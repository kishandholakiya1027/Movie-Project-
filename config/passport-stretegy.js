const passport = require('passport')
const passlocal = require('passport-local').Strategy;

const user = require('../model/uermodel');

passport.use('user',new passlocal({
    usernameField : 'email' 
}, async (email,password,done)=>{
    let admina = await user.findOne({email:email})
    if(!admina || admina.password != password){
        console.log('somthing went wrong !!')
        return done(null,false)
    }
    return done(null,admina)
}))

passport.cheakauthanticateuser = (req,res,next)=>{

    if(req.isAuthenticated()){
        return next()
        // console.log(req.user);
    }
    return res.redirect('/userlogin')
}

passport.setprofile = (req,res,next)=>{
    if(req.isAuthenticated())
    {
        res.locals.user = req.user;
    }
    next();
}

module.exports = passport;