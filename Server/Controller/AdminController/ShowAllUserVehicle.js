const vehiclemodel = require("../../Models/AdminModels/VehicleModel");
const UserModel = require("../../Models/UserModels/UserModel");

const mongoose = require("mongoose");

exports.ShowAllUserVehicle = async (req, res) => {
  try {
    vehiclemodel.find({ Vrequest: "Pending" }).then((data) => {
      if (data) {
        res.status(200).json(data);
        console.log('data',data);
      } else {
        res.status(500).json({ msg: "oopz.. Can't Find Vehicles !" });
      }
    });
  } catch (error) {}
};


  exports.SearchUserVehicle = (req, res) => {
    const searchdata = req.query.searchdata;
    try {
      vehiclemodel
        .find({
          $or: [
            { Vname: { $regex: ".*" + searchdata + ".*", $options: "i" } },
            // { Vbrand: { $regex: ".*" + searchdata + ".*", $options: "i" } },
            // { Vlocation: { $regex: ".*" + searchdata + ".*", $options: "i" } },
            // { Vcolor: { $regex: ".*" + searchdata + ".*", $options: "i" } },
          ],
        })
        .then((data) => {
          res.status(200).json(data);
        });
    } catch (error) {}
  };
