const bookingModel = require("../../Models/BookingSchema");


exports.getCancelledVehicle = (req,res)=>{
try {
    bookingModel.find({status:'Cancelled'}).then((data)=>{
        console.log(data);
        res.status(200).json(data)
    })
} catch (error) {
    
}   
}