const bookingmodel = require("../../Models/BookingSchema");
const WalletModel = require("../../Models/WalletSchema");

exports.CancelMyRide = (req, res) => {
  console.log(req.query.bookingid);
  console.log(req.query.userid);

  try {
    bookingmodel.find({ _id: req.query.bookingid }).then((response) => {
      bookingmodel
        .updateOne(
          { _id: req.query.bookingid },
          {
            $set: {
              status: "Cancelled",
            },
          }
        )
        .then((result) => { 
          WalletModel.updateOne(
            { userId: req.query.userid },
            {
              $inc: {
                walletAmount: response[0].totalAmount,
              },
            }
          ).then((res) => {
            console.log(res);
          });

          bookingmodel.find().then((data) => {
            res.status(200).json(data);
          });
        });
    });
  } catch (error) {}

  //   bookingmodel
  //     .updateOne(
  //       { userId: req.query.id },
  //       {
  //         $set: {
  //           status: "Cancelled",
  //         },
  //       }
  //     )
  //     .then((result) => {
  //         // WalletModel.updateOne({userId:req.query.id},
  //         //     {
  //         //         $set:{
  //         //             walletAmount:
  //         //         }
  //         //     })
  //       bookingmodel.find().then((data) => {
  //         res.status(200).json(data);
  //       });
  //     });
};
