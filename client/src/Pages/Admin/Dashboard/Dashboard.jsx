import React, { useEffect } from "react";
import AdminDrawer from "../../../Components/AdminDashbored/AdminDrawer";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { getDashBoardDetailsAction } from "../../../Redux/Actions/Admin_Action/GetDashboardDetails";
import RentRequestGraph from "../../../Components/RentRequestGraph";
import RentPaymentGraph from "../../../Components/RentPaymentGraph";

function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDashBoardDetailsAction());
  }, []);

  const details = useSelector(
    (state) => state.getDashBoardDetailsReducer.dashBoardData
  );
  console.log("DASH", details);
  console.log(details?.getStripePayment)

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
            <MDBCardText>{details?.totalUsers}</MDBCardText>
            <MDBCardText>Total Registered Users</MDBCardText>
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
            <MDBCardText>{details?.totalBikes}</MDBCardText>
            <MDBCardText>Total Accepted Bikes</MDBCardText>
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
            <MDBCardText>{details?.totalBookings}</MDBCardText>
            <MDBCardText>Total Bookings Made</MDBCardText>
          </MDBCardBody>
        </MDBCard>
        {/* <MDBCard
          className="container w-25 h-25  ms-4 float-start  "
          style={{
            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)", // Replace with desired shadow properties
          }}
        >
          <MDBCardBody>
            <MDBCardTitle>Total Rent Amount</MDBCardTitle>
            <MDBCardText>12</MDBCardText>
          </MDBCardBody>
        </MDBCard> */}
      </div>
      {/* <RentRequestGraph /> */}
      <div
        className='mt-5 ms-5 col-10 col-md-4"  '
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MDBRow className="ms-5  container  float-start ">
          <MDBCol>
            {" "}
            <RentRequestGraph
              pending={details ? details.totalPendingRequests : "-"}
              rejected={details ? details.totalRejectedRequests : "-"}
              accepted={details ? details.totalAcceptedRequests : "-"}
              title={"Rent Requests Details"}
            />
          </MDBCol>
        </MDBRow>
        <MDBRow className="ms-5  container  float-start ">

          <MDBCol>
            {" "}
            <RentPaymentGraph
              Wallet={details ? details.getWalletPayment : "-"}
              Stripe={details ? details.getStripePayment : "-"}
              // accepted={details ? details.totalAcceptedRequests : "-"}
              title={"Rent Payment Details"}
            />
          </MDBCol>
        </MDBRow>
      </div>
    </div>
  );
}

export default Dashboard;
