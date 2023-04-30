const express = require('express');
const routs = express.Router();
const bookingController = require('../controller/bookingcontroller')
routs.post('/booked_data',bookingController.booked_data)
routs.get('/ticket',bookingController.ticket)
module.exports = routs