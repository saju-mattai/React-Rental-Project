const UserModel = require('../../Models/UserModels/UserModel')
const generateToken = require('../../Utils/generateToken')


exports.edituser = async (req, res) => {
    const { name, email, phone, place } = req.body
    try {

        await UserModel.updateOne({ _id: req.query.id },
            {
                $set: {
                    name: name,
                    email: email,
                    phone: phone,
                    place: place
                }
            }

        ).then((data) => {
            if (data) {
                UserModel.findOne({ _id: req.query.id }).then((result) => {
                    let details = {
                        id : result._id,
                        name: result.name,
                        email: result.email,
                        phone: result.phone,
                        place: result.place,
                        image : result.image,
                        token: generateToken(result._id)
                    }

                    res.status(200).json(details)
                })
            } else {
                res.status(500).json({ msg: "oopz.. Can't Update User !" })
            }
        })
    } catch (error) {
        console.log(error, 'errrrr');
    }
}
