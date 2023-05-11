import React, { useEffect } from "react";
import Usernavbar from "../../../../Components/UserNavBar/Usernavbar";
import { useSelector, useDispatch } from "react-redux";
import { GetAllVehicleAction } from "../../../../Redux/Actions/User_Action/GetAllVehicle";
import Button from '@mui/material/Button';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBCardFooter,
} from "mdb-react-ui-kit";
// import './DisplayBikes.css'

function DisplayBikes() {
  const dispacth = useDispatch();

  const Bikes = useSelector((state) => state.GetAllVehicleReducer.vehicleData);
  console.log(Bikes);
  useEffect(() => {
    dispacth(GetAllVehicleAction());
  }, []);

  return (
    <div>
      <Usernavbar />

      <MDBContainer className="mt-5" style={{ width: "700px" }}>
        <MDBRow className="row-cols-1 row-cols-md-3 g-4">
          {Bikes
            ? Bikes.map((item, i) => {
                return (
                  <div className="mt-5">
                    <MDBCol>
                      <MDBCard style={ {boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>
                        <MDBCardImage
                          src={item?.Vphoto[0]?.url}
                          alt="..."
                          position="top"
                        />
                        <MDBCardBody>
                          <MDBCardTitle style={{ textAlign: "center" }}>{item.Vname}</MDBCardTitle>
                          <MDBCardText style={{ textAlign: "center" }} >
                            {/* <div style={{ textAlign: "center" }}> */}
                            <p  >{item.Vprice} Rent Per Hour/-</p>
                              <p >{item.Vmodel} Model</p>
                              <Button variant="outlined" color="success">Book Now</Button>
                            {/* </div> */}
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                    
                  </div>
                );
              })
            : ""}
        </MDBRow>
      </MDBContainer>

      {/* <Row justify="center" gutter={16} className="mt-5">
        {Bikes
          ? Bikes.map((item, i) => {
              return (
                <Col lg={5} sm={24} xs={24}>
                  <div className="bike p-2 bs1 mt-3">
                    <img
                      src={item?.Vphoto[0]?.url}
                      alt=""
                      srcset=""
                      className="bikeimg"
                    />

                    <div className="bike-content d-flex align-items-center  ">
                      <div>
                        <p>{item.Vname}</p>
                        <p>{item.Vprice} Rent Per Hour/-</p>
                      </div>
                      <div>
                        <button className="btn1" >Book Now</button>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })
          : ""}
      </Row> */}
    </div>
  );
}

export default DisplayBikes;
{
  /* <Col lg={5} sm={24} xs={24}>
                  <div className="bike mt-2" style={{ padding: '2px', border: '1.5px solid black' }}>

                    <img src={item?.Vphoto[0]?.url} alt="" srcset=""  className="bikeimg" />

                    <div className="bike-content d-flex">
                      <div>
                        <p>{item.Vname}</p>
                        <p>{item.Vprice} Rent Per Hour/-</p>

                      </div>
                      <div>
                        <button className="btn1">Book Now</button>
                      </div>

                    </div>
                  </div>
                </Col> */
}
