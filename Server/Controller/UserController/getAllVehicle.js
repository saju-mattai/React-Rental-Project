const vehiclemodel = require("../../Models/AdminModels/VehicleModel");

exports.getAllVehicle = (req, res) => {
  try {
    vehiclemodel
      .find({ Vrequest: "Accepted" })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(500).json({ msg: "oopz.. Can't Find Vehicles !" });
      });
  } catch (error) {}
};

exports.searchVehicle = (req, res) => {
  console.log(req.query.searchTerm);
  let searchdata = req.query.searchTerm;
  try {
    vehiclemodel
      .find({
        $or: [
          { Vname: { $regex: ".*" + searchdata + ".*", $options: "i" } },
          { Vbrand: { $regex: ".*" + searchdata + ".*", $options: "i" } },
          { Vcolor: { $regex: ".*" + searchdata + ".*", $options: "i" } },
        ],
      })
      .then((data) => {
        res.status(200).json(data);
      });
  } catch (error) {}
};
exports.filterByBrand = (req, res) => {
  let brand = req.body.data;
  try {
    vehiclemodel
      .find({ Vbrand: { $regex: ".*" + brand + ".*", $options: "i" } })
      .then((data) => {
        res.status(200).json(data);
      });
  } catch (error) {}
};

exports.filterByModel = (req,res)=>{
  let model = req.body.data
  try {
    vehiclemodel
      .find({ Vmodel: { $regex: ".*" + model + ".*", $options: "i" } })
      .then((data) => {
        res.status(200).json(data);
      });
  } catch (error) {}
}
