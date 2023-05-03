const mongoose = require('mongoose')


const vehicleSchema = new mongoose.Schema({
    Vname: { type: String },
    Vmodel: { type: String },
    Vbrand: { type: String },
    Vprice: { type: String },
    Vcolor: { type: String },
    Vfuel: { type: String },
    Vdesc: { type: String },
    status: { type: Boolean, default: true },
    Vphoto: [],
    dateCreated: {
        type: Date,
        default: Date.now
    }
})

const vehicle = mongoose.model("vehicle", vehicleSchema)

module.exports = vehicle