import { ShowAllVehicleApi } from "../../../API/Admin/ApiCalls";
import { Admin_Action_Types } from "../../Constants/Admin_Constants/AdminConstants";

export const ShowAllVehicleAction = () => async (dispatch) => {
    dispatch({
        type: Admin_Action_Types.SHOW_ALL_VEHICLE_REQUEST
    })
    ShowAllVehicleApi().then((data) => {
        dispatch({
            type: Admin_Action_Types.SHOW_ALL_VEHICLE_SUCCESS,
            payload: data.data
        })
    })
        .catch((err) => {
            dispatch({
                type: Admin_Action_Types.SHOW_ALL_VEHICLE_FAIL,
                payload: err.response
            })
        })
}