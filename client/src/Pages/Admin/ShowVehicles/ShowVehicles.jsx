import React, { useEffect, useRef, useState } from "react";
import ReactPaginate from "react-paginate";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import AdminDrawer from "../../../Components/AdminDashbored/AdminDrawer";
import { useDispatch } from "react-redux";
import { ShowAllVehicleAction } from "../../../Redux/Actions/Admin_Action/ShowAllVehicleAction";
import Button from "@mui/material/Button";
import { deleteVehicleAction } from "../../../Redux/Actions/Admin_Action/DeleteVehicleAction";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import { ShowAllVehicleApi } from "../../../API/Admin/ApiCalls";

function ShowVehicles() {
  const [limit, setLimit] = useState(3);
  const [pageCount, setPageCount] = useState(1);
  const currentPage = useRef();
  const [data, setData] = useState("");

  // const data = useSelector(
  //   (state) => state.ShowAllVehicleReducer.VehicleData
  // );
  // console.log("data", data);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Dispatch deleteVehicleAction and ShowAllVehicleAction here
        dispatch(deleteVehicleAction(id));
        dispatch(ShowAllVehicleAction());

        Swal.fire("Deleted!", "Your vehicle has been deleted.", "success");
      }
    });
  };
  const handleEdit = (id) => {
    const filteredData = data.filter((item) => item._id === id);
    navigate("/editvehicle", { state: { filteredData } });
  };
  useEffect(() => {
    dispatch(ShowAllVehicleAction());
    currentPage.current = 1;
    getPaginatedVehicle();
  }, []);

  const handlePageClick = (e) => {
    currentPage.current = e.selected + 1;
    getPaginatedVehicle();
  };
  function getPaginatedVehicle() {
    ShowAllVehicleApi(currentPage.current, limit).then((data) => {
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
              <th scope="col">Name</th>
              <th scope="col">Model</th>
              <th scope="col">Brand</th>
              <th scope="col">Rent/Hour</th>
              <th scope="col">Image</th>
              <th scope="col">Colour</th>
              <th scope="col">Number</th>
              <th scope="col">Fuel</th>
              <th scope="col">Status</th>
              <th scope="col">Edit</th>
              <th scope="col"> Delete</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {data
              ? data.map((data, index) => {
                  return (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{data.Vname}</td>
                      <td>{data.Vmodel}</td>
                      <td>{data.Vbrand}</td>
                      <td>{data.Vprice}</td>
                      <td>
                        {data.Vphoto && data.Vphoto.length > 0 && (
                          <img
                            src={data.Vphoto[0].url}
                            alt="image"
                            style={{ height: "80px", width: "100px" }}
                          />
                        )}
                      </td>

                      <td>{data.Vcolor}</td>
                      <td>{data.Vnumber}</td>

                      <td>{data.Vfuel}</td>
                      <td>{data.Vstatus}</td>

                      <td>
                        <Button
                          variant="outlined"
                          onClick={() => {
                            handleEdit(data._id);
                          }}
                        >
                          Edit
                        </Button>
                      </td>
                      <td>
                        <Button
                          variant="outlined"
                          color="error"
                          onClick={() => {
                            handleDelete(data._id);
                          }}
                        >
                          Delete
                        </Button>
                      </td>
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

export default ShowVehicles;
