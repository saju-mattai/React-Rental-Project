import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import OtpInput from "otp-input-react";
import { message } from "antd";

import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../../FireBase/config";
import { toast, Toaster } from "react-hot-toast";
import { LoginOtpAction } from "../../../Redux/Actions/User_Action/LoginOtpAction";
import { LoginOtpApi } from "../../../API/User/ApiCalls";
import { User_Action_Types } from "../../../Redux/Constants/User_Constants/UserConstants";

function Userlogin() {
  const Userlogin = useSelector((state) => state.UserLoginReducer);
  const { loading, loginuserErr, loginuserdata } = Userlogin;
  console.log(loginuserErr);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");
  const [phone, setPhone] = useState("");
  const [showotp, setShowotp] = useState(false);

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            // onSignup();
            handleLoginOtp();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  const handleLoginOtp = (e) => {
    let mobile = phone.substring(2);
    LoginOtpApi(mobile)
      .then((data) => {
        dispatch(LoginOtpAction(data.data));
        localStorage.setItem("UserInfo", JSON.stringify(data.data));
        if (data.data) {
          onCaptchVerify();
          const appVerifier = window.recaptchaVerifier;

          const formatPh = "+" + phone;

          signInWithPhoneNumber(auth, formatPh, appVerifier)
            .then((confirmationResult) => {
              window.confirmationResult = confirmationResult;
              setShowotp(true);

              toast.success("OTP sended successfully!");
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((err) => {
        dispatch({
          type: User_Action_Types.LOGIN_WITH_OTP_FAIL,
          payload: err.response.data,
        });
      });
  };

  function onOTPVerify() {
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        // toast.success(res);
      message.success("Login Successfully");

        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        message.error("Please Enter Correct OTP");

        // toast.success(err);
      });
  }

  return (
    <MDBContainer fluid className="p-3 my-5">
      <Toaster toastOptions={{ duration: 4000 }} />
      <div id="recaptcha-container"></div>

      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        Verify Your Phone Number
      </h1>

      <MDBRow>
        <MDBCol className="mt-3">
          <img
            src="https://img.freepik.com/free-vector/car-rental-concept-illustration_114360-9267.jpg?w=900&t=st=1682503839~exp=1682504439~hmac=9fccc719aa40c4b14494c6e237a540b28fff850c4ee2a7187f6e5ece7631ffdd"
            class="img-fluid"
          />
        </MDBCol>

        {showotp ? (
          <>
            <MDBCol col="4" md="6">
              <Box component="form" sx={{ mt: 7 }}>
                <label
                  htmlFor="otp"
                  className="ms-5"
                  style={{ color: "black" }}
                >
                  Enter your OTP
                </label>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  className="ms-5"
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  autoFocus
                ></OtpInput>
              </Box>

              <Button
                onClick={onOTPVerify}
                className="w-50 mt-4 ms-5"
                variant="outlined"
              >
                Verify Otp
              </Button>
            </MDBCol>
          </>
        ) : (
          <>
            <MDBCol col="4" md="6">
              <Box component="form" sx={{ mt: 7 }}>
                <label
                  htmlFor="otp"
                  className="ms-5"
                  style={{ color: "black" }}
                ></label>
                {loginuserErr ? <p style={{color:"red"}} className="ms-5">{loginuserErr}</p> : ""}

                <PhoneInput
                  className="w-50 mt-4 ms-5"
                  country={"in"}
                  value={phone}
                  onChange={(e) => {
                    console.log(e);
                    setPhone(e);
                  }}
                />
              </Box>
              <Button
                onClick={handleLoginOtp}
                className="w-50 mt-4 ms-5"
                variant="outlined"
              >
                Send Code Via SMS
              </Button>
            </MDBCol>
          </>
        )}
      </MDBRow>
    </MDBContainer>
  );
}

export default Userlogin;
