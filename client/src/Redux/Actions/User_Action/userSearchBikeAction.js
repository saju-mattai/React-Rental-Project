import { searchVehicleApi } from "../../../API/User/ApiCalls";
import { User_Action_Types } from "../../Constants/User_Constants/UserConstants";

export const searchBikeAction = (data) => async (dispatch) => {
  dispatch({
    type: User_Action_Types.USER_SEARCH_BIKE_REQUEST,
  });
  searchVehicleApi(data)
    .then((data) => {
      dispatch({
        type: User_Action_Types.USER_SEARCH_BIKE_SUCCESS,
        payload: data.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: User_Action_Types.USER_SEARCH_BIKE_FAIL,
        payload: err.response.data,
      });
    });
};
