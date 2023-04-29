const UserModel = require('../../Models/UserModels/UserModel')


exports.ShowAllUSer = (req, res) => {
    try {
        UserModel.find().then((data) => {
            if (data) {
                res.status(200).json(data)
            } else {
                res.status(500).json({ msg: "oopz.. something went wrong !" })
            }
        })
    } catch (error) {

    }
}