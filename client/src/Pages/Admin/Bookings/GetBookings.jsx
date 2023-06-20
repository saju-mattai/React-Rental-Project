import React, { useEffect } from "react";
import AdminDrawer from "../../../Components/AdminDashbored/AdminDrawer";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getBookingAction } from "../../../Redux/Actions/Admin_Action/getBookingDetailsAction";
import { MDBDataTable } from "mdbreact";

function GetBookings() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const BookigData = useSelector(
    (state) => state.getBookingDetailsReducer.Data
  );
  console.log("BookigData", BookigData);

  useEffect(() => {
    dispatch(getBookingAction());
  }, []);

  const data = {
    columns: [
      {
        label: "Sl No",
        field: "no",
        sort: "asc",
        width: 50,
      },
      {
        label: "UserName",
        field: "username",
        sort: "asc",
        width: 50,
      },
      {
        label: "Bike",
        field: "bike",
        sort: "asc",
        width: 50,
      },
      {
        label: "Image",
        field: "image",
        sort: "asc",
        width: 50,
      },
      {
        label: "Location",
        field: "location",
        sort: "asc",
        width: 50,
      },
      {
        label: "StartDate",
        field: "startdate",
        sort: "asc",
        width: 50,
      },
      {
        label: "EndDate",
        field: "enddate",
        sort: "asc",
        width: 50,
      },
      {
        label: "TotalAmount",
        field: "totalamount",
        sort: "asc",
        width: 50,
      },
      {
        label: "Payment",
        field: "payment",
        sort: "asc",
        width: 50,
      },
      {
        label: "CancelReason",
        field: "cancelReason",
        sort: "asc",
        width: 50,
      },
      {
        label: "Status",
        field: "status",
        sort: "asc",
        width: 50,
      },
    ],
    rows: BookigData?.map((item, index) => ({
      no: index + 1,
      username: item.UserName,
      bike: item.BikeName,
      image: (
        <div>
          <img
            src={item.BikePhoto}
            alt="image"
            style={{ height: "80px", width: "100px" }}
          />
        </div>
      ),
      location: item.Location,
      startdate: item.startdate,
      enddate: item.enddate,
      totalamount: item.totalAmount,
      payment: item.paymentMethod,
      cancelReason: item.cancelReason,
      status: item.status,
    })),
  };

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
      <div style={{ marginTop: "1em", width: "75%" }} className="maintable">
        <div>
          <h1 className="text-center">
            {" "}
            <b> Booking Details</b>{" "}
          </h1>
        </div>
        <MDBDataTable striped bordered small data={data} />
      </div>
    </div>
  );
}

export default GetBookings;
