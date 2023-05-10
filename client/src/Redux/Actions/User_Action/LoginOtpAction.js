import { LoginOtpApi } from "../../../API/User/ApiCalls";
import { User_Action_Types } from "../../Constants/User_Constants/UserConstants";

export const LoginOtpAction = (phone) => async (dispatch) => {
  console.log(phone, "dipatchhhhhhhhhhhhhh");
  dispatch({
    type: User_Action_Types.LOGIN_WITH_OTP_REQUEST,
  });
  try {
    dispatch({
      type: User_Action_Types.LOGIN_WITH_OTP_SUCCESS,
      payload: phone,
    })
    
      // })
      .catch((err) => {
        console.log('////////////////////////////kkkkkkkkkkkkkkkkkkkkkk',err);
        
      });
  } catch (error) {}
};
