const CouponModel = require("../../Models/CouponSchema");

exports.addCoupon = (req, res) => {
  console.log(req.body);
  const { coupocode, minprice, Amount, StartingDate, EndingDate } = req.body.Coupon;
  const Coupondetails = {
    coupocode,
    minprice,
    Amount,
    StartingDate,
    EndingDate,
  };
  try {
    CouponModel.create(Coupondetails).then((data) => {
      res.status(200).json(data);
    });
  } catch (error) {
    res.status(500).json(error); 
  }
};
