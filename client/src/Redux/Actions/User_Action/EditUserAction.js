import { User_Action_Types } from "../../Constants/User_Constants/UserConstants";


export const editUserAction = (data) => async (dispatch) => {
    // dispatch({
    //     type: User_Action_Types.EDIT_USER_REQUEST
    // })
    try {
        // EditUserApi(name, email, phone, place, id).then((data) => {
            // localStorage.setItem('userInfo', JSON.stringify(data.data))
            dispatch({
                type: User_Action_Types.EDIT_USER_SUCCESS,
                payload: data
            })

        // })
            // .catch((err) => {
            //     dispatch({
            //         type: User_Action_Types.EDIT_USER_FAIL,
            //         payload: err.response

            //     })
            // })
    } catch (error) {

    }
}
