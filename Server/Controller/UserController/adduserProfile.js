const UserModel = require('../../Models/UserModels/UserModel')
const path = require('path')
const fs = require('fs')
const cloudinary = require('../../Utils/cloudinary')


exports.uploadprofile = async (req, res) => {
    console.log(req.body);
    console.log('himsafiniiiiiiiiiiiii');
    console.log(req.file);
    try {
        const uploader = async (path) => await cloudinary.uploads(path, 'Images');
        if (req.method === 'POST') {
            const urls = []
            const file = req.file;
            // for (const file of files) {
            const { path } = file;

            const newPath = await uploader(path)
            urls.push(newPath)
            fs.unlinkSync(path)
            // }
            UserModel.updateOne({ _id: req.query.id },
                {
                    $set: {
                        image: urls[0].url
                    }
                }).then((response) => {
                    UserModel.findOne({ _id: req.query.id }).then((data) => {
                        const { id, name, email, place, phone, image } = data
                        let result = { id, name, email, place, phone, image }
                        console.log(result);
                        res.status(200).json(result)
                    })
                })
        } else {
            res.status(405).json({
                err: `${req.method} method not allowed`
            })
        }
    } catch (error) {
        res.status(500).json(error)
    }
}