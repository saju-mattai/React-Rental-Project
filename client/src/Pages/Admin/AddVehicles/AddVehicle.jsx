import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Form } from "semantic-ui-react";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBSpinner,
} from "mdb-react-ui-kit";

import Button from "@mui/material/Button";
import AdminDrawer from "../../../Components/AdminDashbored/AdminDrawer";
import { addVehicleAction } from "../../../Redux/Actions/Admin_Action/AddVehicleAction";
import { AdminAddVehicleApi } from "../../../API/Admin/ApiCalls";

export default function AddVehicle() {
  const [loading, setLoading] = useState(false);

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    
    setLoading(true);
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

    AdminAddVehicleApi(formData)
      .then((data) => {
        dispatch(addVehicleAction(data.data));
        setTimeout(() => {
          navigate("/showallvehicle");
          setLoading(false);
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
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
      <Form
        className="container  mt-4 ms-5"
        style={divStyle}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Add Details
        </h3>
        <MDBRow className="mt-1  ">
          <MDBCol>
            <Form.Field>
              <div>
                <label htmlFor="form3Example2" className="form-label">
                  Vehicle Name
                </label>
              </div>
              <MDBInput
                id="form3Example1"
                {...register("bikeName", {
                  required: true,
                  minLength: 2,
                })}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Form.Field>
            {errors.bikeName && (
              <p style={{ color: "red" }}>Please enter the bike name </p>
            )}
          </MDBCol>

          <MDBCol>
            <Form.Field>
              <div>
                <label htmlFor="form3Example2" className="form-label">
                  Vehicle Model
                </label>
              </div>
              <MDBInput
                id="form3Example2"
                {...register("bikeModel", {
                  required: true,
                  minLength: 4,
                })}
                onChange={(e) => {
                  setModel(e.target.value);
                }}
              />
            </Form.Field>
            {errors.bikeModel && (
              <p style={{ color: "red" }}>Please enter the model</p>
            )}
          </MDBCol>

          <MDBCol>
            <Form.Field>
              <div>
                <label htmlFor="form3Example2" className="form-label">
                  Vehicle Brand
                </label>
              </div>
              <MDBInput
                id="form3Example2"
                {...register("brand", {
                  required: true,
                  minLength: 4,
                })}
                onChange={(e) => {
                  setBrand(e.target.value);
                }}
                // label="Vehicle Brand"
              />
            </Form.Field>
            {errors.brand && (
              <p style={{ color: "red" }}>Please enter the brand</p>
            )}
          </MDBCol>
        </MDBRow>
        <MDBRow className="mt-1 ">
          <MDBCol>
            <Form.Field>
              <div>
                <label htmlFor="form3Example2" className="form-label">
                  Vehicle Rate
                </label>
              </div>
              <MDBInput
                type="number"
                {...register("price", {
                  required: true,
                  minLength: 2,
                  maxLength: 3,
                })}
                onChange={(e) => {
                  setRate(e.target.value);
                }}
                id="form3Example2"
                // label="Vehicle Rate"
                // placeholder="Enter rate here"
                // labelClassName="mb-2"/
              />
            </Form.Field>
            {errors.price && (
              <p style={{ color: "red" }}>Please enter a price</p>
            )}
          </MDBCol>
          <MDBCol>
            <Form.Field>
              <div>
                <label htmlFor="form3Example2" className="form-label">
                  Fuel Type
                </label>
              </div>
              <MDBInput
                {...register("fuel", {
                  required: true,
                  minLength: 3,
                })}
                onChange={(e) => {
                  setFuel(e.target.value);
                }}
                id="form3Example2"
                // label="Fuel Type"
              />
            </Form.Field>
            {errors.fuel && (
              <p style={{ color: "red" }}>Please enter the fuel type</p>
            )}
          </MDBCol>

          <MDBCol>
            <Form.Field>
              <div>
                <label htmlFor="form3Example2" className="form-label">
                  Vehicle Colour
                </label>
              </div>
              <MDBInput
                {...register("color", {
                  required: true,
                  minLength: 3,
                })}
                onChange={(e) => {
                  setColor(e.target.value);
                }}
                // label="Vehicle Colour"
                id="form3Example1"
              />
            </Form.Field>
            {errors.color && (
              <p style={{ color: "red" }}>Please enter the color</p>
            )}
          </MDBCol>
        </MDBRow>
        <MDBRow className="mt-1   w-50 float-start">
          <MDBCol>
            <Form.Field>
              <div>
                <label htmlFor="form3Example2" className="form-label">
                  Vehicle Number
                </label>
              </div>
              <MDBInput
                {...register("VehicleNumber", {
                  required: true,
                  minLength: 3,
                })}
                onChange={(e) => {
                  setVNumber(e.target.value);
                }}
                // label="Vehicle Number"
                id="form3Example1"
              />
            </Form.Field>
            {errors.VehicleNumber && (
              <p style={{ color: "red" }}>Please enter the Number</p>
            )}
          </MDBCol>
        </MDBRow>
        <MDBRow className="mt-1  container w-50 ms-5 ">
          <MDBCol>
            <Form.Field>
              <div>
                <label htmlFor="form3Example2" className="form-label">
                  Vehicle Description
                </label>
              </div>
              <MDBInput
                {...register("desc", {
                  required: true,
                  minLength: 3,
                })}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                // label="Vehicle Description"
                id="textAreaExample"
                rows={1}
              />
            </Form.Field>
            {errors.desc && (
              <p style={{ color: "red" }}>Please add a description</p>
            )}
          </MDBCol>
        </MDBRow>
        <MDBRow className="mt-1 container w-50 float-start ">
          <Form.Field>
            <div>
              <label htmlFor="form3Example2" className="form-label">
                Image 1
              </label>
            </div>

            <MDBInput
              type="file"
              {...register("image1", {
                required: true,
                minLength: 1,
              })}
              onChange={(e) => {
                setPhotos([...photos, e.target.files[0]]);
              }}
              label=""
              size="sm"
              id="formFileSm"
            />
          </Form.Field>
          {errors.image1 && (
            <p style={{ color: "red" }}>Please choose an image</p>
          )}
        </MDBRow>
        <MDBRow className="mt-1 container w-50  ms-5">
          <Form.Field>
            <div>
              <label htmlFor="form3Example2" className="form-label">
                Image 2
              </label>
            </div>
            <MDBInput
              type="file"
              {...register("image2", {
                required: true,
                minLength: 1,
              })}
              onChange={(e) => {
                setPhotos([...photos, e.target.files[0]]);
              }}
              label=""
              size="sm"
              id="formFileSm"
            />
          </Form.Field>
          {errors.image2 && (
            <p style={{ color: "red" }}>Please choose an image</p>
          )}
        </MDBRow>

        <MDBRow
          className="mt-5"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {loading ? (
            <MDBSpinner className="ms-5" color="primary">
              <span className="visually-hidden">Loading...</span>
            </MDBSpinner>
          ) : (
            <Button type="submit" variant="outlined" size="small">
              Upload
            </Button>
          )}
        </MDBRow>
      </Form>
    </div>
  );
}
