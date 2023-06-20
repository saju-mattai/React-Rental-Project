const bookingmodel = require("../../Models/BookingSchema");
const WalletModel = require("../../Models/WalletSchema");
const vehiclemodel = require("../../Models/AdminModels/VehicleModel");
exports.CancelMyRide = (req, res) => {
  console.log(req.query.cancelReason);

  try {
    bookingmodel.find({ _id: req.query.bookingid }).then((response) => {
      let StartTime = response[0].startdate;
      let EndTime = response[0].enddate;
      bookingmodel
        .updateOne(
          { _id: req.query.bookingid },
          {
            $set: {
              status: "Cancelled",
              cancelReason: req.query.cancelReason,
            },
          }
        )
        .then((result) => {
          console.log(result)
          WalletModel.updateOne(
            { userId: req.query.userid },
            {
              $inc: {
                walletAmount: response[0].totalAmount,
              },
            }
          ).then((res) => {
            // res.status(200).json(data);
          });

          bookingmodel.find().then((data) => {
            res.status(200).json(data);
          });
        });
      vehiclemodel
        .updateOne(
          { _id: response[0].BikeId },
          {
            $set: {
              Vstatus: "Available",
            },
          }
        )
        .then((res) => {
          vehiclemodel
            .updateOne(
              { _id: response[0].BikeId },
              {
                $pull: {
                  BookedTimeSlots: {
                    startdate: StartTime,
                    enddate: EndTime,
                  },
                },
              }
            )
            .then((result) => {
            });
        });
    });
  } catch (error) {}
};
