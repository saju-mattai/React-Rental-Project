import React from "react";
import Usernavbar from "../../../Components/UserNavBar/Usernavbar";
import { useSelector } from "react-redux";
// import Userhomemain from '../../../Components/UserHomeMain/Userhomemain'

function UserHome() {
  const user = useSelector((state) => state.UserLoginReducer?.loginuserdata);
  console.log("CURRENT", user);
  return (
    <div>
      <Usernavbar />
      {/* <Userhomemain /> */}
    </div>
  );
}

export default UserHome;
