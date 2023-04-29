const mongoose = require('mongoose')


const vehicleSchema = new mongoose.Schema({
    Vname: { type: String },
    Vmodel: { type: String },
    Vbrand: { type: String },
    VengineNumber: { type: String },
    Vcolor: { type: String },
    Vfuel: { type: String },
    Vdesc: { type: String },
    Vphoto: []
})

const vehicle = mongoose.model("vehicle",vehicleSchema)

module.exports = vehicle