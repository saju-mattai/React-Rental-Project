import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Figure } from "react-bootstrap";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { CancelMyRideAction } from "../../Redux/Actions/User_Action/CancelMyRideAction";
import Swal from "sweetalert2";
import { TextField } from "@mui/material";
import { Box } from "@mantine/core";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

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

const schema = yup.object().shape({
  cancelReason: yup.string().required("Please select a reason"),
});

function AllRide({ data }) {
  const [basicModal, setBasicModal] = useState(true);
  const toggleShow = () => setBasicModal(!basicModal);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [orderid, setOrderId] = useState("");
  const [cancelReason, setCancelReason] = useState("");

  const [reasonOptions] = useState([
    "Changed my mind",
    "Found a better deal",
    "No longer need it",
    "Ordered by mistake",
    "Other",
  ]);

  // const handleCancel = (id) => {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You Want To Cancel!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, Cancel it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       dispatch(CancelMyRideAction(id));
  //       Swal.fire("Canceled!", "Your Order has been Canceled.", "success");
  //     }
  //   });
  // };
  // const handleConfirmCancel = (id) => {
  //   dispatch(CancelMyRideAction(id));
  //   Swal.fire("Canceled!", "Your Order has been Canceled.", "success");
  // };

  const handlemodal = (id) => {
    setModal(!modal);
    setOrderId(id);
  };
  const submitHandler = (data) => {
    console.log(data);
    const cancelReason = data.cancelReason
    // Handle form submission
    let id = orderid
    dispatch(CancelMyRideAction(id,cancelReason));
    Swal.fire("Canceled!", "Your Order has been Canceled.", "success");
    setModal(!modal);
  };

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          height: 600,
        }}
      >
        <Table
          sx={{
            height: "max-content",
          }}
          aria-label="simple table"
        >
          <TableHead
            sx={{
              position: "sticky",
              top: 0,
              zIndex: 1,
              backgroundColor: "#fff",
            }}
          >
            <TableRow>
              <TableCell>Sl.No</TableCell>
              <TableCell align="center">Image</TableCell>
              <TableCell align="center">Bike Name</TableCell>
              <TableCell align="center">Starting Time</TableCell>
              <TableCell align="center">Ending Time</TableCell>
              <TableCell align="center">Total Hours</TableCell>
              <TableCell align="center">Total Amount</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data && data.length > 0 ? (
              data.map((row, i) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {i + 1}
                  </TableCell>
                  <TableCell align="center">
                    <Figure>
                      <Figure.Image
                        width={171}
                        height={180}
                        alt="llll"
                        src={row?.BikePhoto}
                      />
                      <Figure.Caption></Figure.Caption>
                    </Figure>
                  </TableCell>
                  <TableCell align="center">{row.BikeName}</TableCell>
                  <TableCell align="center">{row.startdate}</TableCell>
                  <TableCell align="center">{row.enddate}</TableCell>
                  <TableCell align="center">{row.totalHour}</TableCell>
                  <TableCell align="center">Rs.{row.totalAmount}</TableCell>
                  <TableCell align="center">{row.status}</TableCell>
                  <TableCell align="center">
                    {row.status === "Booked" ? (
                      <Button
                        onClick={() => {
                          handlemodal(row._id);
                        }}
                        variant="outlined"
                        color="error"
                      >
                        Cancel
                      </Button>
                    ) : (
                      ""
                    )}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={10} align="center">
                  No data
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {modal ? (
        <div>
          <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
            <MDBModalDialog>
              <MDBModalContent>
                <MDBModalHeader>
                  <MDBModalTitle>
                    <h5 className="">Cancel Order</h5>
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
                    <p>
                      Please select a reason for cancelling your bike order:
                    </p>
                    <select
                      className="form-control"
                      {...register("cancelReason")}
                    >
                      <option value="">Select a reason</option>
                      {reasonOptions.map((reason, index) => (
                        <option key={index} value={reason}>
                          {reason}
                        </option>
                      ))}
                    </select>
                    {errors.cancelReason && (
                      <span style={{ color: "red" }}>
                        {errors.cancelReason.message}
                      </span>
                    )}
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
                      Confirm Cancel
                    </Button>
                  </MDBModalFooter>
                </Box>
              </MDBModalContent>
            </MDBModalDialog>
          </MDBModal>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default AllRide;
