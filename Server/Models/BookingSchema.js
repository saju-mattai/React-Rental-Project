const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    BikeId: { type: mongoose.Schema.Types.ObjectId, ref: "bike" },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    UserName: { type: String },

    // bookedTimeSlots: {
    startdate: {
      type: String,
    },
    enddate: {
      type: String,
    },
    // },
    BikeName: { type: String },
    BikePhoto: { type: String },
    Description: { type: String },
    Location:{type:String},
    totalHour: { type: Number },
    totalAmount: { type: Number },
    transactionId: { type: String },
    HelmetRequired: { type: Boolean },
    status: { type: String, default: "Booked" },
    cancelReason: { type: String, default: "Nill" },

    paymentMethod: { type: String },
  },
  { timestamps: true }
);

const bookingModel = mongoose.model("bookings", bookingSchema);

module.exports = bookingModel;
