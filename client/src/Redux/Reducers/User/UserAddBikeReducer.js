import { User_Action_Types } from "../../Constants/User_Constants/UserConstants";

export const UserAddBikeReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case User_Action_Types.ADD_BIKE_USER_REQUEST:
      return {
        addbikeloading: true,
      };
    case User_Action_Types.ADD_BIKE_USER_SUCCESS:
      return {
        addbikeloading: false,
        AddBkeData: payload,
      };
    case User_Action_Types.ADD_BIKE_USER_FAIL:
      return {
        addbikeloading: false,
        AddBkeDataErr: payload,
      };

    default:
      return state;
  }
};
