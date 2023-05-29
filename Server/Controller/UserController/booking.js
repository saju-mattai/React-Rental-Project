const bookingModel = require("../../Models/BookingSchema");
const vehiclemodel = require("../../Models/AdminModels/VehicleModel");
const Stripe = require("stripe");
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
    UserName,
    paymentMethod
  } = req.body.ReqObj;

  let { startdate, enddate } = bookedTimeSlots;
  if (req.body.ReqObj.paymentMethod) {
    paymentMethod = 'Wallet'
     let details = {
      userId,
      BikeId,
      totalHour,
      totalAmount,
      HelmetRequired,
      startdate,
      enddate,
      // bookedTimeSlots,
      BikeName,
      BikePhoto,
      Description,
      UserName,
      paymentMethod
    }
let bookedTimeSlots = {
  startdate,
  enddate

}
    
    try {
      bookingModel.create(details).then((data) => {
        vehiclemodel
          .findOne({ _id: data.BikeId })
          .then(async (result) => {
            result.BookedTimeSlots.push(bookedTimeSlots);
            await result.save();
            res.status(200).json(details)
          })
          .catch((error) => {
            console.error("Error finding vehicle model:", error);
          });
      });
    } catch (error) {
      console.log("error,error", error);
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
    &BikeName=${BikeName}
    &Description=${Description}&BikeId=${BikeId}&totalAmount=${totalAmount}
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
};
