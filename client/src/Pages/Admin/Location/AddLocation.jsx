import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AdminDrawer from "../../../Components/AdminDashbored/AdminDrawer";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddLocationAction } from "../../../Redux/Actions/Admin_Action/addLocationAction";

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

  const handle = () => {
    dispatch(AddLocationAction(addlocation));
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
      <MDBCol className="container  mt-4 ms-5" style={divStyle}>
        <h3
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Add Location
        </h3>
        <Box
          component="form"
          //   onSubmit={handleSubmit(submitHandler)}
          sx={{ mt: 1 }}
        >
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
  );
}

export default AddLocation;
