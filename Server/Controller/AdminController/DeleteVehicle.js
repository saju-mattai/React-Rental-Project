const vehiclemodel = require("../../Models/AdminModels/VehicleModel");

exports.deleteVehicle = (req, res) => {
  console.log(req.query.id);
  try {
    vehiclemodel
      .deleteOne({ _id: req.query.id })
      .then(() => {
        vehiclemodel.find().then((data) => {
          res.status(200).json(data);
        });
      })
      .catch((err) => {
        res.status(500).json({ msg: "Can't Delete SomeThing Wrong" });
      });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
