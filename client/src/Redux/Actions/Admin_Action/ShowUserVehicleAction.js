import { SearchUserVehicleApi, ShowUSerVehicleApi } from "../../../API/Admin/ApiCalls";
import { Admin_Action_Types } from "../../Constants/Admin_Constants/AdminConstants";

export const ShowUserBikesAction = () => async (dispatch) => {
  dispatch({
    type: Admin_Action_Types.SHOW_USER_VEHICLE_REQUEST,
  });
  try {
    ShowUSerVehicleApi()
      .then((data) => {
        dispatch({
          type: Admin_Action_Types.SHOW_USER_VEHICLE_SUCCESS,
          payload: data.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: Admin_Action_Types.SHOW_USER_VEHICLE_FAIL,
          payload: err.response.data,
        });
      });
  } catch (error) {}
};


export const SearchRentRequestBikesAction = () => async (dispatch) => {

  dispatch({
    type: Admin_Action_Types.SEARCH_USER_VEHICLE_REQUEST,
  });
  try {
    SearchUserVehicleApi()
      .then((data) => {
        dispatch({
          type: Admin_Action_Types.SEARCH_USER_VEHICLE_SUCCESS,
          payload: data.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: Admin_Action_Types.SEARCH_USER_VEHICLE_FAIL,
          payload: err.response.data,
        });
      });
  } catch (error) {}
}