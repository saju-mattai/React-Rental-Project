import React, { useEffect } from "react";
import AdminDrawer from "../../../Components/AdminDashbored/AdminDrawer";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { getDashBoardDetailsAction } from "../../../Redux/Actions/Admin_Action/GetDashboardDetails";

function Dashboard() {


    const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(getDashBoardDetailsAction())
  },[])


  const details = useSelector((state) => state.getDashBoardDetailsReducer.dashBoardData)
  console.log('DASH',details);
  return (
    <div>
      <h1 className="text-center mt-5  pt-4">DashBoard</h1>
      <div
        className='mt-5 ms-5 col-10 col-md-4"  '
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AdminDrawer />
        <MDBCard
          className="container w-25 h-25  ms-4 float-start  "
          style={{
            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)", // Replace with desired shadow properties
          }}
        >
          <MDBCardBody>
            <MDBCardTitle>Total Users</MDBCardTitle>
            <MDBCardText>
             {details?.totalUsers}
            </MDBCardText>
            <MDBCardText>
            Total Registered Users
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        <MDBCard
          className="container w-25 h-25  ms-4 float-start  "
          style={{
            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)", // Replace with desired shadow properties
          }}
        >
          <MDBCardBody>
            <MDBCardTitle>Total Bikes</MDBCardTitle>
            <MDBCardText>
            {details?.totalBikes}
            </MDBCardText>
            <MDBCardText>
            Total Accepted Bikes
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        <MDBCard
          className="container w-25 h-25  ms-4 float-start  "
          style={{
            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)", // Replace with desired shadow properties
          }}
        >
          <MDBCardBody>
            <MDBCardTitle>Total Bookings</MDBCardTitle>
            <MDBCardText>
            {details?.totalBookings}
            </MDBCardText>
            <MDBCardText>
            Total Bookings Made
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        <MDBCard
          className="container w-25 h-25  ms-4 float-start  "
          style={{
            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)", // Replace with desired shadow properties
          }}
        >
          <MDBCardBody>
            <MDBCardTitle>Total Rent Amount</MDBCardTitle>
            <MDBCardText>
              12
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </div>
    </div>
  );
}

export default Dashboard;
