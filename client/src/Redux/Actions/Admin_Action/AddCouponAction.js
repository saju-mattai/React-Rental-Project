import { AddCouponApi } from "../../../API/Admin/ApiCalls";
import { Admin_Action_Types } from "../../Constants/Admin_Constants/AdminConstants";

export const AddCouponAction = (Coupon) => async (dispatch) => {
    console.log(Coupon);
  dispatch({
    type: Admin_Action_Types.ADD_COUPON_REQUEST,
  });
  AddCouponApi(Coupon)
    .then((data) => {

      dispatch({
        type: Admin_Action_Types.ADD_COUPON_SUCCESS,
        payload: data.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: Admin_Action_Types.ADD_COUPON_FAIL,
        payload: err.response.data,
      });
    });
};
