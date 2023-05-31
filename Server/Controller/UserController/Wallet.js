const Wallet = require("../../Models/WalletSchema");

exports.getWalletDetails = (req, res) => {
  console.log(req.query.id );
  Wallet.findOne({ userId: req.query.id }).then((data) => {
    console.log(data,'llll');

    res.status(200).json(data);
  })
  .catch((error)=>{
    console.log(error);
    res.status(400).json(error);

  })
};
