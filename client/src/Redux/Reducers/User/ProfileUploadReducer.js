import { User_Action_Types } from "../../Constants/User_Constants/UserConstants";

export const ProfileUploadReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case User_Action_Types.UPLOAD_PROFILE_REQUEST:
            return {
                loading: true
            }
        case User_Action_Types.UPLOAD_PROFILE_SUCCESS:
            return {
                loading: false,
                ImageData: payload
            }
        case User_Action_Types.UPLOAD_PROFILE_FAIL:
            return {
                loading: false,
                ImageDataErr: payload
            }
        default: return state
    }
}