import { User_Action_Types } from "../../Constants/User_Constants/UserConstants";


export const applyCouponReducer = (state={},{type,payload})=>{
    switch (type) {
        case User_Action_Types.APPLY_COUPON_REQUEST:
          return {
            loading: true,
          };
        case User_Action_Types.APPLY_COUPON_SUCCESS:
          return {
            loading: false,
            Data: payload,
          };
        case User_Action_Types.APPLY_COUPON_FAIL:
          return {
            loading: false,
            Error: payload,
          };
    
        default:
          return state;
      }
}