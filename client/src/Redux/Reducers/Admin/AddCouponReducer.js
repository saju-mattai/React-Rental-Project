import { Admin_Action_Types } from "../../Constants/Admin_Constants/AdminConstants";

export const AddCouponReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case Admin_Action_Types.ADD_COUPON_REQUEST:
      return {
        loading: true,
      };
    case Admin_Action_Types.ADD_COUPON_SUCCESS:
      return {
        loading: false,
        Data: payload,
      };
    case Admin_Action_Types.ADD_COUPON_FAIL:
      return {
        loading: false,
        Error: payload,
      };

    

    default:
      return state;
  }
};
