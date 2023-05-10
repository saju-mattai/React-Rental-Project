import { User_Action_Types } from "../../Constants/User_Constants/UserConstants";

export const googleSignupAction = (data) => async (dispatch) => {
  try {
    dispatch({
      type: ActionTypes.GOOGLE_SIGNUP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.GOOGLE_SIGNUP_FAILED,
      payload: error.response,
    });
  }
};
