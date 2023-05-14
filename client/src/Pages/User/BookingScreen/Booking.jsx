import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Usernavbar from "../../../Components/UserNavBar/Usernavbar";
import { useLocation } from "react-router-dom";
import "./BookingScreen.css";
import moment from "moment";
import { Checkbox, DatePicker, Space } from "antd";
const { RangePicker } = DatePicker;

function Booking() {
  const location = useLocation();
  const { filteredData } = location.state;

  const [startdate, setStartdate] = useState();
  const [enddate, setEnddate] = useState();
  const [totalhour, setTotalhour] = useState(0);
  const [helmet, setHelmet] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);

  const selectTimeSlot = (value) => {
    setStartdate(moment(value[0]).format("MMM DD YYYY HH:mm"));

    setEnddate(moment(value[1]).format("MMM DD YYYY HH:mm"));

    setTotalhour(value[1].diff(value[0], "hours"));
  };

  useEffect(() => {
    setTotalAmount(totalhour * filteredData[0].Vprice);
    if (helmet) {
      setTotalAmount(totalAmount + 30 * totalhour);
    }
  }, [helmet, totalhour]);

  const handleBooking = () => {
    const ReqObj = {
      user: JSON.parse(localStorage.getItem("UserInfo")).id,
      Bike: filteredData[0]._id,
      totalhour,
      totalAmount,
      HelmetRequire: helmet,
      bookedTimeSlots: {
        startdate,
        enddate,
      },
    };
  };

  return (
    <>
      <Usernavbar />

      <div className="row  ms-5 mt-5">
        <div
          className="col-6  "
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
          <div className="mt-5">
            {/* <DatePicker.RangePicker
              format="MMM-DD-YYYY-HHmm"
              showTime={{ format: "HH:mm" }}
              onChange={selectTimeSlot}
            /> */}
            <RangePicker
              showTime={{
                format: "HH:mm",
              }}
              format="YYYY-MM-DD HH:mm"
              onChange={selectTimeSlot}
            />
          </div>
          <div>
            <p>
              Total Hours : <b>{totalhour}</b>
            </p>
            <p>
              Rent Per Hour : <b>{filteredData[0].Vprice}</b>{" "}
            </p>
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
            <h3>Total Amout : {totalAmount}</h3>
            <Button onClick={handleBooking} variant="outlined">
              Outlined
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Booking;
