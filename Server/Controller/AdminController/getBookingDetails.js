const bookingModel = require("../../Models/BookingSchema");

exports.getBookingDetails = (req, res) => {
  try {
    bookingModel
      .find()
      .then((data) => {
        // const page = parseInt(req.query.page);
        // const limit = parseInt(req.query.limit);
        // const StartIndex = (page - 1) * limit;
        // const LastIndex = page * limit;

        // const results = {};
        // results.TotalVehicle = data.length;
        // results.pageCount = Math.ceil(data.length / limit);

        // if (LastIndex < data.length) {
        //   results.next = {
        //     page: page + 1,
        //   };
        // }

        // if (StartIndex > 0) {
        //   results.prev = {
        //     page: page - 1,
        //   };
        // }

        // results.result = data.slice(StartIndex, LastIndex);
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(500).json({ err });
      });
  } catch (error) {
    res.status(500).json({ error });
  }
};
