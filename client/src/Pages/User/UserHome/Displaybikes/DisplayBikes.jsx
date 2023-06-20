import React, { useEffect, useState } from "react";
import Usernavbar from "../../../../Components/UserNavBar/Usernavbar";
import { useSelector, useDispatch } from "react-redux";
import { GetAllVehicleAction } from "../../../../Redux/Actions/User_Action/GetAllVehicle";
import Button from "@mui/material/Button";
import NoDataImg from '../../../../assets/2953962.jpg'
import TextField from "@mui/material/TextField";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBContainer,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { searchVehicleApi } from "../../../../API/User/ApiCalls";
import { filterByBrandAction, filterByModelAction } from "../../../../Redux/Actions/User_Action/FilterAction";
import Footer from "../../../../Components/Footer/Footer";
import Loading from "../../../Loading";

function DisplayBikes() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedData, setSearchedData] = useState([]);
  const [filterbrand, setFilterBrand] = useState("");
  const [filtermodel, setFilterModel] = useState("");
  const Bikes = useSelector((state) => state.GetAllVehicleReducer);
  const { loading, vehicleData } = Bikes;

  useEffect(() => {
    dispatch(GetAllVehicleAction());
  }, []);

  const handleBook = (id) => {
    const filteredData = vehicleData.filter((item) => item._id === id);
    navigate("/booking", { state: { filteredData } });
  };

  const handleSignleView = (id) => {
    const filteredData = vehicleData.filter((item) => item._id === id);
    navigate("/singleview", { state: { filteredData } });
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
  };

  useEffect(() => {
    if (searchTerm) {
      handleSubmit();
    }
  }, [searchTerm]);

  const handleSubmit = () => {
    searchVehicleApi(searchTerm).then((data) => {
      setSearchedData(data.data);
    });
  };

  const handleFilter = () => {
    if (filterbrand) {
      dispatch(filterByBrandAction(filterbrand));
    } else {
      dispatch(filterByModelAction(filtermodel));
    }
  };

  const Data = searchTerm ? searchedData : vehicleData;

  return (
    <div>
      <Usernavbar />

      <div className="row justify-content-start">
        <div className="col d-flex p-5 mt-5">
          <MDBContainer className="container">
            <div
              className="text-center"
              style={{
                minHeight: "45%",
                width: "100%",
                marginBottom: "30%",
              }}
            >
              <div>
                <h5 className="">Filter</h5>
              </div>
              <div>
                <h6 className="container">Search By Brand</h6>
              </div>
              <div>
                <TextField
                  className="container"
                  id="standard-basic"
                  label="Enter Brand"
                  variant="standard"
                  onChange={(e) => {
                    setFilterBrand(e.target.value);
                  }}
                />
              </div>

              <div className="mt-3">
                <h6 className="container">Search By Model</h6>
              </div>
              <div>
                <TextField
                  id="standard-basic"
                  label="Enter Model"
                  variant="standard"
                  onChange={(e) => {
                    setFilterModel(e.target.value);
                  }}
                />
              </div>
              <div>
                <Button
                  onClick={handleFilter}
                  className="mt-3"
                  variant="contained"
                >
                  Apply Filter
                </Button>
              </div>
            </div>
          </MDBContainer>
        </div>
        <div className="col">
          <MDBContainer className="mt-5" style={{ width: "700px" }}>
            <h4 className="text-center">
              <b>Bikes</b>
            </h4>

            <MDBCol md="6">
              <input
                className="form-control"
                value={searchTerm}
                placeholder="Search"
                aria-label="Search"
                onChange={handleChange}
              />
            </MDBCol>

            {loading ? (
              <Loading />
            ) : (
              <MDBRow className="row-cols-1 row-cols-md-3 g-4">
                {Data && Data.length ? (
                  Data.map((item, i) => (
                    <div className="mt-5" key={i}>
                      <MDBCol>
                        <MDBCard
                          style={{
                            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                          }}
                        >
                          <MDBCardImage
                            onClick={() => {
                              handleSignleView(item._id);
                            }}
                            src={item?.Vphoto[0]?.url}
                            alt="..."
                            position="top"
                          />
                          <MDBCardBody>
                            <MDBCardTitle style={{ textAlign: "center" }}>
                              {item.Vname}
                            </MDBCardTitle>
                            <MDBCardText style={{ textAlign: "center" }}>
                              <p>Rs.{item.Vprice} Rent Per Hour/-</p>
                              <p>Model: {item.Vmodel}</p>
                              <p>Location: {item.Vlocation}</p>

                              <Button
                                onClick={() => {
                                  handleBook(item._id);
                                }}
                                variant="outlined"
                                color="success"
                              >
                                Book Now
                              </Button>
                            </MDBCardText>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                    </div>
                  ))
                ) : (
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={NoDataImg}
                      alt=""
                      style={{ width: "70%", height: "70%" }}
                    />
                  </div>
                )}
              </MDBRow>
            )}
          </MDBContainer>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default DisplayBikes;
