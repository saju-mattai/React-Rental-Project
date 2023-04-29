import { Admin_Action_Types } from "../../Constants/Admin_Constants/AdminConstants";

import { ShowAllUSerApi } from "../../../API/Admin/ApiCalls";

export const ShowAllUSerAction = () => async (dispatch) => {
    dispatch({
        type: Admin_Action_Types.SHOW_ALL_USER_REQUEST
    })
    try {
        ShowAllUSerApi()
            .then((data) => {
                console.log('DSDASD',data.data);
                dispatch({
                    type: Admin_Action_Types.SHOW_ALL_USER_SUCCESS,
                    payload: data.data
                })
            })
            .catch((err) => {
                console.log(err);

                dispatch({
                    type: Admin_Action_Types.SHOW_ALL_USER_FAIL,
                    payload: err.response.data
                })
            })
    } catch (error) {

    }
}