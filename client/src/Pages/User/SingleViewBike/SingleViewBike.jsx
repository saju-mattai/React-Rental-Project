import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  MDBCardImage,
} from "mdb-react-ui-kit";
import Usernavbar from "../../../Components/UserNavBar/Usernavbar";
import { Button } from "antd";

function SingleViewBike() {
  const navigate = useNavigate();
  const location = useLocation();
  const { filteredData } = location.state;
  console.log(filteredData);
  const handleBook = (id) => {
    navigate("/booking", { state: { filteredData } });
  };

  return (
    <>
      <Usernavbar />
      <div>
        <h3 className="text-center">
          {" "}
          <b>Single View</b>{" "}
        </h3>
      </div>
      <div className="row  ms-5 mt-5">
        <div
          className="col-6 "
          style={{
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
           <MDBCardImage
            src={filteredData[0].Vphoto[0].url}
            alt=""
            srcset=""
            className="bikeimg"
          />
        </div>
        <div className="col-6">
          <div className="divider d-flex align-items-center my-4 w-75 ms-2 mt-0  ">
            <p className="text-center  mx-3 mb-0">Vehicle Info</p>
          </div>
          <div className="float-start">
            <p className="text-start">Vehicle Name: {filteredData[0].Vname}</p>
            <p className="text-start">
              Vehicle Brand: {filteredData[0].Vbrand}
            </p>
            <p className="text-start ">
              Vehicle Model: {filteredData[0].Vmodel}
            </p>
            <p className="text-start ">Fuel Type: {filteredData[0].Vfuel}</p>
          </div>
          <div>
            <p className="text-end w-75 ms-5 mt-1">
              Vehicle Colour: {filteredData[0].Vcolor}
            </p>
            <p className="text-end w-75 ms-5 mt-1">
              Vehicle Rate: {filteredData[0].Vprice}/hr
            </p>
            <p className="text-end w-75 ms-5 mt-1">
              Vehicle Number: {filteredData[0].Vnumber}
            </p>
            <p className="text-end w-75 ms-5 mt-1">
              About Vehicle: {filteredData[0].Vdesc}
            </p>
          </div>

          <div className="d-flex justify-content-center mt-0  w-75 ms-5 mt-5">
            <Button
              className=" w-75"
              onClick={() => {
                handleBook(filteredData[0]._id);
              }}
              variant="outlined"
            >
              Book Now
            </Button>
            {/* </StripeCheckout> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleViewBike;
