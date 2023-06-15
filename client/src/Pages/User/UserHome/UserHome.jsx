import React from "react";
import Usernavbar from "../../../Components/UserNavBar/Usernavbar";
import { useSelector } from "react-redux";
// import Userhomemain from '../../../Components/UserHomeMain/Userhomemain'

function UserHome() {
  return (
    <div>
      <Usernavbar />
      {/* <Userhomemain /> */}
    </div>
  );
}

export default UserHome;
