import { GetRentedBikeApi } from "../../../API/User/ApiCalls";
import { User_Action_Types } from "../../Constants/User_Constants/UserConstants";

export const GetRentedBikeAction = () => async (dispatch) => {
  dispatch({
    type: User_Action_Types.GET_MY_RENTED_BIKE_REQUEST,
  });
  GetRentedBikeApi()
    .then((data) => {
      dispatch({
        type: User_Action_Types.GET_MY_RENTED_BIKE_SUCCESS,
        payload: data.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: User_Action_Types.GET_MY_RENTED_BIKE_FAIL,
        payload: err.response.data,
      });
    });
};
