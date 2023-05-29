import { ApplyCouponApi } from "../../../API/User/ApiCalls";
import { User_Action_Types } from "../../Constants/User_Constants/UserConstants";

export const applyCouponAction = (data) => async (dispatch) => {
  dispatch({
    type: User_Action_Types.APPLY_COUPON_REQUEST,
  });
  ApplyCouponApi(data)
    .then((data) => {
      console.log(data);
      dispatch({
        type: User_Action_Types.APPLY_COUPON_SUCCESS,
        payload: data.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: User_Action_Types.APPLY_COUPON_FAIL,
        payload: err.response.data,
      });
    });
};
