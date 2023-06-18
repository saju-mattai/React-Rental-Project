import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AdminDrawer from "../../../Components/AdminDashbored/AdminDrawer";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import {
  MDBCol,
  MDBRow,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { DatePicker } from "antd";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddCouponAction } from "../../../Redux/Actions/Admin_Action/AddCouponAction";
import { getCouponAction } from "../../../Redux/Actions/Admin_Action/GetCouponAction";
import { deleteCouponAction } from "../../../Redux/Actions/Admin_Action/DeleteCouponAction";
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitHandler = async (data) => {
    const Coupon = {
      coupocode: data.couponcode,
      minprice: data.minprice,
      Amount: data.amount,
    };
    dispatch(AddCouponAction(Coupon));
    setTimeout(() => {
      navigate("/addcoupon");
      dispatch(getCouponAction());
    }, 1000);
  };

  useEffect(() => {
    dispatch(getCouponAction());
  }, []);
  const Coupon = useSelector((state) => state.DeleteCouponReducer.Data);
  console.log(Coupon);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteCouponAction(id));
        dispatch(getCouponAction());
        Swal.fire("Deleted!", "Your vehicle has been deleted.", "success");
      }
    });
  };

  return (
    <>
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
              <MDBCol>
                <TextField
                  id="couponcode"
                  name="couponcode"
                  type="text"
                  label="CouponCode"
                  error={!!errors.couponcode}
                  helperText={
                    errors.couponcode ? errors.couponcode.message : ""
                  }
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
            </MDBRow>

            <MDBRow className="mt-1  ">
             

              <MDBCol>
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
      <MDBTable
        className="mt-5 container w-75 border   "
      >
        <MDBTableHead dark>
          <tr>
            <th scope="col">SI</th>
            <th scope="col">CouponCode</th>
            <th scope="col">MinPrice</th>
            <th scope="col">Amount</th>
            <th scope="col">Delete</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {Coupon
            ? Coupon?.map((item, i) => {
                return (
                  <tr>
                    <th scope="row">{i + 1}</th>
                    <td>{item.coupocode}</td>
                    <td>{item.minprice}</td>
                    <td>{item.Amount}</td>

                    <td>
                      {" "}
                      <Button
                        onClick={(e) => {
                          handleDelete(item._id);
                        }}
                        color="error"
                        variant="outlined"
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })
            : ""}
        </MDBTableBody>
      </MDBTable>
    </>
  );
}

export default AddCoupon;
