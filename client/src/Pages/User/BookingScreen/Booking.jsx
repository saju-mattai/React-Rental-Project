import React, { useEffect, useState } from "react";
import { MDBSpinner } from "mdb-react-ui-kit";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@mui/material/Button";
import Usernavbar from "../../../Components/UserNavBar/Usernavbar";
import { useLocation, useNavigate } from "react-router-dom";
import "./BookingScreen.css";
import moment from "moment";
import { Checkbox, DatePicker, Space } from "antd";
import { useDispatch } from "react-redux";
import { BookingAction } from "../../../Redux/Actions/User_Action/BookingAction";
const { RangePicker } = DatePicker;

function Booking() {
  const location = useLocation();
  const { filteredData } = location.state;
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [startdate, setStartdate] = useState();
  const [enddate, setEnddate] = useState();
  const [totalHour, setTotalHour] = useState(0);
  const [helmet, setHelmet] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   resolver: yupResolver(schema),
  // });

  const selectTimeSlot = (value) => {
    setStartdate(moment(value[0]).format("MMM DD YYYY HH:mm"));

    setEnddate(moment(value[1]).format("MMM DD YYYY HH:mm"));

    setTotalHour(value[1].diff(value[0], "hours"));
  };

  useEffect(() => {
    setTotalAmount(totalHour * filteredData[0].Vprice);
    if (helmet) {
      setTotalAmount(totalAmount + 30 * totalHour);
    }
  }, [helmet, totalHour]);

  // console.log();
  const handleBooking = () => {
    const ReqObj = {
      user: JSON.parse(localStorage.getItem("UserInfo")).id,
      BikeId: filteredData[0]._id,
      totalHour,
      totalAmount,
      HelmetRequired: helmet,
      bookedTimeSlots: {
        startdate,
        enddate,
      },
    };
    setLoading(true);
    dispatch(BookingAction(ReqObj));
    setLoading(false);
    setTimeout(() => {
      navigate("/bikes");
    }, 1000);
  };

  return (
    <>
      <Usernavbar />

      <div className="row  ms-5 mt-5">
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
          <div className="mt-2 d-flex justify-content-end  w-75 ms-5">
            {/* <DatePicker.RangePicker
              format="MMM-DD-YYYY-HHmm"
              showTime={{ format: "HH:mm" }}
              onChange={selectTimeSlot}
            /> */}
            <RangePicker
              className="ms-5"
              showTime={{
                format: "HH:mm",
              }}
              format="YYYY-MM-DD HH:mm"
              onChange={selectTimeSlot}
            />
          </div>
          <div className="d-flex justify-content-end mt-2  w-75 ms-5">
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
          </div>
          <div className="d-flex justify-content-end  w-75 ms-5 mt-2">
            <p>
              Total Hours : <b>{totalHour}</b>
            </p>
          </div>
          <div className="d-flex justify-content-end mt-0  w-75 ms-5">
            <p>
              Rent Per Hour : <b>{filteredData[0].Vprice}</b>{" "}
            </p>
          </div>
          <div className="d-flex justify-content-end mt-0  w-75 ms-5">
            <h3>Total Amout : {totalAmount}</h3>
          </div>
          <div className="d-flex justify-content-end mt-0  w-75 ms-5">
            {loading ? (
              <MDBSpinner color="primary">
                <span className="visually-hidden">Loading...</span>
              </MDBSpinner>
            ) : (
              <Button onClick={handleBooking} variant="outlined">
                Book Now
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Booking;
