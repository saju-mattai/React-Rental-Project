import { User_Action_Types } from "../../Constants/User_Constants/UserConstants";

export const UserLoginReducer = (state = {}, { type, payload }) => {
    console.log(payload, 'payload');

    switch (type) {
        case User_Action_Types.USER_LOGIN_REQUEST:
            return {
                loading: true
            }
        case User_Action_Types.USER_LOGIN_SUCCESS:
            return {
                loading: false,
                loginuserdata: payload
            }
        case User_Action_Types.USER_LOGIN_FAIL:
            return {
                loading: false,
                loginuserErr: payload
            }
        case User_Action_Types.USER_LOGOUT:
            return {
                return: false
            }
        case User_Action_Types.EDIT_USER_REQUEST:
            return {
                loading: true
            }
        case User_Action_Types.EDIT_USER_SUCCESS:
            return {
                loading: false,
                loginuserdata: payload
            }
        case User_Action_Types.EDIT_USER_FAIL:
            return {
                loading: false,
                loginuserErr: payload
            }
            case User_Action_Types.UPLOAD_PROFILE_SUCCESS:
            return {
                loading: false,
                loginuserdata: payload
            }

        default: return state
    }
}