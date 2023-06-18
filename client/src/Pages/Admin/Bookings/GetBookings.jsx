import React, { useEffect, useRef, useState } from "react";
import NoDataImg from "../../../assets/2953962.jpg";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import AdminDrawer from "../../../Components/AdminDashbored/AdminDrawer";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getBookingAction } from "../../../Redux/Actions/Admin_Action/getBookingDetailsAction";
import { GetBookingDetailsApi } from "../../../API/Admin/ApiCalls";
import { MDBDataTable } from "mdbreact";

import ReactPaginate from "react-paginate";

function GetBookings() {
  const [limit, setLimit] = useState(3);
  const [pageCount, setPageCount] = useState(1);
  const currentPage = useRef();
  // const [data, setData] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const BookigData = useSelector(
    (state) => state.getBookingDetailsReducer.Data
  );
  console.log('BookigData',BookigData);

  useEffect(() => {
    dispatch(getBookingAction());
    // currentPage.current = 1;
    // getPaginatedVehicle();
  }, []);
  // const handlePageClick = (e) => {
  //   currentPage.current = e.selected + 1;
  //   getPaginatedVehicle();
  // };

  // function getPaginatedVehicle() {
  //   GetBookingDetailsApi(currentPage.current, limit).then((data) => {
  //     setPageCount(data.data.pageCount);
  //     setData(data.data.result);
  //   });
  // }

  const data= {
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
        <MDBDataTable  striped bordered small data={data} />

      </div>
    </div>
  );
}

export default GetBookings;
