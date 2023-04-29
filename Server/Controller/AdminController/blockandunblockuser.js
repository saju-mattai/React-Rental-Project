// const { updateOne } = require('../../Models/AdminModel');
const UserModel = require('../../Models/UserModels/UserModel')

exports.blockunblock = (req, res) => {
    // console.log(req.body);
    console.log(req.query.id);

    try {
        UserModel.findOne({ _id: req.query.id }).then((response) => {
            console.log(
                response
            );
            UserModel.updateOne({ _id: response._id },
                {
                    $set: {
                        status: !response.status
                    }
                }).then((result) => {
                    UserModel.find().then((response) => {
                        res.status(200).json(response)

                    })

                })
        })


    } catch (error) {
        res.status(400).json(error)
    }
}