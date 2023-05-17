import {  BikeAcceptApi } from "../../../API/Admin/ApiCalls";
import { Admin_Action_Types } from "../../Constants/Admin_Constants/AdminConstants";

export const BikeAcceptAction = (id) => async (dispatch) => {
  dispatch({
    type: Admin_Action_Types.USER_VEHICLE_ACCEPT_REQUEST,
  });
  try {
    BikeAcceptApi(id)
      .then((data) => {
        dispatch({
          type: Admin_Action_Types.USER_VEHICLE_ACCEPT_SUCCESS,
          payload: data.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: Admin_Action_Types.USER_VEHICLE_ACCEPT_FAIL,
          payload: err.response.data,
        });
      });
  } catch (error) {}
};
