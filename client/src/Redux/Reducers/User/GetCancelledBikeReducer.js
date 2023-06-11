import { User_Action_Types } from "../../Constants/User_Constants/UserConstants";

export const GetCancelledBikeReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case User_Action_Types.GET_CANCELLED_BIKE_REQUEST:
      return {
        loading: true,
      };
    case User_Action_Types.GET_CANCELLED_BIKE_SUCCESS:
      return {
        loading: false,
        Data: payload,
      };
    case User_Action_Types.GET_CANCELLED_BIKE_FAIL:
      return {
        loading: false,
        Err: payload,
      };
    default:
      return state;
  }
};
