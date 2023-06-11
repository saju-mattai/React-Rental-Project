const bookingModel = require("../../Models/BookingSchema");
const vehiclemodel = require("../../Models/AdminModels/VehicleModel");
const WalletModel = require("../../Models/WalletSchema");
const Stripe = require("stripe");
const moment = require("moment");
require("dotenv").config();

const stripe = Stripe(process.env.STRIPE_KEY);
exports.booking = async (req, res) => {
  let {
    userId,
    BikeId,
    totalHour,
    totalAmount,
    HelmetRequired,
    bookedTimeSlots,
    BikeName,
    BikePhoto,
    Description,
    Location,
    UserName,
    paymentMethod,
  } = req.body.ReqObj;
  let { startdate, enddate } = bookedTimeSlots;

  let startingTime = startdate;
  let sTime = moment(startingTime, "MMMM Do YYYY, h:mm:ss a");
  let startTimeStamp = sTime.unix();
  let endingTime = enddate;
  let status = "allowed";

  let check = await vehiclemodel.findOne({ _id: BikeId });
  let isBooked = await bookingModel.findOne({ BikeId: BikeId });

  let currentTime = moment().format("MMMM Do YYYY, h:mm:ss a");
  let currTime = moment(currentTime, "MMMM Do YYYY, h:mm:ss a");
  const currTimeStamp = currTime.unix();

  if (startTimeStamp < currTimeStamp) {
    res
      .status(400)
      .json("Selected Day or Date is less than current day or date");
  } else if (totalHour === 0) {
    res.status(400).json("Rent time should be min 1 hr");
  } else {
    for (let i = 0; i < check.BookedTimeSlots.length; i++) {
      console.log("start tme", check.BookedTimeSlots[i].startdate);
      console.log("end Time", check.BookedTimeSlots[i].enddate);

      let checkEnd = moment(
        check.BookedTimeSlots[i].enddate,
        "MMMM Do YYYY, h:mm:ss a"
      );
      let checkTimeStamp = checkEnd.unix();

      if (startTimeStamp > checkTimeStamp) {
        console.log("OKK");
        status = "allowed";
      } else if (
        startTimeStamp &&
        startTimeStamp <= checkTimeStamp 
        // &&
        // isBooked?.status !== COMPLETED &&
        // isBooked?.status !== Cancelled
      ) {
        console.log("set");
        status = "not allowed";
      }
    }
    if (status === "allowed") {
    if (req.body.ReqObj.paymentMethod) {
      try {
        const Amount = await WalletModel.findOne({ userId: userId });
        if (totalAmount <= Amount.walletAmount) {
          paymentMethod = "Wallet";
          let details = {
            userId,
            BikeId,
            totalHour,
            totalAmount,
            HelmetRequired,
            startdate,
            enddate,
            BikeName,
            BikePhoto,
            Description,
            Location,
            UserName,
            paymentMethod,
          };
          let bookedTimeSlots = {
            startdate,
            enddate,
          };
          bookingModel.create(details).then((data) => {
            vehiclemodel
              .findOne({ _id: data.BikeId })
              .then(async (result) => {
                result.BookedTimeSlots.push(bookedTimeSlots);
                vehiclemodel
                  .updateOne(
                    { _id: result._id },
                    {
                      $set: {
                        Vstatus: "Rented",
                      },
                    }
                  )
                  .then((res) => {});
                await result.save();
                res.status(200).json(details);
              })
              .catch((error) => {
                console.error("Error finding vehicle model:", error);
              });
          });
          WalletModel.updateOne(
            { userId: userId },
            {
              $inc: {
                walletAmount: -totalAmount,
              },
            }
          ).then((res) => {
            console.log(res);
          });
        } else {
          res.status(400).json("Insufficient balance");
        }
      } catch (error) {
        return res.status(400).json(error);
      }
    } else {
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              currency: "inr",
              product_data: {
                name: BikeName,
                images: [BikePhoto],
                description: Description,
              },
              unit_amount: totalAmount * 100,
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${process.env.CLIENT_URL}/checkout-success?userId=${userId}
      &BikeName=${BikeName}&Location=${Location}
      &Description=${Description}&BikeId=${BikeId}&totalAmount=${totalAmount}&paymentMethod=${paymentMethod}
      &totalHour=${totalHour}&HelmetRequired=${HelmetRequired}&enddate=${enddate}&startdate=${startdate}&BikePhoto=${BikePhoto}&UserName=${UserName}`,
        cancel_url: `${process.env.CLIENT_URL}/booking`,
        metadata: {
          bike_id: BikeId,
        },
      });
      // res.send({ url: session.url });
      res.status(200).json({
        url: session.url,
      });
    }
     } else if (status === 'not allowed') {
      res
        .status(400)
        .json(
          "Bike has been booked for the selected time..please change the time to book"
        );
    }
  }
};
