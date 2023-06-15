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
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  AddLocationAction,
  getLocation,
} from "../../../Redux/Actions/Admin_Action/addLocationAction";
import { deleteLocationAction } from "../../../Redux/Actions/Admin_Action/DeleteLocationAction";
import LocationEditModal from "../../../Components/ModalBox/LocationEditModal";

function AddLocation() {
  const divStyle = {
    border: "1px solid black",
    padding: "20px",
    width: "100%",
    boxShadow: "3px 3px",
    height: "auto",
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [addlocation, setAddlocation] = useState("");
  const [modal, setModal] = useState(false);
  

  useEffect(() => {
    dispatch(getLocation());
  }, []);
  const Location = useSelector((state) => state.AddLocationReducer.Data);
  console.log(Location);
  const handle = () => {
    dispatch(AddLocationAction(addlocation));
  };

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
        // Dispatch deleteVehicleAction and ShowAllVehicleAction here
        dispatch(deleteLocationAction(id));
        dispatch(getLocation());

        Swal.fire("Deleted!", "Your vehicle has been deleted.", "success");
      }
    });
  };
 
  const [filteredLocations, setFilteredLocations] = useState([]);

  const handlemodal = (id) => {
    const newFilteredLocations = Location.filter((location) => {
      return location._id === id;
    });
    setFilteredLocations(newFilteredLocations);
    setModal(!modal);
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
        {modal ? (
          <LocationEditModal
            closeModal={setModal}
            details={filteredLocations}
          />
        ) : (
          ""
        )}

        <MDBCol className="container  mt-5 ms-5" style={divStyle}>
          <h3
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Add Location
          </h3>

          <Box component="form" sx={{ mt: 1 }}>
            <MDBRow>
              <MDBCol size="6">
                <TextField
                  id="addlocation"
                  name="addlocation"
                  type="text"
                  label="AddLocation"
                  variant="outlined"
                  onChange={(e) => {
                    setAddlocation(e.target.value);
                  }}
                />
              </MDBCol>
              <MDBCol size="6">
                <Button
                  type="submit"
                  className="mt-4"
                  style={{
                    display: "flex",
                  }}
                  variant="outlined"
                  size="small"
                  onClick={handle}
                >
                  Add Location
                </Button>
              </MDBCol>
            </MDBRow>
          </Box>
        </MDBCol>
      </div>
      <MDBTable className="mt-5 container w-75 border  ">
        <MDBTableHead dark>
          <tr>
            <th scope="col">SI</th>
            <th scope="col">Location</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {Location
            ? Location.map((item, i) => {
                return (
                  <tr>
                    <th scope="row">{i + 1}</th>
                    <td>{item.Location}</td>

                    <td>
                      {" "}
                      <Button
                        onClick={() => {
                          handlemodal(item._id);
                        }}
                        variant="outlined"
                      >
                        Edit
                      </Button>
                    </td>
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

export default AddLocation;
