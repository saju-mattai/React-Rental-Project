const bookingmodel = require("../../Models/BookingSchema");

exports.CancelMyRide =(req,res)=>{
    bookingmodel.updateOne({ _id: req.query.id },
        {
            $set:{
                status : "Cancelled"
            }
        }).then((result)=>{
            bookingmodel.find().then((data)=>{
                res.status(200).json(data)
            })
        })
}