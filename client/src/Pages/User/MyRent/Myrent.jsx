import React, { useEffect } from "react";
import Usernavbar from "../../../Components/UserNavBar/Usernavbar";
import Button from "@mui/material/Button";

import Swal from "sweetalert2";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { GetRentedBikeAction } from "../../../Redux/Actions/User_Action/GetRentedBikeAction";
import { CancelMyRideAction } from "../../../Redux/Actions/User_Action/CancelMyRideAction";
function Myrent() {
  const BikeData = useSelector((state) => state.getRentedBikeReducer.Data);
  console.log(BikeData);
  const handleCancel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You Want To Cancel!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(CancelMyRideAction(id));
        Swal.fire("Canceled!", "Your Order has been Canceled.", "success");
      }
    });
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetRentedBikeAction());
    Swal.fire('Come With Id Proof For Purchase')
  }, []);

  return (
    <div>
      <Usernavbar />
      <div>
          <h3 className="text-center" > <b> My Orders</b> </h3>
        </div>
      <MDBTable className="caption-top container ">
        
        <caption>List Of Orders</caption>
        <MDBTableHead>
          <tr>
            <th scope="col">SI</th>
            <th scope="col">Image</th>
            <th scope="col">Bike Name</th>
            <th scope="col">Starting Time</th>
            <th scope="col">Ending Time</th>
            <th scope="col">Total Hours</th>
            <th scope="col">Total Amount</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {BikeData
            ? BikeData.map((data, index) => {
                return (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>
                      <img
                        src={data.BikePhoto}
                        alt="image"
                        style={{ height: "80px", width: "100px" }}
                      />
                    </td>
                    <td>{data.BikeName}</td>
                    <td>{data.startdate}</td>
                    <td>{data.enddate}</td>
                    <td>{data.totalHour} Hour</td>
                    <td>Rs.{data.totalAmount} </td>
                    <td>{data.status} </td>
                    <td>
                      {" "}
                      {data.status === "Booked" ? (
                        <Button
                          onClick={() => {
                            handleCancel(data._id);
                          }}
                          variant="outlined"
                          color="error"
                        >
                          Cancel
                        </Button>
                      ) : (
                        ""
                      )}
                    </td>
                  </tr>
                );
              })
            : ""}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
}

export default Myrent;
