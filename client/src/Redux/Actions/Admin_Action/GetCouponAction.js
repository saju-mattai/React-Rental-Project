import { GetCouponApi } from "../../../API/Admin/ApiCalls";
import { Admin_Action_Types } from "../../Constants/Admin_Constants/AdminConstants";

export const getCouponAction = () => async (dispatch) => {
  dispatch({
    type: Admin_Action_Types.GET_COUPON_REQ,
  });
  try {
    GetCouponApi()
      .then((data) => {
        dispatch({
          type: Admin_Action_Types.GET_COUPON_SUCCESS,
          payload: data.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: Admin_Action_Types.GET_COUPON_FAILED,
          payload: err.response,
        });
      });
  } catch (error) {}
};
