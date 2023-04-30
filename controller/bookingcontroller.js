const booking = require('../model/user_model')

module.exports.booked_data = async (req,res)=>{
     const bookingData = await booking.create(req.body)
     if(bookingData){
          return res.redirect('/booking/ticket')
     }
}
module.exports.ticket = async (req,res)=>{
     const date_ = new Date()
     const day = ("0" + date_.getDate()).slice(-2);
    const month = ("0" + (date_.getMonth() + 1)).slice(-2);
    const year = date_.getFullYear();
    const date = day + "-" + month + "-" + year;
    const booking_Data = await booking.findById(req.body.movieId)
    console.log(booking_Data)
    console.log(date)
    return res.render('ticket',{
     data : booking_Data
    })

}