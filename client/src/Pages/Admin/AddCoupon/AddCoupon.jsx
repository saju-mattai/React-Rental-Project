import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AdminDrawer from "../../../Components/AdminDashbored/AdminDrawer";
import { MDBInput, MDBCol, MDBRow, MDBSpinner } from "mdb-react-ui-kit";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { DatePicker } from "antd";
import moment from "moment";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddCouponAction } from "../../../Redux/Actions/Admin_Action/AddCouponAction";
const { RangePicker } = DatePicker;

const schema = yup.object().shape({
  couponcode: yup
    .string("couponcode should be a string")
    .min(3, "couponcode should have a min length of 3 letters")
    .required("couponcode is required"),

  minprice: yup
    .string("minprice should be a number")
    .min(1, "minprice should have a minimum length of 1")
    .required("minprice  is required"),
  amount: yup
    .string("amount should be a number")
    .min(1, "amount should have a minimum length of 1")
    .required("amount  is required"),
});

function AddCoupon() {
  const divStyle = {
    border: "1px solid black",
    padding: "20px",
    width: "100%",
    boxShadow: "3px 3px",
    height: "auto",
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [startdate, setStartdate] = useState();
  const [enddate, setEnddate] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const selectTimeSlot = (value) => {
    setStartdate(moment(value[0].$d).format("MMMM Do YYYY, h:mm:ss a"));
    setEnddate(moment(value[1].$d).format("MMMM Do YYYY, h:mm:ss a"));
  };

  const submitHandler = async (data) => {
    const Coupon = {
      coupocode: data.couponcode,
      minprice: data.minprice,
      Amount: data.amount,
      startdate,
      enddate,
    };
    console.log("data", data);
    dispatch(AddCouponAction(Coupon));
    // setTimeout(() => {
    navigate("/addcoupon");
    // }, 1000);
  };

  return (
    <div
      className='mt-5 ms-5 col-10 col-md-4"  '
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AdminDrawer />
      <MDBCol className="container  mt-4 ms-5" style={divStyle}>
        <h3
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Add Coupons
        </h3>
        <Box
          component="form"
          onSubmit={handleSubmit(submitHandler)}
          sx={{ mt: 1 }}
        >
          <MDBRow className="mt-1  ">
            {/* <MDBCol>
              <div>
                <label htmlFor="form3Example2" className="form-label">
                  CouponCode
                </label>
              </div>
              <MDBInput
                id="couponcode"
                name="couponcode"
                type="text"
                error={!!errors.couponcode}
                helperText={errors.couponcode ? errors.couponcode.message : ""}
                {...register("couponcode")}
              />
            </MDBCol> */}
            <MDBCol>
              <TextField
                id="couponcode"
                name="couponcode"
                type="text"
                label="CouponCode"
                error={!!errors.couponcode}
                helperText={errors.couponcode ? errors.couponcode.message : ""}
                {...register("couponcode")}
                variant="outlined"
              />
            </MDBCol>
            <MDBCol>
              <TextField
                id="minprice"
                name="minprice"
                type="number"
                label="MinPrice"
                error={!!errors.minprice}
                helperText={errors.minprice ? errors.minprice.message : ""}
                {...register("minprice")}
                variant="outlined"
              />
            </MDBCol>

            <MDBCol>
              <TextField
                id="amount"
                name="amount"
                type="number"
                label="Amount"
                error={!!errors.amount}
                helperText={errors.amount ? errors.amount.message : ""}
                {...register("amount")}
                variant="outlined"
              />
            </MDBCol>

            {/* <MDBCol>
              <div>
                <label htmlFor="form3Example2" className="form-label">
                  MinPrice
                </label>
              </div>
              <MDBInput
                id="minprice"
                name="minprice"
                type="number"
                error={!!errors.minprice}
                helperText={errors.minprice ? errors.minprice.message : ""}
                {...register("minprice")}
              />
            </MDBCol>
            <MDBCol>
              <div>
                <label htmlFor="form3Example2" className="form-label">
                  Amount
                </label>
              </div>
              <MDBInput
                name="amount"
                type="number"
                error={!!errors.amount}
                helperText={errors.amount ? errors.amount.message : ""}
                {...register("amount")}
                id="amount"
              />
            </MDBCol> */}
          </MDBRow>

          <MDBRow className="mt-1  ">
            <MDBCol>
              <div>
                <label htmlFor="form3Example2" className="form-label">
                  {/* StartingDate and EndingDate */}
                </label>
              </div>
              <RangePicker
                {...register("date", {
                  required: true,
                  minLength: 2,
                })}
                className="ms-5"
                showTime={{
                  format: "HH:mm",
                }}
                format="YYYY-MM-DD HH:mm"
                onChange={selectTimeSlot}
              />
              {errors.date && (
                <p style={{ color: "red" }}>Please enter a date</p>
              )}
            </MDBCol>

            <MDBCol>
              {/* <div>
              <label htmlFor="form3Example2" className="form-label">
                Amount
              </label>
            </div>
            <MDBInput id="form3Example1" /> */}
              <Button
                type="submit"
                className="mt-4"
                style={{
                  display: "flex",
                }}
                variant="outlined"
                size="small"
              >
                Upload
              </Button>
            </MDBCol>
          </MDBRow>
        </Box>
      </MDBCol>
    </div>
  );
}

export default AddCoupon;
