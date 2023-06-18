const vehiclemodel = require("../../Models/AdminModels/VehicleModel");

const path = require("path");
const fs = require("fs");
const cloudinary = require("../../Utils/cloudinary");

exports.addBikeUser = async (req, res) => {
  try {
    const uploader = async (path) => await cloudinary.uploads(path, "Images");
    if (req.method === "POST") {
      const urls = [];
      const files = req.files;
      for (const file of files) {
        const { path } = file;

        const newPath = await uploader(path);
        urls.push(newPath);
        fs.unlinkSync(path);
      }

      const {
        Vname,
        Vmodel,
        Vbrand,
        Vprice,
        Vcolor,
        Vfuel,
        Vdesc,
        Vphoto,
        Vnumber,
        Vlocation,
      } = req.body;
      const vehicleDetails = {
        Vname,
        Vmodel,
        Vbrand,
        Vprice,
        Vcolor,
        Vnumber,
        Vlocation,
        Vfuel,
        Vdesc,
        Vphoto: urls,
        Vrequest: "Pending",
        OwnerId: req.query.id,
      };
      vehiclemodel
        .create(vehicleDetails)
        .then((response) => {
          res.status(200).json(response);
        })
        .catch((error) => {
          res.status(500).json(error);
        });
    }
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};
