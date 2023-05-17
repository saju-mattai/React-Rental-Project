const vehiclemodel = require('../../Models/AdminModels/VehicleModel')


exports.ShowAllVehicle = (req, res) => {
    try {
        vehiclemodel.find({Vrequest:"Accepted"}).then((data) => {
            if (data) {
                res.status(200).json(data)
            } else {
                res.status(500).json({ msg: "oopz.. Can't Find Vehicles !" })
            }
        })
    } catch (error) {

    }
}