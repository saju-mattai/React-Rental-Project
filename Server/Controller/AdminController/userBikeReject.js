// const { updateOne } = require('../../Models/AdminModel');
const vehiclemodel = require("../../Models/AdminModels/VehicleModel");


exports.userBikeReject = (req, res) => {
    console.log(req.query.id);

    try {
        vehiclemodel.findOne({ _id: req.query.id }).then((response) => {
            console.log(
                response
            );
            vehiclemodel.updateOne({ _id: response._id },
                {
                    $set: {
                        Vrequest: "Rejected"
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