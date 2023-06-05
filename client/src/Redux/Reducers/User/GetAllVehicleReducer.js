import { User_Action_Types } from "../../Constants/User_Constants/UserConstants";

export const GetAllVehicleReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case User_Action_Types.GET_ALL_VEHICLE_REQUEST:
      return {
        loading: true,
      };
    case User_Action_Types.GET_ALL_VEHICLE_SUCCESS:
      return {
        loading: false,
        vehicleData: payload,
      };
    case User_Action_Types.GET_ALL_VEHICLE_FAIL:
      return {
        loading: false,
        vehicleDataErr: payload,
      };

    case User_Action_Types.GET_ALL_USER_VEHICLE_REQUEST:
      return {
        loading: true,
      };
    case User_Action_Types.GET_ALL_USER_VEHICLE_SUCCESS:
      return {
        loading: false,
        vehicleData: payload,
      };
    case User_Action_Types.GET_ALL_USER_VEHICLE_FAIL:
      return {
        loading: false,
        vehicleDataErr: payload,
      };

    case User_Action_Types.USER_SEARCH_BIKE_REQUEST:
      return {
        loading: true,
      };
    case User_Action_Types.USER_SEARCH_BIKE_SUCCESS:
      return {
        loading: false,
        vehicleData: payload,
      };
    case User_Action_Types.USER_SEARCH_BIKE_FAIL:
      return {
        loading: false,
        vehicleDataErr: payload,
      };


      case User_Action_Types.USER_FILTER_BY_BRAND_REQUEST:
        return {
          loading: true,
        };
      case User_Action_Types.USER_FILTER_BY_BRAND_SUCCESS:
        return {
          loading: false,
          vehicleData: payload,
        };
      case User_Action_Types.USER_FILTER_BY_BRAND_FAIL:
        return {
          loading: false,
          vehicleDataErr: payload,
        };

        case User_Action_Types.USER_FILTER_BY_MODEL_REQUEST:
        return {
          loading: true,
        };
      case User_Action_Types.USER_FILTER_BY_MODEL_SUCCESS:
        return {
          loading: false,
          vehicleData: payload,
        };
      case User_Action_Types.USER_FILTER_BY_MODEL_FAIL:
        return {
          loading: false,
          vehicleDataErr: payload,
        };

    default:
      return state;
  }
};
