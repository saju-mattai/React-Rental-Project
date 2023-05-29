// const { updateOne } = require('../../Models/AdminModel');
const vehiclemodel = require("../../Models/AdminModels/VehicleModel");


exports.userBikeAccept = (req, res) => {
    // console.log(req.body);
    console.log(req.query.id);

    try {
        vehiclemodel.findOne({ _id: req.query.id }).then((response) => {
           
            vehiclemodel.updateOne({ _id: response._id },
                {
                    $set: {
                        Vrequest: "Accepted"
                    }
                }).then((result) => {
                    vehiclemodel.find({Vrequest:"pending"}).then((response) => {
                        res.status(200).json(response)

                    })

                })
        })


    } catch (error) {
        res.status(400).json(error)
    }
}