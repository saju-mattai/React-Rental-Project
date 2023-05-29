const mongoose = require("mongoose");
const moment =require('moment')
const WalletSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    walletAmount: {
      type: Number,
      default: 0,
    },
    // walletHistory: {
    //   type: [
    //     {
    //       amountAdded: {
    //         type: Number,
    //       },
    //       amountDeducted: {
    //         type: Number,
    //       },
    //       transactionType: {
    //         type: String,
    //       },
    //       Date: {
    //         type: String,
    //         default: moment().format("MMMM Do YYYY"),
    //       },
    //     },
    //   ],
    // },
  },
  { timestamps: true }
);

const WalletModel = mongoose.model("Wallet", WalletSchema);

module.exports = WalletModel;
