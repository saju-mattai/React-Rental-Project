import { Admin_Action_Types } from "../../Constants/Admin_Constants/AdminConstants";

export const LogOutAction = () => async (dispatch) => {
    try {
        localStorage.removeItem('AdminInfo')
        dispatch({
            type: Admin_Action_Types.ADMIN_LOGOUT
        })
    } catch (error) {

    }
}