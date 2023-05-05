import { AdminLoginApi } from "../../../API/Admin/ApiCalls";
import { Admin_Action_Types } from "../../Constants/Admin_Constants/AdminConstants";

export const LoginAction = (email, password) => async (dispatch) => {
    dispatch({
        type: Admin_Action_Types.ADMIN_LOGIN_REQUEST
    })

    try {
        AdminLoginApi(email, password)
        .then((data) => {
            
            dispatch({
                type: Admin_Action_Types.ADMIN_LOGIN_SUCCESS,
                payload: data.data
            })
            localStorage.setItem("AdminInfo", JSON.stringify(data.data))
    
        })
        .catch((err) => {
            dispatch({
                type: Admin_Action_Types.ADMIN_LOGIN_FAIL,
                payload: err.response.data
            })
        })  
    } catch (error) {
        
    }
   
}