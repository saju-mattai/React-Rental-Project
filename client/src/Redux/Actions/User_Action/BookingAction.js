import { useNavigate } from "react-router-dom";
import { BookingApi } from "../../../API/User/ApiCalls";
import { User_Action_Types } from "../../Constants/User_Constants/UserConstants";
import { message } from "antd";

export const BookingAction = (ReqObj) => async (dispatch) => {
  dispatch({
    type: User_Action_Types.BOOKING_REQUEST,
  });
  // BookingApi(ReqObj);
  // .then((data) => {

  // if (data.data.url) {
  //   window.location.href = data.data.url;
  //   console.log(data.data.url);
  // }
  // if (data.data.paymentMethod === "Wallet") {
  //   message.success("Hamsathali");
  // }
  dispatch({
    type: User_Action_Types.BOOKING_SUCCESS,
    payload: ReqObj,
  })
    // })
    .catch((err) => {
      dispatch({
        type: User_Action_Types.BOOKING_FAIL,
        payload: err.resoponse,
      });
      message.error("Somethig Went Wrong , Please Try Later ");
    });
};
