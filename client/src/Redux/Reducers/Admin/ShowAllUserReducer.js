import { Admin_Action_Types } from "../../Constants/Admin_Constants/AdminConstants";

export const ShowAllUSerReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case Admin_Action_Types.SHOW_ALL_USER_REQUEST:
            return {
                loading: true
            }
        case Admin_Action_Types.SHOW_ALL_USER_SUCCESS:
            return {
                loading: false,
                UserData: payload
            }
        case Admin_Action_Types.ADMIN_LOGIN_FAIL:
            return {
                loading: false,
                UserDataErr: payload
            }

             case Admin_Action_Types.SEARCH_USER_REQUEST:
            return {
                loading: true
            }
        case Admin_Action_Types.SEARCH_USER_SUCCESS:
            return {
                loading: false,
                UserData: payload
            }
        case Admin_Action_Types.SEARCH_USER_FAIL:
            return {
                loading: false,
                UserDataErr: payload
            }

        case Admin_Action_Types.ADMIN_LOGIN_REQUEST:
            return {
                loading: true
            }
        case Admin_Action_Types.ADMIN_USERBLOCKUNBLOCK_SUCCESS:
            return {
                loading: false,
                UserData: payload

            }
        case Admin_Action_Types.ADMIN_USERBLOCKUNBLOCK_FAIL:
            return {
                loading: false,
                blockunblockerr: payload
            }


        default: return state

    }
}