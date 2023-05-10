const UserModel = require("../../Models/UserModels/UserModel");
const generateToken = require("../../Utils/generateToken");
exports.otpLogin = async (req, res) => {
  try {
    let result = await UserModel.findOne({ phone: req.query.phone });
    console.log(result,';;;');
    if (result) {
      let details = {
        id : result._id,
        name: result.name,
        email: result.email,
        phone: result.phone,
        place: result.place,
        image : result.image,
        token: generateToken(result._id)
    }
      res.status(200).json(details);
    } else {
      res.status(400).json("Can't Login With Out Sign Up");
    }
  } catch (error) {
  }
};
