const vehiclemodel = require('../../Models/AdminModels/VehicleModel')
const path = require('path')
const fs = require('fs')
const cloudinary = require('../../Utils/cloudinary')

exports.addvehicle = async (req, res) => {
    console.log("sasasas",req.body);
    console.log("file",req.files);
    try {
        const uploader = async (path) => await cloudinary.uploads(path, 'Images');
        if (req.method === 'POST') {
            const urls = []
            const files = req.files;
            for (const file of files) {
                const { path } = file;

                const newPath = await uploader(path)
                urls.push(newPath)
                fs.unlinkSync(path)
            }

            const { Vname, Vmodel, Vbrand, Vprice, Vcolor, Vfuel, Vdesc, Vphoto } = req.body
            const vehicleDetails = {
                Vname,
                Vmodel,
                Vbrand,
                Vprice,
                Vcolor,
                Vfuel,
                Vdesc,
                Vphoto: urls
            }
            vehiclemodel.create(vehicleDetails).then((response) => {
                res.status(200).json(response)
            })
        }
    } catch (error) {
        res.status(500).json(error)
    }

}