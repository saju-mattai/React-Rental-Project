import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ReceiptIcon from '@mui/icons-material/Receipt';

import DashboardIcon from "@mui/icons-material/Dashboard";
import UsersIcon from "@mui/icons-material/Group";
import RequestPageIcon from "@mui/icons-material/RequestPage";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import TwoWheelerRoundedIcon from "@mui/icons-material/TwoWheelerRounded";
import SportsMotorsportsIcon from "@mui/icons-material/SportsMotorsports";
import LogoutIcon from "@mui/icons-material/Logout";
import AddIcon from "@mui/icons-material/Add";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SummarizeIcon from "@mui/icons-material/Summarize";
import BikeScooterTwoToneIcon from "@mui/icons-material/BikeScooterTwoTone";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LogOutAction } from "../../Redux/Actions/Admin_Action/AdminLogoutAction";
// import { adminLogoutAction } from '../../redux/Actions/ADMIN_ACTIONS/LogoutAction';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function AdminDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    dispatch(LogOutAction());
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        style={{ backgroundColor: "#6366F1", color: "black" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Rent A Bike
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            {
              name: "Dashboard",
              icon: <DashboardIcon style={{ color: "#6366F1" }} />,
            },
            { name: "Users", icon: <UsersIcon style={{ color: "#6366F1" }} /> },
            {
              name: "Bikes",
              icon: <TwoWheelerRoundedIcon style={{ color: "#6366F1" }} />,
            },
            {name : "Bookings" , icon : <SportsMotorsportsIcon  style={{ color: "#6366F1" }}  />},
            {
              name: "Add Bikes",
              icon: <AddIcon style={{ color: "#6366F1" }} />,
            },
            {
              name: "Rent Requests",
              icon: <BikeScooterTwoToneIcon style={{ color: "#6366F1" }} />,
            },
            // {name : "Locations" , icon : <LocationOnIcon/>},
            {name : "Coupons" , icon : <ReceiptIcon   style={{ color: "#6366F1" }} />},
            // {name : "Sales Report", icon : <SummarizeIcon/>},
            {
              name: "Logout",
              icon: <LogoutIcon style={{ color: "#6366F1" }} />,
            },
          ].map((text, index) => (
            <ListItem key={text.name} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {text.icon}
                </ListItemIcon>
                <ListItemText
                  primary={text.name}
                  sx={{ opacity: open ? 1 : 0 }}
                  onClick={() => {
                    let text2 = text.name.toLowerCase();
                    text2 === "dashboard" && navigate("/adminhome");
                    text2 === "users" && navigate("/showalluser");
                    text2 === "bikes" && navigate("/showallvehicle");
                    text2 === "add bikes" && navigate("/addvehicle");
                      text2 === 'bookings' && navigate('/getbookings')
                    text2 === "rent requests" && navigate("/rentrequest");
                    //   text2 === 'locations' && navigate('/admin/locations')
                    //   text2 === 'add location' && navigate('/admin/add-location')
                      text2 === 'coupons' && navigate('/addcoupon')
                    //   text2 === 'sales report' && navigate('/admin/sales-report')
                    text2 === "logout" && handleLogout();
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
