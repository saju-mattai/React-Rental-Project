import { User_Action_Types } from "../../Constants/User_Constants/UserConstants";

export const UserAddBikeAction = (formdata) => async (dispatch) => {
  dispatch({
    type: User_Action_Types.ADD_BIKE_USER_REQUEST,
  });

  try {
    dispatch({
      type: User_Action_Types.ADD_BIKE_USER_SUCCESS,
      payload: formdata,
    }).catch((error) => {
      dispatch({
        type: User_Action_Types.ADD_BIKE_USER_FAIL,
        payload: error.response.data,
      });
      // alert(error.response.data)
    });
  } catch (error) {}
};
