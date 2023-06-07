import React, { useEffect } from "react";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { bookingSaveAction } from "../../../Redux/Actions/User_Action/SaveBookingAction";
import { BookinSavegApi } from "../../../API/User/ApiCalls";

function CheckOutSuccess() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const userId = searchParams.get("userId").trim();
  const BikeId = searchParams.get("BikeId").trim();
  const totalHour = searchParams.get("totalHour").trim();
  const totalAmount = searchParams.get("totalAmount").trim();
  const HelmetRequired = searchParams.get("HelmetRequired").trim();
  const startdate = searchParams.get("startdate").trim();
  const enddate = searchParams.get("enddate").trim();
  const BikeName = searchParams.get("BikeName").trim();
  const BikePhoto = searchParams.get("BikePhoto").trim();
  const Description = searchParams.get("Description").trim();
  const paymentMethod = searchParams.get("paymentMethod").trim();
  const Location = searchParams.get("Location").trim();

  const UserName = searchParams.get("UserName");

  const details = {
    userId,
    UserName,
    BikeId,
    totalHour,
    totalAmount,
    HelmetRequired,
    startdate,
    enddate,
    BikeName,
    BikePhoto,
    Description,
    Location,
    paymentMethod,
  };

  useEffect(() => {
    // BookinSavegApi(details).then((data) => {
    dispatch(bookingSaveAction(details));
    Swal.fire({
      text: "Your Bike Has Been Order Successfull",
      icon: "success",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "My Orders",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/myrent");
      }
    });
    // });
  }, []);

  return <div></div>;
}

export default CheckOutSuccess;
