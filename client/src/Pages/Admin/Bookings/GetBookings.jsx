import React, { useEffect, useRef, useState } from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import AdminDrawer from "../../../Components/AdminDashbored/AdminDrawer";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getBookingAction } from "../../../Redux/Actions/Admin_Action/getBookingDetailsAction";
import { GetBookingDetailsApi } from "../../../API/Admin/ApiCalls";
import ReactPaginate from "react-paginate";

function GetBookings() {
  const [limit, setLimit] = useState(3);
  const [pageCount, setPageCount] = useState(1);
  const currentPage = useRef();
  const [data, setData] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const data = useSelector((state) => state.getBookingDetailsReducer.data);
  // console.log(data);

  useEffect(() => {
    dispatch(getBookingAction());
    currentPage.current = 1;
    getPaginatedVehicle();
  }, []);
  const handlePageClick = (e) => {
    currentPage.current = e.selected + 1;
    getPaginatedVehicle();
  };

  
  function getPaginatedVehicle() {
    GetBookingDetailsApi(currentPage.current, limit).then((data) => {
      setPageCount(data.data.pageCount);
      setData(data.data.result);
    });
  }

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
            {data
              ? data.map((data, index) => {
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
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName="pagination justify-content-center"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          activeClassName="active"
        />
      </div>
    </div>
  );
}

export default GetBookings;
