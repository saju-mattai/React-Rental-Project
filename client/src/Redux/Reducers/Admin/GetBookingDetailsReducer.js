import { Admin_Action_Types } from "../../Constants/Admin_Constants/AdminConstants";

export const getBookingDetailsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case Admin_Action_Types.GET_BOOKING_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case Admin_Action_Types.GET_BOOKING_DETAILS_SUCCESS:
      return {
        loading: false,
        Data: payload,
      };
    case Admin_Action_Types.GET_BOOKING_DETAILS_SUCCESS:
      return {
        loading: false,
        Err: payload,
      };
    default:
      return state;
  }
};
