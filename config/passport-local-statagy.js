const passport = require('passport')
const passlocal = require('passport-local').Strategy;
const user = require('../model/uermodel')
const admin = require('../model/admindata');

passport.use('admin',new passlocal({
    usernameField : 'email' 
}, async (email,password,done)=>{
    let admina = await admin.findOne({email:email})
    if(!admina || admina.password != password){
        console.log('somthing went wrong !!')
        return done(null,false)
    }
    return done(null,admina)
}))

passport.serializeUser((user,done)=>{
    done(null,user.id)
})

passport.deserializeUser(async (id,done)=>{
    let userdata = await user.findById(id)
    let admina = await admin.findById(id);
    if(!admina)
    {
        let userdata = await user.findById(id)
        return done(null,userdata)
    }
    else{
        return done(null,admina)
    }
})
passport.cheakauthanticate = (req,res,next)=>{

    if(req.isAuthenticated()){
        return next()
    }
    return res.redirect('/admin/login')
}

passport.setprofilee = (req,res,next)=>{
        res.locals.admin = req.user;
    // console.log(req.user)
    next();
}
module.exports = passport;