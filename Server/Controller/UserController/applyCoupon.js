const CouponModel = require("../../Models/CouponSchema");

exports.applyCoupon = (req, res) => {
  const { coupon, totalAmount } = req.body.data;
  console.log(coupon, totalAmount);
  CouponModel.findOne({ coupocode: coupon })
    .then((data) => {
        if (data) {
      let NewTotalAmount = totalAmount - data.Amount;
      res.status(200).json({msg:"Coupon Added SuccessFully",NewTotalAmount});
        } else {
          res.status(400).json("Invalid Coupon");
        }
    })
    .catch((error) => {
      //   res.status(500).json(error);
      res.status(400).json(error);
    });
};
