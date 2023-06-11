import React, { useEffect } from "react";
import Paper from "@mui/material/Paper";
import Usernavbar from "../../../Components/UserNavBar/Usernavbar";
import Button from "@mui/material/Button";

import Swal from "sweetalert2";
// import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { GetRentedBikeAction } from "../../../Redux/Actions/User_Action/GetRentedBikeAction";
// import { CancelMyRideAction } from "../../../Redux/Actions/User_Action/CancelMyRideAction";
import { Box, Stack, Tab, Tabs, Typography, styled } from "@mui/material";
import PropTypes from "prop-types";
import AllRide from "../../../Components/RentedRides/AllRide";
import CancelledRides from "../../../Components/RentedRides/CancelledRides";
import { getCancelledBikeAction } from "../../../Redux/Actions/User_Action/GetCancelledBike";
import {  getOnrideBikeAction } from "../../../Redux/Actions/User_Action/GetOnrideAction";
import OnRide from "../../../Components/RentedRides/OnRide";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
function Myrent() {
  const RentedRide = useSelector((state) => state.getRentedBikeReducer.Data);
  const CancelledRide = useSelector((state) => state.GetCancelledBikeReducer.Data);
  // const Onride = useSelector((state) => state.GetOnrideBikeReducer.Data);


 

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetRentedBikeAction());
    dispatch(getCancelledBikeAction())
    dispatch(getOnrideBikeAction())
    // Swal.fire('Come With Id Proof For Purchase')
  }, []);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
      <Usernavbar />

      <Box sx={{ width: "100%" }}>
        <Stack spacing={2} className="mt-3">
          <Item>
            <h3>Your Rides</h3>
          </Item>
        </Stack>
      </Box>

      <Box sx={{ width: "100%" }} className="mt-3 container">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            centered
          >
            <Tab label="My Rides " />
            {/* <Tab label="On Ride"></Tab> */}
            {/* <Tab label="Completed Rides" /> */}
            {/* <Tab label="Pending Rides" /> */}
            <Tab label="Cancelled Rides" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <AllRide data={RentedRide} />
        </TabPanel>
{/* 
        <TabPanel value={value} index={1}>
          <OnRide data={Onride} />
        </TabPanel> */}

        {/* <TabPanel value={value} index={2}>
          <CompletedRides data={RentedRide} />
          CompletedRides
        </TabPanel> */}

      

        <TabPanel value={value} index={1}>
          <CancelledRides data={CancelledRide} />
        </TabPanel>
      </Box>
    </div>
  );
}

export default Myrent;

{
  /* <MDBTable className="caption-top container ">
        
        <caption>List Of Orders</caption>
        <MDBTableHead>
          <tr>
            <th scope="col">SI</th>
            <th scope="col">Image</th>
            <th scope="col">Bike Name</th>
            <th scope="col">Starting Time</th>
            <th scope="col">Ending Time</th>
            <th scope="col">Total Hours</th>
            <th scope="col">Payment</th>
            <th scope="col">Location</th>
            <th scope="col">Total Amount</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {BikeData
            ? BikeData.map((data, index) => {
                return (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>
                      <img
                        src={data.BikePhoto}
                        alt="image"
                        style={{ height: "80px", width: "100px" }}
                      />
                    </td>
                    <td>{data.BikeName}</td>
                    <td>{data.startdate}</td>
                    <td>{data.enddate}</td>
                    <td>{data.totalHour} Hour</td>
                    <td>{data.paymentMethod} </td>
                    <td>{data.Location} </td>
                    <td>Rs.{data.totalAmount} </td>
                    <td>{data.status} </td>
                    <td>
                      {" "}
                      {data.status === "Booked" ? (
                        <Button
                          onClick={() => {
                            handleCancel(data._id);
                          }}
                          variant="outlined"
                          color="error"
                        >
                          Cancel
                        </Button>
                      ) : (
                        ""
                      )}
                    </td>
                  </tr>
                );
              })
            : ""}
        </MDBTableBody>
      </MDBTable> */
}
