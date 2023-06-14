import { GetAllUserApi } from "../../../API/User/ApiCalls";
import { User_Action_Types } from "../../Constants/User_Constants/UserConstants";

export const GetAllUserAction = (id) => async (dispatch) => {
  dispatch({
    type: User_Action_Types.GET_ALL_USER_REQUEST,
  });
  try {
    GetAllUserApi(id)
      .then((data) => {
        dispatch({
          type: User_Action_Types.GET_ALL_USER_SUCCESS,
          payload: data.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: User_Action_Types.GET_ALL_USER_FAIL,
          payload: err.response.data,
        });
      });
  } catch (error) {}
};
