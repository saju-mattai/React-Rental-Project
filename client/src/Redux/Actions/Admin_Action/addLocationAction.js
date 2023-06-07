import { AddLocationApi, GetLocationApi } from "../../../API/Admin/ApiCalls";
import { Admin_Action_Types } from "../../Constants/Admin_Constants/AdminConstants";

export const AddLocationAction = (data) => async (dispatch) => {
  dispatch({
    type: Admin_Action_Types.ADD_LOCATION_REQUEST,
  });
  AddLocationApi(data)
    .then((data) => {

      dispatch({
        type: Admin_Action_Types.ADD_LOCATION_SUCCESS,
        payload: data.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: Admin_Action_Types.ADD_LOCATION_FAIL,
        payload: err.response.data,
      });
    });
};

export const getLocation = () => async (dispatch) => {
  dispatch({
    type: Admin_Action_Types.GET_LOCATION_REQ,
  });

  GetLocationApi()
    .then((data) => {
      dispatch({
        type: Admin_Action_Types.GET_LOCATION_SUCCESS,
        payload: data.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: Admin_Action_Types.GET_LOCATION_FAILED,
        payload: err.response.message,
      });
    });
};
