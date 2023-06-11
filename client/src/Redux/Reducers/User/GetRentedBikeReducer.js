import { User_Action_Types } from "../../Constants/User_Constants/UserConstants";

export const getRentedBikeReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case User_Action_Types.GET_MY_RENTED_BIKE_REQUEST:
      return {
        loading: true,
      };
    case User_Action_Types.GET_MY_RENTED_BIKE_SUCCESS:
      return {
        loading: false,
        Data: payload,
      };
    case User_Action_Types.GET_MY_RENTED_BIKE_FAIL:
      return {
        loading: false,
        Err: payload,
      };

    case User_Action_Types.CANCEL_MY_RIDE_REQUEST:
      return {
        loading: true,
      };
    case User_Action_Types.CANCEL_MY_RIDE_SUCCESS:
      return {
        loading: false,
        Data: payload,
      };
    case User_Action_Types.CANCEL_MY_RIDE_FAIL:
      return {
        loading: false,
        Err: payload,
      };

   
    default:
      return state;
  }
};
