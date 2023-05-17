import { GetAllUserVehicleApi } from "../../../API/User/ApiCalls";
import { User_Action_Types } from "../../Constants/User_Constants/UserConstants";

export const GetAllUserVehicleAction = () => async (dispatch) => {
  dispatch({
    type: User_Action_Types.GET_ALL_USER_VEHICLE_REQUEST,
  });
  try {
    GetAllUserVehicleApi()
      .then((data) => {
        dispatch({
          type: User_Action_Types.GET_ALL_USER_VEHICLE_SUCCESS,
          payload: data.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: User_Action_Types.GET_ALL_USER_VEHICLE_FAIL,
          payload: err.response.data,
        });
      });
  } catch (error) {}
};
