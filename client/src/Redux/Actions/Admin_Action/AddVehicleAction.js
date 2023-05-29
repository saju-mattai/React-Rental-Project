import { Admin_Action_Types } from "../../Constants/Admin_Constants/AdminConstants";

export const addVehicleAction = (formData) => async (dispatch) => {
    console.log(formData, 'Action');
    dispatch({
        type: Admin_Action_Types.ADMIN_ADDVEHICLE_REQUEST
    })
    try {
        // AdminAddVehicleApi(formData).then((data) => {
            dispatch({
                type: Admin_Action_Types.ADMIN_ADDVEHICLE_SUCCESS,
                payload: formData
            })
        // })
            .catch((err) => {
                dispatch({
                    type: Admin_Action_Types.ADMIN_ADDVEHICLE_FAIL,
                    payload: err.response
                })
            })
    } catch (error) {

    }
}