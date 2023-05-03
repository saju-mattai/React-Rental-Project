const UserModel = require('../../Models/UserModels/UserModel')
const bcrypt = require('bcrypt')
const generateToken = require('../../Utils/generateToken')
const mongoose = require('mongoose')

exports.signup = async (req, res) => {
    console.log(req.body);
    const { name, email, place, dateCreated, status, phone } = req.body
    let password = await bcrypt.hash(req.body.password, 10)
    try {

        let details = {
            name,
            email,
            place,
            password,
            dateCreated,
            status,
            phone
        }

        let emailExists = await UserModel.findOne({ email: details.email })
        let phoneExist = await UserModel.findOne({ phone: details.phone })



        if (emailExists && phoneExist) {
            res.status(400).json("Email  AND Phone Already Exist")
        } else if (emailExists && !phoneExist) {
            res.status(400).json("Email Already Exist")
        } else if (!emailExists && phoneExist) {
            res.status(400).json("Phone Number Already Exist")
        } else {
            UserModel.create(details).then((data) => {
                let result = {
                    name: data.name,
                    email: data.email,
                    place: data.place,
                    phone: data.phone,
                }
                res.status(200).json(result)

            })
        }

        // if (userExists && phoneExist) {

        //     res.status(400).json("Email  OR Phone Already Exist")
        //     console.log('pariiiiiiiiiiiiiiiiiiii');
        // } else {
        //     console.log('kkkkkkkkkk');
        //     UserModel.create(details).then((data) => {
        //         let result = {
        //             name: data.name,
        //             email: data.email,
        //             place: data.place,
        //             phone: data.phone,
        //         }
        //         res.status(200).json(result)

        //     })
        // }





        // UserModel.findOne({ email: details.email }).then((data) => {
        //     console.log(data);
        //     if (data.email === details.email) {
        //         log
        //         res.status(400).json("Email Already Exist")
        //         console.log("Email Already Exist");
        //     } else if (data.phone === details.phone) {
        //         res.status(400).json("Phone Number Already Exist")
        //         console.log('oooooooooooooooooo');
        //     } else {
        //         UserModel.create(details).then((data) => {
        //             let result = {
        //                 name: data.name,
        //                 email: data.email,
        //                 place: data.place,
        //                 phone: data.phone,
        //             }
        //             res.status(200).json(result)

        //         })
        //     }
        // })







    } catch (error) {
        console.log('jhgfds', error);
        res.status(400).json("Can't create user something went wrong")

    }
}
exports.login = (req, res) => {
    try {
        UserModel.findOne({ email: req.body.email }).then((response) => {
            // console.log(response);

            if (response) {
                const { status } = response

                if (status === true) {
                    bcrypt.compare(req.body.password, response.password, function (err, result) {
                        if (result) {
                            let data = {
                                name: response.name,
                                email: response.email,
                                place: response.place,
                                phone: response.phone,
                                image: response.image,
                                id: response._id,
                                token: generateToken(response._id)
                            }

                            res.status(201).json({ data, MESSAGE: "login successfully" })
                        }
                        else {
                            res.status(400).json("Incorrect password")
                        }
                    });
                } else {
                    res.status(400).json("Admin Restricted")
                }

            } else {
                res.status(400).json("Invalid Email")
            }

        })
    } catch (error) {
        console.log('error', error);
        res.status(400).json(error)
    }
}

