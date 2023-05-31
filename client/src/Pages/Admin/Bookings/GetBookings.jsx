import React, { useEffect } from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import AdminDrawer from "../../../Components/AdminDashbored/AdminDrawer";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getBookingAction } from "../../../Redux/Actions/Admin_Action/getBookingDetailsAction";

function GetBookings() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Data = useSelector((state) => state.getBookingDetailsReducer.Data);
  console.log(Data);

  useEffect(() => {
    dispatch(getBookingAction());
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
              <th scope="col">UserName</th>
              <th scope="col">Bike</th>
              <th scope="col">Image</th>
              <th scope="col">StartingTime</th>
              <th scope="col">EndingTime</th>
              <th scope="col">TotalAmout</th>
              <th scope="col">Payment</th>
              <th scope="col">Status</th>

            </tr>
          </MDBTableHead>
          <MDBTableBody>
          {Data
              ? Data.map((data, index) => {
                  return (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{data.UserName}</td>
                      <td>{data.BikeName}</td>
                      <td>
                          <img
                            src={data.BikePhoto}
                            alt="image"
                            style={{ height: "80px", width: "100px" }}
                          />
                      </td>
                      <td>{data.startdate}</td>
                      <td>{data.enddate}</td>
                      <td>{data.totalAmount}</td>
                      <td>{data.paymentMethod}</td>
                      <td>{data.status}</td>
                      
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

export default GetBookings;
