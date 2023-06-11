import { GetCanceledBikeApi } from "../../../API/User/ApiCalls";
import { User_Action_Types } from "../../Constants/User_Constants/UserConstants";

export const getCancelledBikeAction = () => async (dispacth) => {
  dispacth({
    type: User_Action_Types.GET_CANCELLED_BIKE_REQUEST,
  });
  GetCanceledBikeApi()
    .then((data) => {
      dispacth({
        type: User_Action_Types.GET_CANCELLED_BIKE_SUCCESS,
        payload: data.data,
      });
    })
    .catch((err) => {
      dispacth({
        type: User_Action_Types.GET_CANCELLED_BIKE_REQUEST,
        payload: err.response.data,
      });
    });
};
