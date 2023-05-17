const vehiclemodel = require("../../Models/AdminModels/VehicleModel");
const UserModel = require("../../Models/UserModels/UserModel");

const mongoose = require("mongoose");

exports.ShowAllUserVehicle = async (req, res) => {
  try {
      vehiclemodel.find({Vrequest:"Pending"}).then((data) => {
          if (data) {
              res.status(200).json(data)
          } else {
              res.status(500).json({ msg: "oopz.. Can't Find Vehicles !" })
          }
      })
  } catch (error) {

  }
   

 
};
