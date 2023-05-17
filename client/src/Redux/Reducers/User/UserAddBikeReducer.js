import { User_Action_Types } from "../../Constants/User_Constants/UserConstants";

export const UserAddBikeReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case User_Action_Types.ADD_BIKE_USER_REQUEST:
      return {
        loading: true,
      };
    case User_Action_Types.ADD_BIKE_USER_SUCCESS:
      return {
        loading: false,
        AddBkeData: payload,
      };
    case User_Action_Types.ADD_BIKE_USER_FAIL:
      return {
        loading: false,
        AddBkeDataErr: payload,
      };

    default:
      return state;
  }
};
