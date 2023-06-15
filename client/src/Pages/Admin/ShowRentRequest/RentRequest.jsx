import React, { useEffect, useState } from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { MDBDataTable } from 'mdbreact';
import {
  // SearchRentRequestBikesAction,
  ShowUserBikesAction,
} from "../../../Redux/Actions/Admin_Action/ShowUserVehicleAction";
import AdminDrawer from "../../../Components/AdminDashbored/AdminDrawer";
// import { BikeAcceptAction } from "../../../Redux/Actions/Admin_Action/UserBikeAcceptAction";
// import { BikeRejectAction } from "../../../Redux/Actions/Admin_Action/UserBikeRejectAction";
// import { MDBCol } from "mdb-react-ui-kit";

// import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
// import { SearchUserVehicleApi } from "../../../API/Admin/ApiCalls";

function RentRequest() {
  const [show, setShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [searchedData, setSearchedData] = useState([]);
  const Vehicledata = useSelector(
    (state) => state.ShowUserVehicleReducer.VehicleData
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleView = (id) => {
    const filteredData = Vehicledata.filter((item) => item._id === id);
    navigate("/viewmore-rentrequest", { state: { filteredData } });
  };

  useEffect(() => {
    dispatch(ShowUserBikesAction());
    // handleSubmit()
  }, [show, searchTerm]);

  // const handleSubmit = (e) => {
  //   dispatch(SearchRentRequestBikesAction(searchTerm));
  //   SearchUserVehicleApi(searchTerm).then((data) => {
  //     setSearchedData(data.data);
  //   });
  // };

  // const handleChange = (e) => {
  //   const { value } = e.target;
  //   setSearchTerm(value);
  // };
  // const tableData = searchTerm ? searchedData : Vehicledata;

  const data = {
    columns: [
      {
        label: "Sl No",
        field: "no",
        sort: "asc",
        width: 50,
      },
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 50,
      },
      {
        label: "Model",
        field: "model",
        sort: "asc",
        width: 50,
      },
      {
        label: "Brand",
        field: "brand",
        sort: "asc",
        width: 50,
      },
      {
        label: "Rent/Hour",
        field: "price",
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
        label: "Colour",
        field: "colour",
        sort: "asc",
        width: 50,
      },
      {
        label: "Number",
        field: "number",
        sort: "asc",
        width: 50,
      },
      {
        label: "Fuel",
        field: "fuel",
        sort: "asc",
        width: 50,
      },
      {
        label: "ViewMore",
        field: "view",
        sort: "asc",
        width: 50,
      },
    ],
    rows: Vehicledata?.map((item, index) => ({
      no: index + 1,
      name: item.Vname,
      model: item.Vmodel,
      brand: item.Vbrand,
      price: item.Vprice,
      image: (
        <div>
          {item.Vphoto && item.Vphoto.length > 0 && (
            <img
              src={item.Vphoto[0].url}
              alt="image"
              style={{ height: "80px", width: "100px" }}
            />
          )}
        </div>
      ),
      colour: item.Vcolor,
      number: item.Vnumber,
      fuel: item.Vfuel,

      view: (
        <div>
          <Button
            variant="outlined"
            onClick={() => {
              handleView(item._id);
            }}
          >
            View
          </Button>
        </div>
      ),
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
      <div style={{ marginTop: "2em", width: "75%" }} className="maintable">
        <div>
          <h1 className="text-center">
            {" "}
            <b>Rent Request </b>{" "}
          </h1>
        </div>
        <MDBDataTable striped bordered small data={data} />
        {/* <MDBCol md="6">
            <input
              className="form-control "
              value={searchTerm}
              placeholder="Search"
              aria-label="Search"
              // onChange={handleChange}
            /> */}
        {/* </MDBCol> */}
        {/* <MDBTable bordered>
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
              <th scope="col">View More</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {Vehicledata
              ? Vehicledata.map((data, index) => {
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
                    <td>
                    <Button
                          variant="outlined"
                          onClick={() => {
                            handleView(data._id);
                          }}
                        >
                          View  
                        </Button>
                    </td>

                 
                    </tr>
                  );
                })
              : ""}
          </MDBTableBody>
        </MDBTable> */}
      </div>
    </div>
  );
}

export default RentRequest;
