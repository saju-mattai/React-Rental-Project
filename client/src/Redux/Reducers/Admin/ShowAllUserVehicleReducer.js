import { Admin_Action_Types } from "../../Constants/Admin_Constants/AdminConstants";

export const ShowUserVehicleReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case Admin_Action_Types.SHOW_USER_VEHICLE_REQUEST:
      return {
        loading: true,
      };
    case Admin_Action_Types.SHOW_USER_VEHICLE_SUCCESS:
      return {
        loading: false,
        VehicleData: payload,
      };
    case Admin_Action_Types.SHOW_USER_VEHICLE_FAIL:
      return {
        loading: false,
        VehicleDataErr: payload,
      };

    case Admin_Action_Types.USER_VEHICLE_ACCEPT_REQUEST:
      return {
        loading: true,
      };
    case Admin_Action_Types.USER_VEHICLE_ACCEPT_SUCCESS:
      return {
        loading: false,
        VehicleData: payload,
      };
    case Admin_Action_Types.USER_VEHICLE_ACCEPT_FAIL:
      return {
        loading: false,
        VehicleDataErr: payload,
      };

      case Admin_Action_Types.USER_VEHICLE_REJECT_REQUEST:
        return {
          loading: true,
        };
      case Admin_Action_Types.USER_VEHICLE_REJECT_SUCCESS:
        return {
          loading: false,
          VehicleData: payload,
        };
      case Admin_Action_Types.USER_VEHICLE_REJECT_FAIL:
        return {
          loading: false,
          VehicleDataErr: payload,
        };

        case Admin_Action_Types.SEARCH_USER_VEHICLE_REQUEST:
          return {
            loading: true,
          };
        case Admin_Action_Types.SEARCH_USER_VEHICLE_SUCCESS:
          return {
            loading: false,
            VehicleData: payload,
          };
        case Admin_Action_Types.SEARCH_USER_VEHICLE_FAIL:
          return {
            loading: false,
            VehicleDataErr: payload,
          };

    default:
      return state;
  }
};
