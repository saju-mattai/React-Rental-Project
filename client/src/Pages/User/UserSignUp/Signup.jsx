import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./Signup.css";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserSignUp } from "../../../Redux/Actions/User_Action/SignUpAction";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  // MDBCard,
  // MDBCardBody,
  // MDBCardImage,
  MDBInput,
  // MDBIcon,
  // MDBCheckbox
} from "mdb-react-ui-kit";

const schema = yup.object().shape({
  name: yup
    .string("name should be a string")
    .min(3, "name should have a min length of 3 letters")
    .required("name is required"),
  email: yup
    .string("email should be a string")
    .email("please provide a valid email")
    .required("email address is required"),
  place: yup
    .string("place should be a string")
    .min(3, "place should have a min length of 3 letters")
    .required("name is required"),
  phone: yup
    .string("email should be a string")
    .min(10, "Mobile No should have a minimum length of 10")
    .max(10, "Mobile No  should have a maximum length of 10")
    .required("Mobile No  is required"),
  password: yup
    .string("password should be a string")
    .min(5, "password should have a minimum length of 5")
    .max(12, "password should have a maximum length of 12")
    .required("password is required"),
});

function Signup() {
  // const [name, setName] = useState("")
  // const [email, setEmail] = useState("")
  // const [place, setPlace] = useState("")
  // const [phone, setPhone] = useState("")
  // const [password, setPassword] = useState("")
  // const [confirmpassword, setConfirmPassword] = useState("")
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const dispacth = useDispatch();
  const UserSignUpData = useSelector((state) => state.UserSignUpReducer);

  const submitHandler = async (data) => {
    console.log(data, "lll");
    // setLoading(true);
    const Name = data.name;
    const Email = data.email;
    const Password = data.password;
    const Phone = data.phone;
    const Place = data.place;
    // const handleSignUp = (e) => {
    // e.preventDefault()
    dispacth(UserSignUp(Name, Email, Place, Password, Phone));
    navigate("/login");
    // }
  };

  const handleSignin = () => {
    navigate("/login");
  };

  return (
    // <div>
    <MDBContainer fluid className="p-3 my-5">
      <MDBRow>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Sign Up
        </h1>

        <MDBCol className="mt-5">
          <img
            src="https://img.freepik.com/free-vector/car-rental-concept-illustration_114360-9267.jpg?w=900&t=st=1682503839~exp=1682504439~hmac=9fccc719aa40c4b14494c6e237a540b28fff850c4ee2a7187f6e5ece7631ffdd"
            class="img-fluid"
          />
        </MDBCol>

        <MDBCol className="col md-4">
          <Box
            component="form"
            onSubmit={handleSubmit(submitHandler)}
            sx={{ mt: 1 }}
          >
            {/* <MDBInput onChange={(e) => setName(e.target.value)} label='Name' id='formControlLg' type='text' size="md" />
                    <MDBInput onChange={(e) => setEmail(e.target.value)} label='Email address' id='formControlLg' type='email' size="md" />

                    <MDBInput onChange={(e) => setPlace(e.target.value)} label='Place' id='formControlLg' type='text' size="md" />
                    <MDBInput onChange={(e) => setPhone(e.target.value)} label='Phone' id='formControlLg' type='number' size="md" />
                    <MDBInput onChange={(e) => setPassword(e.target.value)} label='Password' id='formControlLg' type='password' size="md" />
                    <MDBInput onChange={(e) => setConfirmPassword(e.target.value)} label='confirm password' id='formControlLg' type='password' size="md" /> */}

            <TextField
              className="w-75 mt-5"
              id="name"
              name="name"
              type="text"
              label="Name"
              error={!!errors.name}
              helperText={errors.name ? errors.name.message : ""}
              {...register("name")}
              variant="outlined"
            />
            <TextField
              className="w-75 mt-2"
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
              id="place"
              name="place"
              type="text"
              label="Place"
              error={!!errors.place}
              helperText={errors.place ? errors.place.message : ""}
              {...register("place")}
              variant="outlined"
            />
            <TextField
              className="w-75 mt-2"
              id="phone"
              name="phone"
              type="number"
              label="Phone"
              error={!!errors.phone}
              helperText={errors.phone ? errors.phone.message : ""}
              {...register("phone")}
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
            {/* <TextField className='w-75 mt-2' id="outlined-basic" type="password" label="Confirm Password" variant="outlined" /> */}

            {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" style={{width:10px}} /> */}

            {/* <div className="d-flex justify-content-between mx-4 mb-4">
                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                        <a href="!#">Forgot password?</a>
                    </div> */}

            {/* <button onClick={handleSubmit} className="mb-4 w-100" size="lg">Sign Up</button> */}
            {/* <Button onClick={handleSubmit} variant="outlined" color="success">
                        Sign Up
                    </Button> */}
            <Button type="submit" className="w-75 mt-2" variant="outlined">
              Sign Up
            </Button>
          </Box>

          <div className="divider d-flex align-items-center my-4 w-75 mt-4">
            <p className="text-center fw-bold mx-3 mb-0">OR</p>
          </div>
          <div className=" mb-4">
            <Button onClick={handleSignin} className="w-25 " variant="outlined">
              Sign in
            </Button>
            <Button className="w-50 ms-1" variant="outlined">
              Sign Up With Google{" "}
            </Button>
          </div>
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
    // </div>
  );
}

export default Signup;
