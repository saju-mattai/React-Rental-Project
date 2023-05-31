const bookingModel = require("../../Models/BookingSchema");

exports.getBookingDetails = (req, res) => {
  try {
    bookingModel
      .find()
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(500).json({ err });
      });
  } catch (error) {
    res.status(500).json({ error });
  }
};
