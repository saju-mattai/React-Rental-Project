import React, { useState } from "react";
import { Menu, Button, Text, Avatar } from "@mantine/core";
import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
} from "@tabler/icons-react";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import BikeScooterIcon from "@mui/icons-material/BikeScooter";
import { useNavigate } from "react-router-dom";

import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { UserLogOutAction } from "../../Redux/Actions/User_Action/UserLogOutAction";
import "./Use.css";

export default function Usernavbar() {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const UserData = useSelector((state) => state.UserLoginReducer.loginuserdata);
  // const userData = JSON.parse(localStorage.getItem('UserInfo'))

  const handleLogOut = () => {
    dispacth(UserLogOutAction());
    navigate("/");
  };
  const handleLogin = () => {
    navigate("/login");
  };
  const handleProfile = () => {
    navigate("/profile");
  };
  const handleBike = () => {
    navigate("/bikes");
  };

  const handleRentBike = () => {
    navigate("/rentbike");
  };
  const handleMyRentBike = () => {
    navigate("/mybikes");
  };
  const handleMyRide = () => {
    navigate("/myrent");
  };
  const handleChat = () => {
    navigate("/chat");
  };
  const handleHome = () => {
    navigate("/");
  };

  const [showNavColorThird, setShowNavColorThird] = useState(false);

  return (
    <>
      <MDBNavbar expand="lg" light style={{ backgroundColor: "#e3f2fd" }}>
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">Rent A Bike</MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavColorThird(!showNavColorThird)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColorThird} navbar>
            <MDBNavbarNav className="me-auto mb-4 mb-lg-0">
              <MDBNavbarItem className="active">
                <MDBNavbarLink
                  aria-current="page"
                  onClick={handleHome}
                  style={{ marginLeft: "22rem" }}
                >
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                {/* <MDBNavbarLink onClick={handleBike} style={{ marginLeft: '1rem' }}>Bikes</MDBNavbarLink> */}
                <Button
                  onClick={handleBike}
                  style={{
                    marginLeft: "1rem",
                    backgroundColor: "transparent",
                    border: "none",
                    color: "black",
                  }}
                >
                  Bikes
                </Button>
              </MDBNavbarItem>

              <MDBNavbarItem>
                {/* <MDBNavbarLink
                  onClick={handleRentBike}
                  style={{ marginLeft: "1rem" }}
                >
                  Rent A Bike
                </MDBNavbarLink> */}
                <Button
                  onClick={handleRentBike}
                  style={{
                    marginLeft: "1rem",
                    backgroundColor: "transparent",
                    border: "none",
                    color: "black",
                  }}
                >
                  Rent A Bike
                </Button>
              </MDBNavbarItem>
              <MDBNavbarItem>
                {/* <MDBNavbarLink
                  onClick={handleChat}
                  style={{ marginLeft: "1rem" }}
                >
                  Chat With Users
                </MDBNavbarLink> */}
                <Button
                  onClick={handleChat}
                  style={{
                    marginLeft: "1rem",
                    backgroundColor: "transparent",
                    border: "none",
                    color: "black",
                  }}
                >
                  Chat With Users
                </Button>
              </MDBNavbarItem>
            </MDBNavbarNav>
            {/* <strong>Login</strong> */}

            <Menu shadow="md" width={200}>
              <Menu.Target>
                {UserData ? (
                  <Button> Hi {UserData?.name}</Button>
                ) : (
                  <Button onClick={handleLogin}>Login</Button>
                )}
              </Menu.Target>

              <Menu.Dropdown>
                {/* <Menu.Label>Application</Menu.Label> */}
                <Menu.Item
                  onClick={handleProfile}
                  icon={<AccountCircleIcon size={25} />}
                >
                  Profile
                </Menu.Item>
                <Menu.Item
                  onClick={handleLogOut}
                  icon={<LogoutIcon size={20} />}
                >
                  Log Out
                </Menu.Item>
                <Menu.Item
                  onClick={handleMyRentBike}
                  icon={<TwoWheelerIcon size={20} />}
                >
                  My Bikes
                </Menu.Item>
                <Menu.Item
                  onClick={handleMyRide}
                  icon={<BikeScooterIcon size={20} />}
                >
                  My Rides
                </Menu.Item>

                <Menu.Item
                  icon={<IconSearch size={14} />}
                  rightSection={
                    <Text size="xs" color="dimmed">
                      ⌘K
                    </Text>
                  }
                >
                  Search
                </Menu.Item>

                {/* <Menu.Divider /> */}

                {/* <Menu.Label>Danger zone</Menu.Label>
                                <Menu.Item icon={<IconArrowsLeftRight size={14} />}>Transfer my data</Menu.Item>
                                <Menu.Item color="red" icon={<IconTrash size={14} />}>Delete my account</Menu.Item> */}
              </Menu.Dropdown>
            </Menu>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
