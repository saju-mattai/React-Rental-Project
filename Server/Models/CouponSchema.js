const mongoose = require("mongoose");
const moment = require("moment");

const CouponSchema = new mongoose.Schema(
  {
    coupocode: { type: String },
    minprice: { type: Number },
    Amount: { type: Number },
   
  },
  { timestamps: true }
);

const CouponModel = mongoose.model("Coupons", CouponSchema);

module.exports = CouponModel;
