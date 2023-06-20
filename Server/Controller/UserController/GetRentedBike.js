const bookingmodel = require("../../Models/BookingSchema");
const moment = require("moment");

exports.getMyRentedBikeDetails = (req, res) => {
  bookingmodel
    .find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json(error);
    });
};

// exports.getOnride = (req, res) => {
//   bookingmodel
//     .find()
//     .then((data) => {
//       let currentTime = moment().format("MMMM Do YYYY, h:mm:ss a");
//       let updatePromises = [];
//       for (let i = 0; i < data.length; i++) {
//         if (
//           data[i].startdate <= currentTime &&
//           data[i].enddate >= currentTime &&
//           data[i].status != "Cancelled"
//         ) {
//           updatePromises.push(
//             bookingmodel.updateOne(
//               { _id: data[i]._id },
//               {
//                 $set: {
//                   status: "OnRide",
//                 },
//               }
//             )
//           );
//         }
//       }

//       Promise.all(updatePromises)
//         .then(() => {
//           return bookingmodel.find();
//         })
//         .then((updatedData) => {
//           console.log("updatedData", updatedData);
//           res.status(200).json(updatedData);
//         })
//         .catch((error) => {
//           res.status(400).json(error);
//         });
//     })
//     .catch((error) => {
//       res.status(400).json(error);
//     });
// };
