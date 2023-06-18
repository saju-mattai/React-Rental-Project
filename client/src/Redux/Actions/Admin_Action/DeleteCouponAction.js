import { DeleteCouponApi,  } from "../../../API/Admin/ApiCalls";
import { Admin_Action_Types } from "../../Constants/Admin_Constants/AdminConstants";

export const deleteCouponAction = (id) => async (dispatch)=>{
    console.log(id);
    dispatch({
        type:Admin_Action_Types.DELETE_COUPON_REQUEST
    })
    try {
        DeleteCouponApi(id).then((data)=>{
           dispatch({
            type:Admin_Action_Types.DELETE_COUPON_SUCCESS,
            payload:data.data
           })
        })
        .catch((err)=>{
            dispatch({
                type:Admin_Action_Types.DELETE_COUPON_FAIL,
                payload:err.response.data
            })
        })
    } catch (error) {
        
    }
}