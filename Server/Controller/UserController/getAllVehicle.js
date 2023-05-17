const vehiclemodel = require("../../Models/AdminModels/VehicleModel");

exports.getAllVehicle = (req, res) => {
  try {
    vehiclemodel
      .find({Vrequest:"Accepted"})
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(500).json({ msg: "oopz.. Can't Find Vehicles !" });
      });
  } catch (error) {}
};
