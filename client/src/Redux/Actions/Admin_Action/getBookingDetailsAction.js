import { GetBookingDetailsApi } from "../../../API/Admin/ApiCalls";
import { Admin_Action_Types } from "../../Constants/Admin_Constants/AdminConstants";

export const getBookingAction = () => async (dispatch) => {
  dispatch({
    type: Admin_Action_Types.GET_BOOKING_DETAILS_REQUEST,
  });
  try {
    GetBookingDetailsApi()
      .then((data) => {
        dispatch({
          type: Admin_Action_Types.GET_BOOKING_DETAILS_SUCCESS,
          payload: data.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: Admin_Action_Types.GET_BOOKING_DETAILS_FAIL,
          payload: err.response,
        });
      });
  } catch (error) {}
};
