import { CancelMyRideApi } from "../../../API/User/ApiCalls";
import { User_Action_Types } from "../../Constants/User_Constants/UserConstants";

export const CancelMyRideAction = (id) => async (dispatch) => {
    console.log(id);

  dispatch({
    type: User_Action_Types.CANCEL_MY_RIDE_REQUEST,
  });
  CancelMyRideApi(id)
    .then((data) => {
      dispatch({
        type: User_Action_Types.CANCEL_MY_RIDE_SUCCESS,
        payload: data.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: User_Action_Types.CANCEL_MY_RIDE_FAIL,
        payload: err.response.data,
      });
    });
};
