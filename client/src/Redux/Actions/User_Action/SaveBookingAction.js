import { BookinSavegApi } from "../../../API/User/ApiCalls";
import { User_Action_Types } from "../../Constants/User_Constants/UserConstants";

export const bookingSaveAction = (Obj) => async (dispatch) => {
  console.log(Obj);
  dispatch({
    type: User_Action_Types.BOOKING_SAVE_REQUEST,
  });
  try {
    BookinSavegApi(Obj)
      .then((data) => {
        dispatch({
          type: User_Action_Types.BOOKING_SAVE_SUCCESS,
          payload: data.data,
        });
      })
      // .catch((err) => {
        // dispatch({
        //   type: User_Action_Types.BOOKING_FAIL,
        //   payload: err.response.data,
        // });
      // });
  } catch (error) {

  }
};
