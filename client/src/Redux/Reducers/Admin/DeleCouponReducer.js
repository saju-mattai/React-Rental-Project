import { Admin_Action_Types } from "../../Constants/Admin_Constants/AdminConstants";

export const DeleteCouponReducer = (state = {}, { type, payload }) => {
  switch (type) {
      case Admin_Action_Types.GET_COUPON_REQ:
        return {
          loading: true,
        };
      case Admin_Action_Types.GET_COUPON_SUCCESS:
        return {
          loading: false,
          Data: payload,
        };
      case Admin_Action_Types.GET_COUPON_FAILED:
        return {
          loading: false,
          Error: payload,
        };

        case Admin_Action_Types.DELETE_COUPON_REQUEST:
        return {
          loading: true,
        };
      case Admin_Action_Types.DELETE_COUPON_SUCCESS:
        return {
          loading: false,
          Data: payload,
        };
      case Admin_Action_Types.DELETE_COUPON_FAIL:
        return {
          loading: false,
          Error: payload,
        };

    default:
      return state;
  }
};
