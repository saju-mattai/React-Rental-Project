import { User_Action_Types } from "../../Constants/User_Constants/UserConstants";
import { uploadprofileApi } from "../../../API/User/ApiCalls";

export const uploadprofileAction = (id, formData) => async (dispatch) => {
   
    dispatch({
        type: User_Action_Types.UPLOAD_PROFILE_REQUEST
    })
    try {
       
        uploadprofileApi(id,formData).then((data) => {
            dispatch({
                type: User_Action_Types.UPLOAD_PROFILE_SUCCESS,
                payload: data.data
            })
        })
            .catch((err) => {
                dispatch({
                    type: User_Action_Types.UPLOAD_PROFILE_FAIL,
                    payload: err.response
                })
            })
    } catch (error) {

    }
}