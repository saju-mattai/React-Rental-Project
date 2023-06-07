const bookingModel = require("../../Models/BookingSchema");
const vehiclemodel = require("../../Models/AdminModels/VehicleModel");
const { default: mongoose } = require("mongoose");

exports.saveBooking = (req, res) => {
  const {
    userId,
    BikeId,
    UserName,
    totalHour,
    totalAmount,
    HelmetRequired,
    BikeName,
    startdate,
    enddate,
    BikePhoto,
    Description,
    Location,
    paymentMethod
  } = req.body.Obj;
  console.log('req.body.Obj',req.body.Obj);
  const details = {
    userId,
    UserName,
    BikeId,
    totalHour,
    totalAmount,
    HelmetRequired,
    startdate,
    enddate,
    BikeName,
    BikePhoto,
    Description,
    Location,
    paymentMethod:'Stripe'

  };
  let bookedTimeSlots = {
    startdate,
    enddate,
  }
  
  try {
    bookingModel.create(details).then((data) => {
      vehiclemodel
        .findOne({ _id: data.BikeId })
        .then(async (result) => {
          result.BookedTimeSlots.push(bookedTimeSlots);
          vehiclemodel.updateOne({_id:result._id},
            {
              $set:{
                Vstatus:"Rented"
              }
            }).then((res)=>{
              
            })
          await result.save();
          res.send("your booking is successfull");
        })
        .catch((error) => {
          console.error("Error finding vehicle model:", error);
        });
    });
  } catch (error) {
    console.log("error,error", error);
    return res.status(400).json(error);
  }
};
