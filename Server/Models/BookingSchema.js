const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    BikeId: { type: mongoose.Schema.Types.ObjectId, ref: "bike" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    bookedTimeSlots: {
        startdate: {
        type: String,
      },
      enddate: {
        type: String,
      },
    },
    totalHour: { type: Number },
    totalAmount: { type: Number },
    transactionId: { type: String },
    HelmetRequired : {type : Boolean}
  },
  { timestamps: true }
);
 
const bookingModel = mongoose.model('bookings',bookingSchema)

module.exports = bookingModel
