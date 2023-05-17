import {
    User_Action_Types
} from "../../Constants/User_Constants/UserConstants";

export const BookingReducer = (state = {}, {
    type,
    payload
}) => {
    switch (type) {
        case User_Action_Types.BOOKING_REQUEST:
            return {
                loading: true
            }
            case User_Action_Types.BOOKING_SUCCESS:
                return {
                    loading: false,
                        BookingData: payload
                }
                case User_Action_Types.BOOKING_FAIL:
                    return {
                        loading: false,
                            BookingDataErr: payload
                    }
                    default:
                        return state
    }


}