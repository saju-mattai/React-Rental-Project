const bookingModel = require("../../Models/BookingSchema");
const vehiclemodel = require("../../Models/AdminModels/VehicleModel");
exports.booking = async (req, res) => {
  // console.log(req.body.ReqObj);
  let transactionId = (req.body.transactionId = "1234");
  const {
    user,
    BikeId,
    totalHour,
    totalAmount,
    HelmetRequired,
    bookedTimeSlots,
  } = req.body.ReqObj;
  const details = {
    user,
    BikeId,
    totalAmount,
    totalHour,
    HelmetRequired,
    bookedTimeSlots,
    transactionId,
  };
  try {
    bookingModel
      .create(details)
      .then((data) => {
        vehiclemodel
          .findOne({ _id: data.BikeId })
          .then(async (result) => {
            result.BookedTimeSlots.push(req.body.ReqObj.bookedTimeSlots);
            console.log(result);

            await result.save();
            console.log("Document saved successfully");
            res.send("your booking is successfull");
          })
          .catch((error) => {
            console.error("Error finding vehicle model:", error);
          });
      })
      .catch((error) => {
        console.error("Error creating booking:", error);
      });
  } catch (error) {
    return res.status(400).json(error);
  }
};
