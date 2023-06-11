import { GetOnrideBikeApi } from "../../../API/User/ApiCalls";
import { User_Action_Types } from "../../Constants/User_Constants/UserConstants";

export const getOnrideBikeAction = () => async (dispacth) => {
  dispacth({
    type: User_Action_Types.GET_ONRIDE_BIKE_REQUEST,
  });
  GetOnrideBikeApi()
    .then((data) => {
        console.log(data);
      dispacth({
        type: User_Action_Types.GET_ONRIDE_BIKE_SUCCESS,
        payload: data.data,
      });
    })
    .catch((err) => {
      dispacth({
        type: User_Action_Types.GET_ONRIDE_BIKE_FAIL,
        payload: err.response.data,
      });
    });
};
