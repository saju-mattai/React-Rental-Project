import { Admin_Action_Types } from "../../Constants/Admin_Constants/AdminConstants";

export const addvehicleReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case Admin_Action_Types.ADMIN_ADDVEHICLE_REQUEST:
            return {
                loading: true
            }
        case Admin_Action_Types.ADMIN_ADDVEHICLE_SUCCESS:
            return {
                loading: false,
                vehicleData: payload
            }
        case Admin_Action_Types.ADMIN_ADDVEHICLE_FAIL:
            return {
                loading: false,
                vehicleDataErr: payload
            }
            default : return state
    }
}