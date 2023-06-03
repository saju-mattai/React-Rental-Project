import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBFile,
  MDBTextArea,
  MDBSpinner,
} from "mdb-react-ui-kit";

import Button from "@mui/material/Button";
import AdminDrawer from "../../../Components/AdminDashbored/AdminDrawer";

import { useLocation } from "react-router-dom";
import { editVehicleAction } from "../../../Redux/Actions/Admin_Action/EditVehicleAction";
import Swal from "sweetalert2";
import { BikeAcceptAction } from "../../../Redux/Actions/Admin_Action/UserBikeAcceptAction";
import { BikeRejectAction } from "../../../Redux/Actions/Admin_Action/UserBikeRejectAction";

export default function VeiwMoreRentRequest() {
  const divStyle = {
    border: "1px solid black",
    padding: "20px",
    width: "100%",
    boxShadow: "3px 3px",
    height: "600px",
  };
  const [show, setShow] = useState(false);
  const location = useLocation();
  const { filteredData } = location.state;
  console.log(filteredData);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleAccept = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Are You Sure You Want Accept !",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Accept It !",
    }).then((result) => {
      if (result.isConfirmed) {
        // Dispatch deleteVehicleAction and ShowAllVehicleAction here
        setShow(true);
        dispatch(BikeAcceptAction(id)).then(() => {
            navigate('/rentrequest')
          setShow(false);
        });

        Swal.fire("Accepted!", "Your vehicle has been Accepted.", "success");
      }
    });
  };

  const handleReject = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Are You Sure You Want Reject !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Reject it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Dispatch deleteVehicleAction and ShowAllVehicleAction here
        setShow(true);
        dispatch(BikeRejectAction(id)).then(() => {
            navigate('/rentrequest')
          setShow(false);
        });

        Swal.fire("Rejected!", "Your vehicle has been Rejected.", "success");
      }
    });
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
      <form className="container  mt-4 ms-5" style={divStyle}>
        <h3
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Verify Document
        </h3>

        <>
          <MDBRow className="mt-1  ">
            <MDBCol>
              <div>
                <label htmlFor="form3Example2" className="form-label">
                  Vehicle Number
                </label>
              </div>
              <MDBInput
                id="form3Example2"
                // label="Vehicle Name"
                value={filteredData[0].Vnumber}
                disabled
              />
            </MDBCol>
            <MDBCol>
              <div>
                <label htmlFor="form3Example2" className="form-label">
                  Vehicle Model
                </label>
              </div>
              <MDBInput
                id="form3Example2"
                // label="Vehicle Model"
                value={filteredData[0].Vmodel}
                disabled
              />
            </MDBCol>
          </MDBRow>

          <MDBRow className="mt-1 container w-50 float-start ">
            <div>
              <h4 htmlFor="form3Example2" className="form-label">
                Front View
              </h4>
            </div>
            <div>
              <img
                className="h-100 w-100  mt-3"
                src={filteredData[0].Vphoto[2].url}
                alt="Preview"
              />
            </div>
          </MDBRow>
          <MDBRow className="mt-1 container w-50  ms-5">
            <div>
              <h4 htmlFor="form3Example2" className="form-label ms-4">
                Back View
              </h4>
            </div>
            <div>
              <img
                className="h-100 w-100 ms-3 mt-3"
                src={filteredData[0].Vphoto[3].url}
                alt="Preview"
              />
            </div>
          </MDBRow>

          {/* <MDBBtn type='submit' className='mb-4 ms-5' block>
                    Sign in
                </MDBBtn> */}
          <MDBRow className="mt-5 ">
            <div class="container">
              <div class="row">
                <div class="col">
                  <Button
                    className="w-100"
                    variant="outlined"
                    onClick={() => {
                      handleAccept(filteredData[0]._id);
                    }}
                    style={{ width: "100px" }}
                  >
                    Accept
                  </Button>
                </div>
                <div class="col">
                  <Button
                    className="w-100"
                    variant="outlined"
                    color="error"
                    onClick={() => {
                        handleReject(filteredData[0]._id);
                    }}
                    style={{ width: "100px" }}
                  >
                    Reject
                  </Button>
                </div>
              </div>
            </div>
          </MDBRow>
        </>
      </form>
    </div>
  );
}
