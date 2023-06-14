import React from "react";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { useState } from "react";
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
import { EditLocationApi } from "../../API/Admin/ApiCalls";
import { editLocationAction } from "../../Redux/Actions/Admin_Action/addLocationAction";

const schema = yup.object().shape({
  location: yup
    .string("name should be a string")
    .min(3, "name should have a min length of 3 letters")
    .required("name is required"),
});

function LocationEditModal({ closeModal, details }) {
  console.log(details[0].Location);
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
        // setLoading(true);
        const location = data.Location;
       
        // const handleEdit = (id) => {
        EditLocationApi(location).then((data) => {
          dispatch(editLocationAction(data.data));
          setBasicModal(false);
        });
  };
  //   };

  return (
    <div>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
        <MDBModalDialog className="mt-5">
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>
                <h5 className="">Details</h5>
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
              <MDBModalBody>
                <TextField
                  className="mt-1"
                  style={{ width: "100%" }}
                  id="name"
                  name="name"
                  type="text"
                  label=""
                  value={details.filteredLocations}
                    defaultValue={details[0].Location}
                  error={!!errors.location}
                  helperText={errors.location ? errors.location.message : ""}
                  {...register("location")}
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

export default LocationEditModal;
