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
import Usernavbar from "../../../Components/UserNavBar/Usernavbar";
import { AddBikeApi } from "../../../API/User/ApiCalls";
import { UserAddBikeAction } from "../../../Redux/Actions/User_Action/UserAddBikeAction";

function Rentbike() {
  const divStyle = {
    border: "1px solid black",
    padding: "20px",
    width: "100%",
    boxShadow: "3px 3px",
    height: "auto",
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [brand, setBrand] = useState("");
  const [fuel, setFuel] = useState("");
  const [rate, setRate] = useState("");
  const [color, setColor] = useState("");
  const [photos, setPhotos] = useState([]);
  const [description, setDescription] = useState("");
  const [vnumber, setVNumber] = useState("");

  const handleSubmit = (e) => {
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

    AddBikeApi(formData).then((data)=>{
        dispatch(UserAddBikeAction(data.data))
        // setTimeout(() => {
        //     navigate("/showallvehicle");
        //   }, 2000);
    })
  };

  return (
    <div>
    <Usernavbar />
      <form className="container  mt-4 ms-5" style={divStyle}>
        <h3
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Add Your Bike
        </h3>
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
              // labelClassName="mb-2"/
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
            />
          </MDBCol>
        </MDBRow>
        <MDBRow className="mt-1   w-50 float-start">
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
            />
          </MDBCol>
        </MDBRow>
        <MDBRow className="mt-1  container w-50 ms-5 ">
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
              rows={1}
            />
          </MDBCol>
        </MDBRow>
        <MDBRow className="mt-1 container w-50 float-start ">
          <div>
            <label htmlFor="form3Example2" className="form-label">
              Image 1
            </label>
          </div>
          <MDBFile
            onChange={(e) => {
              setPhotos([...photos, e.target.files[0]]);
            }}
            label=""
            size="sm"
            id="formFileSm"
          />
        </MDBRow>
        <MDBRow className="mt-1 container w-50  ms-5">
          <div>
            <label htmlFor="form3Example2" className="form-label">
              Image 2
            </label>
          </div>
          <MDBFile
            onChange={(e) => {
              setPhotos([...photos, e.target.files[0]]);
            }}
            label=""
            size="sm"
            id="formFileSm"
          />
        </MDBRow>

        {/* <MDBBtn type='submit' className='mb-4 ms-5' block>
             Sign in
         </MDBBtn> */}
        <MDBRow className="mt-5 ">
          <Button
            onClick={handleSubmit}
            className="mt-3"
            variant="outlined"
            size="small"
          >
            Upload
          </Button>
        </MDBRow>
      </form>
    </div>
  );
}

export default Rentbike;
