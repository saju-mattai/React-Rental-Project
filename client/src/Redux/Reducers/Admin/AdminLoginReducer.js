import { Admin_Action_Types } from "../../Constants/Admin_Constants/AdminConstants";

export const AdminLoginReducer = (state = {}, { type, payload }) => {
    console.log('payload', payload);
    switch (type) {
        case Admin_Action_Types.ADMIN_LOGIN_REQUEST:
            return {
                loading: true
            }

        case Admin_Action_Types.ADMIN_LOGIN_SUCCESS:
            return {
                loading: false,
                adminLoginData: payload
            }

        case Admin_Action_Types.ADMIN_LOGIN_FAIL:
            return {
                loading: false,
                adminLoginErr: payload
            }
        case Admin_Action_Types.ADMIN_LOGOUT:
            return {
                loading: false
            }

        default: return state

    }
}