const vehiclemodel = require("../../Models/AdminModels/VehicleModel");

exports.getAllUserVehicle = (req, res) => {
  try {
    vehiclemodel
      .find({ OwnerId: req.query.id })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(500).json({ msg: "oopz.. Can't Find Vehicles !" });
      });
  } catch (error) {}
};
