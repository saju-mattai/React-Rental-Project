import { DeleteLocationApi } from "../../../API/Admin/ApiCalls";
import { Admin_Action_Types } from "../../Constants/Admin_Constants/AdminConstants";

export const deleteLocationAction = (id) => async (dispatch)=>{
    console.log(id);
    dispatch({
        type:Admin_Action_Types.DELETE_LOCATION_REQUEST
    })
    try {
        DeleteLocationApi(id).then((data)=>{
           dispatch({
            type:Admin_Action_Types.DELETE_LOCATION_SUCCESS,
            payload:data.data
           })
        })
        .catch((err)=>{
            dispatch({
                type:Admin_Action_Types.DELETE_LOCATION_FAIL,
                payload:err.response.data
            })
        })
    } catch (error) {
        
    }
}