import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import ReactPaginate from "react-paginate";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import {
  ShowAllUSerAction,
  searchUserAction,
} from "../../Redux/Actions/Admin_Action/ShowAllUserAction";
import { BlockUnblockAction } from "../../Redux/Actions/Admin_Action/BlockUnblockAction";
import Button from "@mui/material/Button";
import AdminDrawer from "../AdminDashbored/AdminDrawer";
import { SearchUserApi, ShowAllUSerApi } from "../../API/Admin/ApiCalls";
import TextField from "@mui/material/TextField";
export default function ShowAllUser() {
    const SearchedData = useSelector((state) => state.ShowAllUSerReducer);
    console.log(SearchedData);

  const [limit, setLimit] = useState(4);
  const [pageCount, setPageCount] = useState(1);
  const currentPage = useRef();
  const [data, setData] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const [searchedData, setSearchedData] = useState([]);

  

  

  const dispatch = useDispatch();

 

  useEffect(() => {
    dispatch(ShowAllUSerAction());
    currentPage.current = 1;
    getPaginatedUser();
    if (searchTerm) {
      handleSubmit();
    }
    
  }, [searchTerm]);

  const handlePageClick = (e) => {
    currentPage.current = e.selected + 1;
    getPaginatedUser();
  };
  function getPaginatedUser() {
    ShowAllUSerApi(currentPage.current, limit).then((data) => {
      setPageCount(data.data.pageCount);
      setData(data.data.result);
    });
  }
  


  const handleBlockUnblock = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action will block/unblock the user.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(BlockUnblockAction(id));
        Swal.fire({
          title: "Success!",
          text: "User has been blocked/unblocked.",
          icon: "success",
        });
      }
    });
  };
  const handleSubmit = (e) => {
    // dispatch(searchUserAction(searchTerm));
    SearchUserApi(searchTerm).then((data)=>{
      setSearchedData(data.data)
    })
  };
  const handleChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
  };
  const tableData = searchTerm ? searchedData : data;


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
        
        <TextField
          className="w-50 mb-3"
          id="outlined-basic"
          variant="outlined"
          value={searchTerm}
          fullWidth
          label="Search"
          onChange={handleChange}
        />

        <MDBTable bordered>
          <MDBTableHead>
            <tr >
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Place</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {tableData
              ? tableData.map((data, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{data.name}</td>
                      <td>{data.email}</td>
                      <td>{data.place}</td>
                      <td>
                        {data.status === true
                          ? "Access Allowed"
                          : "Access Denied"}
                      </td>

                      <td>
                        <Button
                          variant="outlined"
                          onClick={() => {
                            handleBlockUnblock(data._id);
                          }}
                          style={
                            data.status
                              ? {
                                  backgroundColor: "red",
                                  width: "100px",
                                  color: "white",
                                }
                              : {
                                  backgroundColor: "green",
                                  width: "100px",
                                  color: "white",
                                }
                          }
                        >
                          {" "}
                          {data.status ? "Block" : "Unblock"}{" "}
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
