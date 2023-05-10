import { DeleteVehicleApi } from "../../../API/Admin/ApiCalls";
import { Admin_Action_Types } from "../../Constants/Admin_Constants/AdminConstants";

export const deleteVehicleAction = (id) => async (dispatch)=>{
    console.log(id);
    dispatch({
        type:Admin_Action_Types.DELETE_VEHICLE_REQUEST
    })
    try {
        DeleteVehicleApi(id).then((data)=>{
           dispatch({
            type:Admin_Action_Types.DELETE_VEHICLE_REQUEST,
            payload:data.data
           })
        })
        .catch((err)=>{
            dispatch({
                type:Admin_Action_Types.DELETE_VEHICLE_FAIL,
                payload:err.response.data
            })
        })
    } catch (error) {
        
    }
}