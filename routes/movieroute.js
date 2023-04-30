const express = require('express');
const route = express.Router();
const moviedb = require('../model/moviedata')
const moviedata = require('../controller/moviecontroller')

route.get('/addmovie',moviedata.addmovie);

route.post('/insertmoviedata', moviedb.uploadphoto,moviedata.insertmoviedata);

route.get('/viewmovie',moviedata.viewmovie);

route.get('/movieupdatedata/:id',moviedata.movieupdatedata)

route.post('/insertmovieupdatedata',moviedb.uploadphoto, moviedata.insertmovieupdatedata)

route.get('/moviedeletedata/:id',moviedata.moviedeletedata)

route.get('/deactive/:id',moviedata.deactive)

route.get('/active/:id',moviedata.active)

module.exports = route;