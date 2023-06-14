import { User_Action_Types } from "../../Constants/User_Constants/UserConstants";
import { UserLoginApi } from "../../../API/User/ApiCalls";


export const UserLoginAction = (email, password) => async (dispatch) => {
  
    dispatch({
        type: User_Action_Types.USER_LOGIN_REQUEST
    })

    UserLoginApi(email, password)
        .then((data) => {
            console.log(data,'qqqqqqqqqqqqq');
                dispatch({
                type: User_Action_Types.USER_LOGIN_SUCCESS,
                payload: data.data
            })
            localStorage.setItem("UserInfo", JSON.stringify(data.data))
        })
        .catch((err) => {
            dispatch({
                type: User_Action_Types.USER_LOGIN_FAIL,
                payload: err.response
            })
        })
}