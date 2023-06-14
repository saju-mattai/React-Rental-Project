const UserModel = require("../../../Models/UserModels/UserModel");

module.exports.getAllUser = async (req,res,next)=>{
    try {
        const user = await UserModel.find({_id:{$ne:req.query.id}}).select([
            "email",
            "name",
            "image",
            "_id"
        ])
        return res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}


