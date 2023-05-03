import { User_Action_Types } from "../../Constants/User_Constants/UserConstants";

 export const UserLogOutAction = () => async (dispatch) => {
    try {
        localStorage.removeItem('UserInfo')
        dispatch({
            type: User_Action_Types.USER_LOGOUT
        })
    } catch (error) {

    }
}