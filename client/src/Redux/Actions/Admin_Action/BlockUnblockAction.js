import { Admin_Action_Types } from "../../Constants/Admin_Constants/AdminConstants";
import { BlockUnblockApi } from "../../../API/Admin/ApiCalls";

export const BlockUnblockAction = (id) => async (dispatch) => {
    dispatch({
        type: Admin_Action_Types.ADMIN_USERBLOCKUNBLOCK_REQUEST
    })
    try {
        BlockUnblockApi(id)
            .then((data) => {
                dispatch({
                    type: Admin_Action_Types.ADMIN_USERBLOCKUNBLOCK_SUCCESS,
                    payload: data.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: Admin_Action_Types.ADMIN_USERBLOCKUNBLOCK_FAIL,
                    payload: err.response
                })
            })
    } catch (error) {

    }
}