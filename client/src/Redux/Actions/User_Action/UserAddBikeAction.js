import { User_Action_Types } from "../../Constants/User_Constants/UserConstants";

export const UserAddBikeAction = (formdata) => async (dispatch) => {
  dispatch({
    type: User_Action_Types.ADD_BIKE_USER_REQUEST,
  });

  try {
    dispatch({
      type: User_Action_Types.ADD_BIKE_USER_SUCCESS,
      payload: formdata,
    }).catch((err) => {
      dispatch({
        type: User_Action_Types.ADD_BIKE_USER_FAIL,
        payload: err.response,
      });
    });
  } catch (error) {}
};
