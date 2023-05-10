const UserModel = require("../../Models/UserModels/UserModel");
const bcrypt = require("bcrypt");
const generateToken = require("../../Utils/generateToken");
const mongoose = require("mongoose");
const axios = require("axios");

exports.signup = async (req, res) => {
//   if (req.body.googleAccessToken) {
//     const { googleAccessToken } = req.body;

//     axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
//       headers: {
//         Authorization: `Bearer ${googleAccessToken}`,
//       },
//     });
//   } else {
    //normal form sign up
    const { name, email, place, dateCreated, status, phone } = req.body;
    let password = await bcrypt.hash(req.body.password, 10);
    try {
      let details = {
        name,
        email,
        place,
        password,
        dateCreated,
        status,
        phone,
      };

      let emailExists = await UserModel.findOne({ email: details.email });
      let phoneExist = await UserModel.findOne({ phone: details.phone });

      if (emailExists && phoneExist) {
        res.status(400).json("Email  AND Phone Already Exist");
      } else if (emailExists && !phoneExist) {
        res.status(400).json("Email Already Exist");
      } else if (!emailExists && phoneExist) {
        res.status(400).json("Phone Number Already Exist");
      } else {
        UserModel.create(details).then((data) => {
          let result = {
            name: data.name,
            email: data.email,
            place: data.place,
            phone: data.phone,
            // image : data.image
          };
          res.status(200).json(result);
        });
      }
    } catch (error) {
      console.log("jhgfds", error);
      res.status(400).json("Can't create user something went wrong");
    }
  }
// };

exports.login = (req, res) => {
  try {
    UserModel.findOne({ email: req.body.email }).then((response) => {
      if (response) {
        const { status } = response;
        if (status === true) {
          bcrypt.compare(
            req.body.password,
            response.password,
            function (err, result) {
              if (result) {
                let data = {
                  name: response.name,
                  email: response.email,
                  place: response.place,
                  phone: response.phone,
                  image: response.image,
                  id: response._id,
                  token: generateToken(response._id),
                };
                res.status(201).json(data);
              } else {
                res.status(400).json("Incorrect password");
              }
            }
          );
        } else {
          res.status(400).json("Admin Restricted");
        }
      } else {
        res.status(400).json("Invalid Email");
      }
    });
  } catch (error) {
    console.log("error", error);
    res.status(400).json(error);
  }
};
