const bookingModel = require("../../Models/BookingSchema");
const vehiclemodel = require("../../Models/AdminModels/VehicleModel");
const UserModel = require("../../Models/UserModels/UserModel");

exports.getAllDetails = async (req, res) => {
  try {
    const [
      totalUsers,
      totalBikes,
      totalRentRequests,
      totalBookings,
      //   totalPendingBookings,
      //   totalOnRide,
      //   totalCancelled,
      totalPendingRequests,
      totalRejectedRequests,
      totalAcceptedRequests,
      getWalletPayment,
      getStripePayment
    ] = await Promise.all([
      UserModel.countDocuments(),
      vehiclemodel.countDocuments({ Vrequest: "Accepted" }),
      vehiclemodel.countDocuments({ Vrequest: "Pending" }),
      bookingModel.countDocuments(),
      //   bookingSchema.countDocuments({ status: "Booked" }),
      //   bookingSchema.countDocuments({ status: "onRide" }),
      //   bookingSchema.countDocuments({ status: "Cancelled" }),
      vehiclemodel.countDocuments({ Vrequest: "Pending" }),
      vehiclemodel.countDocuments({ Vrequest: "Rejected" }),
      vehiclemodel.countDocuments({ Vrequest: "Accepted" }),
      bookingModel.countDocuments({paymentMethod:"Wallet"}),
      bookingModel.countDocuments({paymentMethod:"Stripe"}),

    ]);


    const data = {
        totalUsers,
        totalBikes,
        totalRentRequests,
        totalBookings,
        // totalPendingBookings,
        // totalOnRide,
        // totalCancelled,
        totalPendingRequests,
        totalRejectedRequests,
        totalAcceptedRequests,
        getWalletPayment,
        getStripePayment,
        // totalAmountCompletedBookings: bookingTotalAmount[0]?.totalAmount || 0,
      };
  
      res.status(200).json(data);
  } catch (error) {}
};
