const bookingmodel = require("../../Models/BookingSchema");
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
