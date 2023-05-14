import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBFile,
  MDBTextArea,
} from "mdb-react-ui-kit";

import Button from "@mui/material/Button";
import AdminDrawer from "../../../Components/AdminDashbored/AdminDrawer";
import { addVehicleAction } from "../../../Redux/Actions/Admin_Action/AddVehicleAction";
import {
  AdminAddVehicleApi,
  editVehicleApi,
} from "../../../API/Admin/ApiCalls";
import { useLocation } from "react-router-dom";
import { editVehicleAction } from "../../../Redux/Actions/Admin_Action/EditVehicleAction";

export default function EditVehicle() {
  const divStyle = {
    border: "1px solid black",
    padding: "20px",
    width: "100%",
    boxShadow: "3px 3px",
    height: "600px",
  };
  const location = useLocation();
  const { filteredData } = location.state;
  console.log(filteredData);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState(filteredData[0].Vname);
  const [model, setModel] = useState(filteredData[0].Vmodel);
  const [brand, setBrand] = useState(filteredData[0].Vbrand);
  const [fuel, setFuel] = useState(filteredData[0].Vfuel);
  const [rate, setRate] = useState(filteredData[0].Vprice);
  const [color, setColor] = useState(filteredData[0].Vcolor);
  const [photos, setPhotos] = useState([]);
  const [description, setDescription] = useState(filteredData[0].Vdesc);
  const [vnumber, setVNumber] = useState(filteredData[0].Vnumber);
  let id = filteredData[0]._id
  

  const handleEdit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    photos.forEach((image) => {
      formData.append("images", image);
    });
    formData.append("Vname", name);
    formData.append("Vmodel", model);
    formData.append("Vbrand", brand);
    formData.append("Vfuel", fuel);
    formData.append("Vprice", rate);
    formData.append("Vcolor", color);
    formData.append("Vdesc", description);
    formData.append("Vnumber", vnumber);

    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    dispatch(editVehicleAction(formData,id));

    // AdminAddVehicleApi(formData)
    //   .then((data) => {
    //     dispatch(addVehicleAction(data.data));
    //     setTimeout(() => {
    //       navigate("/showallvehicle");
    //     }, 2000);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
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
          Edit Details
        </h3>

        <>
          <MDBRow className="mt-1  ">
            <MDBCol>
            <div>
              <label htmlFor="form3Example2" className="form-label">
                Vehicle Name
              </label>
            </div>
              <MDBInput
                onChange={(e) => {
                  setName(e.target.value);
                }}
                id="form3Example2"
                // label="Vehicle Name"
                defaultValue={filteredData[0].Vname}
              />
            </MDBCol>
            <MDBCol>
            <div>
              <label htmlFor="form3Example2" className="form-label">
                Vehicle Model
              </label>
            </div>
              <MDBInput
                onChange={(e) => {
                  setModel(e.target.value);
                }}
                id="form3Example2"
                // label="Vehicle Model"
                defaultValue={filteredData[0].Vmodel}
              />
            </MDBCol>
            <MDBCol>
            <div>
              <label htmlFor="form3Example2" className="form-label">
                Vehicle Brand
              </label>
            </div>
              <MDBInput
                onChange={(e) => {
                  setBrand(e.target.value);
                }}
                // label="Vehicle Brand"
                id="form3Example1"
                defaultValue={filteredData[0].Vbrand}
              />
            </MDBCol>
          </MDBRow>
          <MDBRow className="mt-1 ">
            <MDBCol>
              <div>
              <label htmlFor="form3Example2" className="form-label">
                Vehicle Rate
              </label>
            </div>
              <MDBInput
                onChange={(e) => {
                  setRate(e.target.value);
                }}
                id="form3Example2"
                // label="Vehicle Rate"
                // placeholder="Enter rate here"
                // labelClassName="mb-2"
                defaultValue={filteredData[0].Vprice}
              />
            </MDBCol>
            <MDBCol>
            <div>
              <label htmlFor="form3Example2" className="form-label">
                Fuel Type
              </label>
            </div>
              <MDBInput
                onChange={(e) => {
                  setFuel(e.target.value);
                }}
                id="form3Example2"
                // label="Fuel Type"
                defaultValue={filteredData[0].Vfuel}
              />
            </MDBCol>
            <MDBCol>
            <div>
              <label htmlFor="form3Example2" className="form-label">
                Vehicle Colour
              </label>
            </div>
              <MDBInput
                onChange={(e) => {
                  setColor(e.target.value);
                }}
                // label="Vehicle Colour"
                id="form3Example1"
                defaultValue={filteredData[0].Vcolor}
              />
            </MDBCol>
          </MDBRow>
          <MDBRow className="mt-1  w-50 float-start">

            <MDBCol>
            <div>
              <label htmlFor="form3Example2" className="form-label">
                Vehicle Number
              </label>
            </div>
              <MDBInput
                onChange={(e) => {
                  setVNumber(e.target.value);
                }}
                // label="Vehicle Number"
                id="form3Example1"
                defaultValue={filteredData[0].Vnumber}
              />
            </MDBCol>
          </MDBRow>
          <MDBRow className="mt-1 container w-50 ">
            <MDBCol>
            <div>
              <label htmlFor="form3Example2" className="form-label">
                Vehicle Description
              </label>
            </div>
              <MDBTextArea
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                // label="Vehicle Description"
                id="textAreaExample"
                defaultValue={filteredData[0].Vdesc}
                rows={1}
              />
            </MDBCol>
          </MDBRow>
          <MDBRow className="mt-1 container w-50 float-start ">
         
            <MDBFile
              onChange={(e) => {
                setPhotos([...photos, e.target.files[0]]);
              }}
              label={
                <div>
                  <img
                    className="h-50 w-50 ms-5 mt-3"
                    src={filteredData[0].Vphoto[0].url}
                    alt="Preview"
                  />
                </div>
              }
              size="sm"
              id="formFileSm"
            />
          </MDBRow>
          <MDBRow className="mt-1 container w-50  ms-5">
       
            <MDBFile
              onChange={(e) => {
                setPhotos([...photos, e.target.files[0]]);
              }}
              label={
                <div>
                  <img
                    className="h-50 w-50 ms-5 mt-3"
                    src={filteredData[0].Vphoto[1].url}
                    alt="Preview"
                  />
                </div>
              }
              size="sm"
              id="formFileSm"
            />
          </MDBRow>

          {/* <MDBBtn type='submit' className='mb-4 ms-5' block>
                    Sign in
                </MDBBtn> */}
          <MDBRow className="mt-5 ">
            <Button
              onClick={handleEdit}
              className="mb-4 "
              variant="outlined"
              size="small"
            >
              Edit Details
            </Button>
          </MDBRow>
        </>
      </form>
    </div>
  );
}
