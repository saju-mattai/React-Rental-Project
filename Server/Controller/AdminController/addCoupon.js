const CouponModel = require("../../Models/CouponSchema");

exports.addCoupon = (req, res) => {
  const { coupocode, minprice, Amount, StartingDate, EndingDate } =
    req.body.Coupon;
  const Coupondetails = {
    coupocode,
    minprice,
    Amount,
  };
  try {
    CouponModel.create(Coupondetails).then((data) => {
      res.status(200).json(data);
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
exports.getCoupon = async (req, res) => {
  try {
    CouponModel.find()
      .sort({ createdAt: -1 })
      .then((data) => {
        res.status(200).json(data);
      });
  } catch (error) {}
};

exports.deleteCoupon = async (req, res) => {
  try {
    CouponModel.deleteOne({ _id: req.query.id }).then((response) => {
      CouponModel.find().then((data) => {
        res.status(200).json(data);
      });
    });
  } catch (error) {}
};
