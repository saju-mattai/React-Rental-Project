import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Tab, Tabs, Typography, styled } from "@mui/material";
import PropTypes from "prop-types";
// import AllReport from "../../../components/SalesReport/AllReport";
// import WeeklyReport from "../../../components/SalesReport/WeeklyReport";
// import MonthlyReport from "../../../components/SalesReport/MonthlyReport";
// import YearlyReport from "../../../components/SalesReport/YearlyReport";
import { SalesReportAction } from "../../../Redux/Actions/Admin_Action/SalesReportAction";
import AdminDrawer from "../../../Components/AdminDashbored/AdminDrawer";
import AllReport from "../../../Components/SaleReport/AllReport";
import WeeklyReport from "../../../Components/SaleReport/WeeklyReport";
import MonthlyReport from "../../../Components/SaleReport/MonthlyReport";
import YearlyReport from "../../../Components/SaleReport/YearlyReport";

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

function SalesReport() {
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  }));

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SalesReportAction());
  }, []);

  const salesData = useSelector(
    (state) => state.getSalesReportReducer.Data
  );
  console.log(salesData);

  const labelStyles = {
    fontWeight: "bold",
    fontSize: "16px",
  };

  const cellStyles = {
    textAlign: "center",
  };
  return (
    <div>
      <Box sx={{ display: "flex" }}>
      <AdminDrawer />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <h1>Sales Report</h1>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                centered
              >
                <Tab label="All" />
                <Tab label="Weekly Report" />
                <Tab label="Monthly Report" />
                <Tab label="Yearly Report" />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              
                <AllReport salesData={salesData} />
             
            </TabPanel>
            <TabPanel value={value} index={1}>
             
                <WeeklyReport salesData={salesData} />
             
            </TabPanel>
            <TabPanel value={value} index={2}>
             
                <MonthlyReport salesData={salesData} />
              
            </TabPanel>
            <TabPanel value={value} index={3}>
              
              <YearlyReport salesData={salesData} />
            </TabPanel>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default SalesReport;
