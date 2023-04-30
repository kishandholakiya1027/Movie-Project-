const express = require('express');

const moviedb = require('../model/moviedata')

const userdb = require('../model/uermodel');

module.exports.user = async (req,res)=>{
    
    let moviedata = await moviedb.find({
        active : true
    });
  
    return res.render('userindex',{
        name : moviedata
    });
}

module.exports.moviedetail = async (req,res) =>{
    let movie = await moviedb.findById(req.params.id)
    return res.render('moviedetail',{
        name : movie
    })
}

module.exports.userlogin = async (req,res)=>{
    return res.render('userlogin');
}

module.exports.userregister = async(req,res)=>{

    return res.render('userregister')
}

module.exports.userinsertdata = async(req,res)=>{
    // console.log(req.body);
    req.body.role = 'user'
    let insert = await userdb.create(req.body)
    // console.log(insert)
    return res.redirect('userlogin');
}

module.exports.userinsertlogin = async(req,res)=>{
    return res.redirect('/')
}

module.exports.moviebook = async(req,res)=>{
    let data = await moviedb.findById(req.params.id)
    return res.render('moviebook',{
        data : data,
    })
}

module.exports.ticketBook = async(req,res)=>{
    console.log(req.body)
}