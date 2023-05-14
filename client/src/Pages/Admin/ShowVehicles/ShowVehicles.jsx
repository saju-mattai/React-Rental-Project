import React, { useEffect } from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import AdminDrawer from "../../../Components/AdminDashbored/AdminDrawer";
import { useSelector, useDispatch } from "react-redux";
import { ShowAllVehicleAction } from "../../../Redux/Actions/Admin_Action/ShowAllVehicleAction";
import Button from "@mui/material/Button";
import { deleteVehicleAction } from "../../../Redux/Actions/Admin_Action/DeleteVehicleAction";
import { useNavigate } from "react-router-dom";

function ShowVehicles() {
  const Vehicledata = useSelector(
    (state) => state.ShowAllVehicleReducer.VehicleData
  );

//   const history = useHistory();

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleDelete = (id) => {
    dispatch(deleteVehicleAction(id));
    dispatch(ShowAllVehicleAction());
  };
  const handleEdit = (id) => {
    const filteredData = Vehicledata.filter(item => item._id === id);
    navigate('/editvehicle',{state:{filteredData}})
  };

  useEffect(() => {
    dispatch(ShowAllVehicleAction());
  }, []);

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
        <MDBTable bordered>
          <MDBTableHead>
            <tr className="container ">
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">Model</th>
              <th scope="col">Brand</th>
              <th scope="col">Price</th>
              <th scope="col">Image</th>
              <th scope="col">Colour</th>
              <th scope="col">Number</th>
              <th scope="col">Fuel Type</th>
              <th scope="col">Edit</th>
              <th scope="col"> Delete</th>
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
                            handleEdit(data._id);
                          }}
                        >
                          Edit
                        </Button>
                      </td>
                      <td>
                        <Button
                          variant="outlined"
                          color="error"
                          onClick={() => {
                            handleDelete(data._id);
                          }}
                        >
                          Delete
                        </Button>
                      </td>
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

export default ShowVehicles;
