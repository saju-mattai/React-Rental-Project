import { Admin_Action_Types } from "../../Constants/Admin_Constants/AdminConstants";

export const AddLocationReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case Admin_Action_Types.ADD_LOCATION_REQUEST:
      return {
        loading: true,
      };
    case Admin_Action_Types.ADD_LOCATION_SUCCESS:
      return {
        loading: false,
        Data: payload,
      };
    case Admin_Action_Types.ADD_LOCATION_FAIL:
      return {
        loading: false,
        Error: payload,
      };

      case Admin_Action_Types.GET_LOCATION_REQ:
        return {
          loading: true,
        };
      case Admin_Action_Types.GET_LOCATION_SUCCESS:
        return {
          loading: false,
          Data: payload,
        };
      case Admin_Action_Types.GET_LOCATION_FAILED:
        return {
          loading: false,
          Error: payload,
        };

        case Admin_Action_Types.EDIT_LOCATION_REQUEST:
        return {
          loading: true,
        };
      case Admin_Action_Types.EDIT_LOCATION_SUCCESS:
        return {
          loading: false,
          Data: payload,
        };
      case Admin_Action_Types.EDIT_LOCATION_FAIL:
        return {
          loading: false,
          Error: payload,
        };

    default:
      return state;
  }
};
