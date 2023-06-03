const Wallet = require("../../Models/WalletSchema");

exports.getWalletDetails = (req, res) => {
  Wallet.findOne({ userId: req.query.id }).then((data) => {
    res.status(200).json(data);
  })
  .catch((error)=>{
    res.status(400).json(error);

  })
};
