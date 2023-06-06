import React, { useEffect, useState } from "react";
import "./BookingScreen.css";
import { User_Action_Types } from "../../../Redux/Constants/User_Constants/UserConstants";

import { message } from "antd";
import {
  MDBSpinner,
  MDBInput,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn,
} from "mdb-react-ui-kit";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useForm } from "react-hook-form";
import Usernavbar from "../../../Components/UserNavBar/Usernavbar";
import { useLocation, useNavigate } from "react-router-dom";
import "./BookingScreen.css";
import moment from "moment";
import { Button, Checkbox, DatePicker } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { BookingAction } from "../../../Redux/Actions/User_Action/BookingAction";
import { applyCouponAction } from "../../../Redux/Actions/User_Action/ApplyCouponAction";
import { BookingApi } from "../../../API/User/ApiCalls";
const { RangePicker } = DatePicker;

function Booking() {
  const location = useLocation();
  const { filteredData } = location.state;
  const [loading, setLoading] = useState(false);

  const newtotalamount = useSelector((state) => state.applyCouponReducer.Data);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [startdate, setStartdate] = useState();
  const [enddate, setEnddate] = useState();
  const [totalHour, setTotalHour] = useState(0);
  const [helmet, setHelmet] = useState(false);
  let [totalAmount, setTotalAmount] = useState(0);
  const [showtotal, setShowtotal] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [paymentMethod, setpaymentMethod] = useState(false);

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   resolver: yupResolver(schema),
  // });

  const selectTimeSlot = (value) => {
    setStartdate(moment(value[0].$d).format("MMMM Do YYYY, h:mm:ss a"));
    setEnddate(moment(value[1].$d).format("MMMM Do YYYY, h:mm:ss a"));
    setTotalHour(value[1].diff(value[0], "hours"));
    setShowtotal(true);
  };
  function disabledDate(current) {
    // Disable dates before today's date
    return current && current < moment().startOf('day');
  }

  useEffect(() => {
    setTotalAmount(totalHour * filteredData[0].Vprice);
    if (helmet) {
      setTotalAmount(totalAmount + 100);
      setHelmet(true);
    }
  }, [helmet, totalHour]);

  let CouponDetails = {
    coupon,
    totalAmount,
  };
  const handleCoupon = () => {
    dispatch(applyCouponAction(CouponDetails));
  };
  if (newtotalamount) {
    totalAmount = newtotalamount;
  }
  if (newtotalamount && helmet) {
    totalAmount = newtotalamount + 100;
  }
  // if(!newtotalamount && helmet === true){
  //   totalAmount = totalAmount + 100;
  // }

  const handelSubmit = () => {
    setLoading(true);
    if (newtotalamount) {
      totalAmount = newtotalamount;
    }
    if (newtotalamount && helmet) {
      totalAmount = newtotalamount + 100;
    }
    const ReqObj = {
      userId: JSON.parse(localStorage.getItem("UserInfo"))?.id,
      UserName: JSON.parse(localStorage.getItem("UserInfo"))?.name,
      BikeId: filteredData[0]._id,
      BikeName: filteredData[0].Vname,
      BikePhoto: filteredData[0].Vphoto[0].url,
      Description: filteredData[0].Vdesc,
      totalHour,
      totalAmount,
      HelmetRequired: helmet,
      bookedTimeSlots: {
        startdate,
        enddate,
      },
      paymentMethod,
    };

    BookingApi(ReqObj)
      .then((data) => {
        if (data.data.url) {
          window.location.href = data.data.url;
        }
        if (data.data.paymentMethod === "Wallet") {
          message.success("Booked Successfully");
          setTimeout(() => {
            navigate("/myrent");
          }, 1000);
        }
        dispatch(BookingAction(data.data));
        setLoading(false);
      })
      .catch((err) => {
        dispatch({
          type: User_Action_Types.BOOKING_FAIL,
          payload: err.resoponse,
        });
        message.error(
          err.response && err.response.data
            ? err.response.data
            : "Error occurred"
        );
      });
  };

  return (
    <>
      <Usernavbar />
      <div>
          <h3 className="text-center" > <b> Check Out</b> </h3>
        </div>
      <div className="row  ms-5 mt-4">
        <div
          className="col-6 "
          style={{
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          <img
            src={filteredData[0].Vphoto[0].url}
            alt=""
            srcset=""
            className="bikeimg"
          />
        </div>
        <div
          className="col-6"
          //   style={{ justifyContent: "center", textAlign: "center" }}
        >
          <div className="divider d-flex align-items-center my-4 w-75 ms-5 mt-0  ">
            <p className="text-center  mx-3 mb-0">Bike Info</p>
          </div>
          <div>
            <p className="text-end  w-75 ms-5 mt-1 ">
              Bike Name : {filteredData[0].Vname}
            </p>
            <p className="text-end  w-75 ms-5 mt-1 ">
              Bike Brand : {filteredData[0].Vbrand}
            </p>
            <p className="text-end  w-75 ms-5 mt-1 ">
              Bike Model : {filteredData[0].Vmodel}
            </p>
          </div>

          <div className="divider d-flex align-items-center my-4 w-75 ms-5 mt-0  ">
            <p className="text-center  mx-3 mb-0">Time Slot</p>
          </div>
          <div className=" d-flex justify-content-end  w-75 ">
            <RangePicker
              className=""
              showTime={{
                format: "HH:mm",
              }}
              format="YYYY-MM-DD HH:mm"
              onChange={selectTimeSlot}
              disabledDate={disabledDate} // Set the disabledDate function
            />
          </div>
          {/* <div className="d-flex justify-content-end container ms-5 mt-2 me-2 w-50 "> */}
          <Checkbox
            onChange={(e) => {
              if (e.target.checked) {
                setHelmet(true);
              } else {
                setHelmet(false);
              }
            }}
          >
            Do you want a Helmet for riding
          </Checkbox>
          {/* </div> */}
          <div className="d-flex justify-content-start mt-2 w-50 ">
            <MDBInput
              className="mt-auto"
              onChange={(e) => {
                setCoupon(e.target.value);
              }}
              placeholder="Enter Coupon Code"
              id="form1"
              type="text"
            />
          </div>
          <Button
            onClick={handleCoupon}
            variant="outlined"
            className="ms-2 mt-2"
          >
            Apply
          </Button>

          <div
            className="container ms-5"
            style={{ height: "300px", width: "500px" }}
          >
            {showtotal ? (
              <MDBCard alignment="center " className="ms-5 mb-5">
                <MDBCardHeader>Check Out</MDBCardHeader>
                <MDBCardBody>
                  <p className="d-flex justify-content-end">
                    Total Hours : <b>{totalHour}hr</b>
                  </p>
                  {helmet ? (
                    <p className="d-flex justify-content-end">
                      Extra Helmet : <b>Rs.100</b>{" "}
                    </p>
                  ) : (
                    ""
                  )}
                  <p className="d-flex justify-content-end">
                    Rent Per Hour : <b>Rs.{filteredData[0].Vprice}</b>{" "}
                  </p>
                  <h3 className="d-flex justify-content-end">
                    Total Amout :Rs. {totalAmount}
                  </h3>

                  <FormControl className="mt-5">
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="Wallet"
                        control={<Radio />}
                        onChange={(e) => {
                          setpaymentMethod(true);
                        }}
                        label="Wallet"
                      />
                      <FormControlLabel
                        value="Stripe"
                        onChange={(e) => {
                          setpaymentMethod(false);
                        }}
                        control={<Radio />}
                        label="Stripe"
                      />
                      {/* <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel> */}
                    </RadioGroup>
                  </FormControl>
                  <Button
                    className="ms-5 mt-5"
                    onClick={handelSubmit}
                    variant="outlined"
                  >
                    Book Now
                  </Button>
                </MDBCardBody>
              </MDBCard>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Booking;
