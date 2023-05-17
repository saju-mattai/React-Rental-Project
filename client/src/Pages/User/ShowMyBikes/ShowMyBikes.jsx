import Usernavbar from "../../../Components/UserNavBar/Usernavbar";
import React, { useEffect } from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetAllUserVehicleAction } from "../../../Redux/Actions/User_Action/GetAllUserVehicleAction";

function ShowMyBikes() {

    const Vehicledata = useSelector(
        (state) => state.GetAllVehicleReducer.vehicleData
      );
      console.log(Vehicledata);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllUserVehicleAction());
  }, []);

  return (
    <div>
      <Usernavbar />
      <div
        className='  col-md-6"  container '
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ marginTop: "6em", width: "75%" }} className="maintable">
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
                <th scope="col">Bike Status</th>
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
                      <td>{data.Vrequest}</td>

                      
                       
                      {/* <td>{data.Vphoto[0]}</td> */}
                    </tr>
                  );
                })
              : ""}
            </MDBTableBody>
          </MDBTable>
        </div>
      </div>
    </div>
  );
}

export default ShowMyBikes;
