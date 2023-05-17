import { BikeRejectApi } from "../../../API/Admin/ApiCalls";
import { Admin_Action_Types } from "../../Constants/Admin_Constants/AdminConstants";

export const BikeRejectAction = (id) => async (dispatch) => {
  dispatch({
    type: Admin_Action_Types.USER_VEHICLE_REJECT_REQUEST,
  });
  try {
    BikeRejectApi(id)
      .then((data) => {
        dispatch({
          type: Admin_Action_Types.USER_VEHICLE_REJECT_SUCCESS,
          payload: data.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: Admin_Action_Types.USER_VEHICLE_REJECT_FAIL,
          payload: err.response.data,
        });
      });
  } catch (error) {}
};
