const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  OwnerId: { type: String ,ref : "User" },
  Vname: { type: String },
  Vmodel: { type: String },
  Vbrand: { type: String },
  Vprice: { type: String },
  Vcolor: { type: String },
  Vfuel: { type: String },
  Vdesc: { type: String },
  Vstatus: { type: String, default: "Available" },
  Vrequest: { type: String, default: "Accepted" },
  Vnumber: { type: String },
  Vphoto: [],
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  BookedTimeSlots: [
    {
      startdate: {
        type: String,
      },
      enddate: {
        type: String,
      },
    },
  ],
});

const vehicle = mongoose.model("vehicle", vehicleSchema);

module.exports = vehicle;
