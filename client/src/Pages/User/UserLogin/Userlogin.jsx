import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserLoginAction } from "../../../Redux/Actions/User_Action/UserLoginAction";
import UserHome from "../UserHome/UserHome";

const schema = yup.object().shape({
  email: yup
    .string("email should be a string")
    .email("please provide a valid email")
    .required("email address is required"),

  password: yup
    .string("password should be a string")
    .min(5, "password should have a minimum length of 5")
    .max(12, "password should have a maximum length of 12")
    .required("password is required"),
});

function Userlogin() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitHandler = async (data) => {
    const Email = data.email;
    const Password = data.password;

    dispatch(UserLoginAction(Email, Password));
  };

  const dispatch = useDispatch();
  const Userlogin = useSelector((state) => state.UserLoginReducer);
  console.log("Userlogin", Userlogin);
  const { loading, loginuserdata, loginuserErr } = Userlogin;
  console.log(loginuserErr);

  //   const handleLogin = (e) => {
  // e.preventDefault();
  // navigate('/')
  //   };
  const handleSignup = () => {
    navigate("/signup");
  };

  const handleLoginOtp = () => {
    navigate('/otplogin')
  };

  // const [value, setValue] = useState("");
  // const handleClick = () => {
  //   signInWithPopup(auth, provider).then((data) => {
  //     setValue(data.user.email);
  //     localStorage.setItem("email", data.user.email);
  //   });
  // };
  // useEffect(() => {
  //   setValue(localStorage.getItem("email"));
  // });

  return (
    <MDBContainer fluid className="p-3 my-5">
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        Login In{" "}
      </h1>

      <MDBRow>
        <MDBCol className="mt-3">
          <img
            src="https://img.freepik.com/free-vector/car-rental-concept-illustration_114360-9267.jpg?w=900&t=st=1682503839~exp=1682504439~hmac=9fccc719aa40c4b14494c6e237a540b28fff850c4ee2a7187f6e5ece7631ffdd"
            class="img-fluid"
          />
        </MDBCol>

        <MDBCol col="4" md="6">
          <Box
            component="form"
            onSubmit={handleSubmit(submitHandler)}
            sx={{ mt: 1 }}
          >
            {loginuserErr ? (
              <p style={{ color: "red" }}>{loginuserErr.data}</p>
            ) : (
              ""
            )}
            {/* <MDBInput onChange={(e) => setEmail(e.target.value)} label='Email address' id='formControlLg' type='email' size="lg" required />
                    <MDBInput onChange={(e) => setPassword(e.target.value)} label='Password' id='formControlLg' type='password' size="lg" required /> */}
            <TextField
              className="w-75 mt-5"
              id="email"
              name="email"
              type="email"
              label="Email"
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : ""}
              {...register("email")}
              variant="outlined"
            />

            <TextField
              className="w-75 mt-2"
              id="password"
              name="password"
              type="password"
              label="Password"
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : ""}
              {...register("password")}
              variant="outlined"
            />

            <Button type="submit" className="w-75 mt-2" variant="outlined">
              Login
            </Button>
          </Box>
          <div className="divider d-flex align-items-center my-4 w-75 mt-4">
            <p className="text-center fw-bold mx-3 mb-0">OR</p>
          </div>
          <Button
            onClick={handleSignup}
            className="w-75 mt-1"
            variant="outlined"
          >
            Don't have an account? Sign Up Here
          </Button>
          

          <Button
            onClick={handleLoginOtp}
            className="w-75 mt-2"
            variant="outlined"
          >
            Login With OTP
          </Button>
          {/* https://www.youtube.com/watch?v=pdd04JzJrDw&t=106s */}
          {/* 
          {value ? (
           <UserHome />
          ) : (
            <button onClick={handleClick}>Signin With Google</button>
          )} */}

          {/* <div className="d-flex justify-content-between mx-4 mb-4">
                        <a href="!#" wrapperClass='ml-2' >Don't Have an Account?</a>

                        <a href="!#">Forgot password?</a>
                    </div> */}

          {/* <div className="divider d-flex align-items-center my-4">
                        <p className="text-center fw-bold mx-3 mb-0">OR</p>
                    </div> */}

          {/* <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#3b5998' }}>
                        <MDBIcon fab icon="facebook-f" className="mx-2" />
                        Continue with facebook
                    </MDBBtn>

                    <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#55acee' }}>
                        <MDBIcon fab icon="twitter" className="mx-2" />
                        Continue with twitter
                    </MDBBtn> */}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Userlogin;
