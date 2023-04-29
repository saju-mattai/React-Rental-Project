import { User_Action_Types } from "../../Constants/User_Constants/UserConstants";

export const UserSignUpReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case User_Action_Types.USER_SIGNUP_REQUEST:
            return {
                loading: true
            }
        case User_Action_Types.USER_SIGNUP_SUCCESS:
            return {
                loading: false,
                UserData: payload
            }
        case User_Action_Types.USER_SIGNUP_FAIL:
            return {
                loading: false,
                UserDataErr: payload
            }

        default: return state

    }
}