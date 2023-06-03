import React, { useEffect, useState } from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { ShowUserBikesAction } from "../../../Redux/Actions/Admin_Action/ShowUserVehicleAction";
import AdminDrawer from "../../../Components/AdminDashbored/AdminDrawer";
import { BikeAcceptAction } from "../../../Redux/Actions/Admin_Action/UserBikeAcceptAction";
import { BikeRejectAction } from "../../../Redux/Actions/Admin_Action/UserBikeRejectAction";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

function RentRequest() {
  const [show, setShow] = useState(false);
  const Vehicledata = useSelector(
    (state) => state.ShowUserVehicleReducer.VehicleData
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleView=(id)=>{
     const filteredData = Vehicledata.filter((item) => item._id === id);
    navigate("/viewmore-rentrequest", { state: { filteredData } });
  }
  

  useEffect(() => {
    dispatch(ShowUserBikesAction());
  }, [show]);

  return (
    <div
      className='mt-5  col-md-6"  container '
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AdminDrawer />
      <div style={{ marginTop: "6em", width: "75%" }} className="maintable">
      <div>
          <h1 className="text-center" > <b>Rent Request </b> </h1>
        </div>
        <MDBTable bordered>
          <MDBTableHead>
            <tr className="container ">
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">Model</th>
              <th scope="col">Brand</th>
              <th scope="col">Rent/Hour</th>
              <th scope="col">Image</th>
              <th scope="col">Colour</th>
              <th scope="col">Number</th>
              <th scope="col">Fuel</th>
              <th scope="col">View More</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {Vehicledata
              ? Vehicledata.map((data, index) => {
                  return (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{data.Vname}</td>
                      <td>{data.Vmodel}</td>
                      <td>{data.Vbrand}</td>
                      <td>{data.Vprice}</td>
                      <td>
                        {data.Vphoto && data.Vphoto.length > 0 && (
                          <img
                            src={data.Vphoto[0].url}
                            alt="image"
                            style={{ height: "80px", width: "100px" }}
                          />
                        )}
                      </td>

                      <td>{data.Vcolor}</td>
                      <td>{data.Vnumber}</td>
                      <td>{data.Vfuel}</td>
                    <td>
                    <Button
                          variant="outlined"
                          onClick={() => {
                            handleView(data._id);
                          }}
                        >
                          View  
                        </Button>
                    </td>

                      {/* <td>
                        <Button
                          variant="outlined"
                          onClick={() => {
                            handleAccept(data._id);
                          }}
                        >
                          Accept
                        </Button>
                          </td> */}
                        {/* <td>
                          <Button
                            variant="outlined"
                            color="Primary"
                            onClick={() => {
                              handleReject(data._id);
                            }}
                          >
                            View More
                          </Button>
                        </td> */}
                      {/* <td>{data.Vphoto[0]}</td> */}
                    </tr>
                  );
                })
              : ""}
          </MDBTableBody>
        </MDBTable>
      </div>
    </div>
  );
}

export default RentRequest;
