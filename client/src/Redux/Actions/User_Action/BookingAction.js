import { BookingApi } from "../../../API/User/ApiCalls";
import { User_Action_Types } from "../../Constants/User_Constants/UserConstants";
import { message } from "antd";

export const BookingAction = (ReqObj) => async (dispatch) => {
  console.log(ReqObj, "pppppppp");
  dispatch({
    type: User_Action_Types.BOOKING_REQUEST,
  });
  BookingApi(ReqObj)
    .then((data) => {
      dispatch({
        type: User_Action_Types.BOOKING_SUCCESS,
        payload: data.data,
      });
      message.success("your Bike Booked Successfully");
    })
    .catch((err) => {
      dispatch({
        type: User_Action_Types.BOOKING_FAIL,
        payload: err.resoponse,
      });
      message.error("Somethig Went Wrong , Please Try Later ");
    });
};
