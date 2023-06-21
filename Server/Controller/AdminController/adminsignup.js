const AdminModel = require('../../Models/AdminModels/AdminModel')
const bcrypt = require('bcrypt')

exports.Adminsignup = async (req, res) => {
    const { name, email,  } = req.body
    let password = await bcrypt.hash(req.body.password, 10)
    try {
        let details = {
            name,
            email,
            password         
        }
        AdminModel.create(details).then((data) => {
            let result = {
                name: data.name,
                email: data.email            
            }
            res.status(200).json(result)
        })

    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }
}
