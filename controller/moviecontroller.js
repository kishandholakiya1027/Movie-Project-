const express = require('express');

const movie = require('../model/moviedata');
const path = require('path')
const fs = require('fs')

module.exports.addmovie = async (req, res) => {
    return res.render('addmovie')

}

module.exports.insertmoviedata = async (req, res) => {
    req.body.active = true;
    if (req.file) {
        req.body.avatar = movie.imgpath + '/' + req.file.filename
    }
    let moviedata = await movie.create(req.body)
    return res.redirect('back')


}

module.exports.viewmovie = async (req, res) => {
    let search = '';
    let page = 1 ; 

    let perpage = 4 ;
    if(req.query.search){
        search = req.query.search;
    }
    if(req.query.page){
        page = req.query.page
    }
    let pagination = await movie.find({
             $or : [
            {name : {$regex : '.*'+search+'.*'}}
        ]
    }).skip((page-1 )*4).limit(perpage)
    let pdata = await movie.find({
        // $or : [
        //     {name : {$regex : '.*'+search+'.*'}}
        // ]
    }).countDocuments()
    let count = Math.ceil(pdata/perpage)
    return res.render('viewmovie',{
        name : pagination,
        page : count,
        search : search,
    
    })
}
module.exports.movieupdatedata = async (req, res) => {
    let data = await movie.findById(req.params.id)

    return res.render('movieupdate', {
        data: data
    })
}

module.exports.insertmovieupdatedata = async (req, res) => {
    try{
        if (req.file) {
            let data = await movie.findById(req.body.uid);
            console.log(data)
            if (data.avatar) {
                fs.unlinkSync(path.join(__dirname, '..', data.avatar));
            }
            req.body.avatar = await movie.imgpath + '/' + req.file.filename;
    
            let moviedb = await movie.findByIdAndUpdate(req.body.uid, req.body);
    
            return res.redirect('/admin');
        } 
        else {
            let data = await movie.findByIdAndUpdate(req.body.uid, req.body);
    
            return res.redirect('back');
        }
    }
    catch(err){
        console.log(err);
    }
    
}

module.exports.moviedeletedata = async (req, res) => {

    let data = await movie.findById(req.params.id)
    if (data.avatar) {
        fs.unlinkSync(path.join(__dirname, '..', data.avatar));
    }
    let dataa = await movie.findByIdAndDelete(data.id);

    return res.redirect('back')
}

module.exports.deactive = async(req,res)=>{
    let deactive = await movie.findByIdAndUpdate(req.params.id,{
        active : false

    })
    return res.redirect('back')
}
module.exports.active = async(req,res)=>{
    let active = await movie.findByIdAndUpdate(req.params.id,{
        active : true

    })
    return res.redirect('back')
}



