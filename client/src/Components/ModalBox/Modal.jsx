import React from "react";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import { TextField } from "@mui/material";
import { EditUserApi } from "../../API/User/ApiCalls";
import { editUserAction } from "../../Redux/Actions/User_Action/EditUserAction";
import { Box } from "@mantine/core";

const schema = yup.object().shape({
  name: yup
    .string("name should be a string")
    .min(3, "name should have a min length of 3 letters")
    .required("name is required"),
  email: yup
    .string("email should be a string")
    .email("please provide a valid email")
    .required("email address is required"),
  place: yup
    .string("place should be a string")
    .min(3, "place should have a min length of 3 letters")
    .required("name is required"),
  phone: yup
    .string("email should be a string")
    .min(10, "Mobile No should have a minimum length of 10")
    .max(10, "Mobile No  should have a maximum length of 10")
    .required("Mobile No  is required"),
});

function Modal({ closeModal, details }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  //   console.log(details);
  const [basicModal, setBasicModal] = useState(true);
  const toggleShow = () => setBasicModal(!basicModal);

  const dispatch = useDispatch();

  //   const [name, setName] = useState(details.name);
  //   const [email, setEmail] = useState(details.email);
  //   const [phone, setPhone] = useState(details.phone);
  //   const [place, setPlace] = useState(details.place);
  const submitHandler = async (data) => {
    console.log(data, "lll");
    // setLoading(true);
    const Name = data.name;
    const Email = data.email;
    const Phone = data.phone;
    const Place = data.place;
    const Id = details.id;
    // const handleEdit = (id) => {
    EditUserApi(Name, Email, Phone, Place, Id).then((data) => {
      localStorage.setItem("UserInfo", JSON.stringify(data.data));
      dispatch(editUserAction(data.data));
      setBasicModal(false);
    });
    // };
  };

  return (
    <div>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>
                <h5 className="">User Details</h5>
              </MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
                // onSubmit={handleSubmit(submitHandler)}
              ></MDBBtn>
            </MDBModalHeader>
            <Box
              component="form"
              onSubmit={handleSubmit(submitHandler)}
              sx={{ mt: 1 }}
            >
            {/* <form onSubmit={handleSubmit(submitHandler)}> */}
              <MDBModalBody>
                <TextField
                  className="mt-1"
                  style={{ width: "100%" }}
                  id="name"
                  name="name"
                  type="text"
                  label=""
                  defaultValue={details.name}
                  error={!!errors.name}
                  helperText={errors.name ? errors.name.message : ""}
                  {...register("name")}
                  variant="outlined"
                  size="small"
                />
                <TextField
                  className="mt-2"
                  style={{ width: "100%" }}
                  id="email"
                  name="email"
                  type="email"
                  label=""
                  defaultValue={details.email}
                  error={!!errors.email}
                  helperText={errors.email ? errors.email.message : ""}
                  {...register("email")}
                  variant="outlined"
                  size="small"
                />
                <TextField
                  className="mt-2"
                  style={{ width: "100%" }}
                  id="phone"
                  name="phone"
                  type="text"
                  label=""
                  defaultValue={details.phone}
                  error={!!errors.phone}
                  helperText={errors.phone ? errors.phone.message : ""}
                  {...register("phone")}
                  variant="outlined"
                  size="small"
                />
                <TextField
                  className="mt-2"
                  style={{ width: "100%" }}
                  id="place"
                  name="place"
                  type="text"
                  label=""
                  defaultValue={details.place}
                  error={!!errors.place}
                  helperText={errors.place ? errors.place.message : ""}
                  {...register("place")}
                  variant="outlined"
                  size="small"
                />
              </MDBModalBody>

              <MDBModalFooter>
                <Button
                  color="secondary"
                  onClick={toggleShow}
                  variant="outlined"
                >
                  Close
                </Button>

                <Button className="ms-2" type="submit" variant="outlined">
                  Save changes
                </Button>
              </MDBModalFooter>
            {/* </form> */}
            </Box>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
}

export default Modal;
