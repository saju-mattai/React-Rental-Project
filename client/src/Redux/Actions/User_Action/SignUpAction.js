import { User_Action_Types } from "../../Constants/User_Constants/UserConstants";
import { UserSignUpApi } from "../../../API/User/ApiCalls";

export const UserSignUp = (name, email, place, password, phone) => async (dispatch) => {
    dispatch({
        type: User_Action_Types.USER_SIGNUP_REQUEST
    })

    try {
        UserSignUpApi(name, email, place, password, phone).then((data) => {
            console.log(data,'dataaaaaaaaaaaaaaaa');
            dispatch({
                type: User_Action_Types.USER_SIGNUP_SUCCESS,
                payload: data.data
            })
            localStorage.setItem("UserInfo", JSON.stringify(data.data))
        })
            .catch((err) => {
                dispatch({
                    type: User_Action_Types.USER_SIGNUP_FAIL,
                    payload: err.response
                })
            })
    } catch (error) {

    }

}
