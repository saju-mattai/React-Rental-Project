import React, { useState } from "react";
import Button from "@mui/material/Button";
import AdminDrawer from "../../../Components/AdminDashbored/AdminDrawer";
import { MDBInput, MDBCol, MDBRow, MDBSpinner } from "mdb-react-ui-kit";
import { DatePicker } from "antd";
import moment from "moment";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddCouponAction } from "../../../Redux/Actions/Admin_Action/AddCouponAction";
const { RangePicker } = DatePicker;

function AddCoupon() {
  const divStyle = {
    border: "1px solid black",
    padding: "20px",
    width: "100%",
    boxShadow: "3px 3px",
    height: "auto",
  };
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [startdate, setStartdate] = useState();
  const [enddate, setEnddate] = useState();
  const [coupocode, setCoupocode] = useState();
  const [minprice, setMinprice] = useState();
  const [Amount, setAmount] = useState();

  const selectTimeSlot = (value) => {
    setStartdate(moment(value[0].$d).format("MMMM Do YYYY, h:mm:ss a"));
    setEnddate(moment(value[1].$d).format("MMMM Do YYYY, h:mm:ss a"));
  };
  const Coupon={
    coupocode,
    minprice,
    Amount,
    startdate,
    enddate
  }
  const handleSubmit =()=>{
    dispatch(AddCouponAction(Coupon))
    // setTimeout(() => {
        navigate('/addcoupon')
    // }, 1000);
  }

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
      <form className="container  mt-4 ms-5" style={divStyle}>
        <h3
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Add Coupons
        </h3>
        <MDBRow className="mt-1  ">
          <MDBCol>
            <div>
              <label htmlFor="form3Example2" className="form-label">
                CouponCode
              </label>
            </div>
            <MDBInput
              id="form3Example2"
              onChange={(e) => {
                setCoupocode(e.target.value);
              }}
            />
          </MDBCol>
          <MDBCol>
            <div>
              <label htmlFor="form3Example2" className="form-label">
                MinPrice
              </label>
            </div>
            <MDBInput
              id="form3Example2"
              onChange={(e) => {
                setMinprice(e.target.value);
              }}
            />
          </MDBCol>
          <MDBCol>
            <div>
              <label htmlFor="form3Example2" className="form-label">
                Amount
              </label>
            </div>
            <MDBInput
             onChange={(e) => {
                setAmount(e.target.value);
              }}
             id="form3Example1" />
          </MDBCol>
        </MDBRow>

        <MDBRow className="mt-1  ">
          <MDBCol>
            <div>
              <label htmlFor="form3Example2" className="form-label">
                {/* StartingDate and EndingDate */}
              </label>
            </div>
            <RangePicker
              className="ms-5"
              showTime={{
                format: "HH:mm",
              }}
              format="YYYY-MM-DD HH:mm"
              onChange={selectTimeSlot}
            />
          </MDBCol>

          <MDBCol>
            {/* <div>
              <label htmlFor="form3Example2" className="form-label">
                Amount
              </label>
            </div>
            <MDBInput id="form3Example1" /> */}
            <Button
              className="mt-4"
              style={{
                display: "flex",
              }}
              variant="outlined"
              size="small"
              onClick={handleSubmit}
            >
              Upload
            </Button>
          </MDBCol>
        </MDBRow>

        {/* <MDBRow
          className="mt-5"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
           
            <Button  variant="outlined" size="small">
              Upload
            </Button>
        </MDBRow> */}
      </form>
    </div>
  );
}

export default AddCoupon;
