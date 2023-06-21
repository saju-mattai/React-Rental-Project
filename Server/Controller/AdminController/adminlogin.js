const AdminModel = require('../../Models/AdminModels/AdminModel')
const bcrypt = require('bcrypt')
const generateToken = require('../../Utils/generateToken')

exports.Adminlogin = (req, res) => {
    try {
        AdminModel.findOne({ email: req.body.email }).then((response) => {
            if (response) {
                bcrypt.compare(req.body.password, response.password, function (err, result) {
                    if (result) {
                        let data = {
                            name: response.name,
                            email: response.email,
                            token: generateToken(response._id)
                        }
                        res.status(200).json(data)
                    } 
                    else {
                        console.log('cc'); 
                        res.status(400).json({msg:"Incorrect password"})
                    }
                });
            } else {
                res.status(400).json({msg:"Invalid Email"})
            }
        })
    } catch (error) {
        res.status(400).json(error)
    }
}

