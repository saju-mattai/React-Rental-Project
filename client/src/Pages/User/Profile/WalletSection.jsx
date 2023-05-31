import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getWalletAction } from "../../../Redux/Actions/User_Action/GetWalletAction";

function WalletSection() {
  const Wallet = useSelector((state) => state.getWalletReducer.WalletData);
  console.log(Wallet);
const userId = JSON.parse(localStorage.getItem("UserInfo")).id

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWalletAction(userId));
  }, []);

  return (
    <div
      className="container "
      style={{
        height: "92px",
        width: "37%",
        border: "1px solid black",
        marginBottom: "4px",
        marginTop: "-27px",
      }}
    >
      <div className="me-auto mt-4">
        <h6>Wallet Amount : {Wallet?.walletAmount}</h6>
      </div>
      <Button
        style={{ marginBottom: "4px", width: "40%", marginLeft: "9em" }}
        variant="outlined"
      >
        My Wallet
      </Button>
    </div>
  );
}

export default WalletSection;
