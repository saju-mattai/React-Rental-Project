const bookingModel = require("../../Models/BookingSchema");


exports.getSalesReport = (req, res) => {
  try {
    bookingModel.find()
    .sort({ createdAt: -1 })
    .then((data) => {
      res.status(200).json(data);
    });
  } catch (error) {
    console.log("Error in getting sales report", error);
  }
};
