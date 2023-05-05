import { Admin_Action_Types } from "../../Constants/Admin_Constants/AdminConstants";

export const ShowAllVehicleReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case Admin_Action_Types.SHOW_ALL_VEHICLE_REQUEST:
            return {
                loading: true
            }
        case Admin_Action_Types.SHOW_ALL_VEHICLE_SUCCESS:
            return {
                loading: false,
                VehicleData: payload
            }
        case Admin_Action_Types.SHOW_ALL_VEHICLE_FAIL:
            return {
                loading: false,
                VehicleDataErr: payload
            }
        default: return state
    }
}