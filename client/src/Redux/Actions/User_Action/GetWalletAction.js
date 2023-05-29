import { GetWalletDetailsApi } from "../../../API/User/ApiCalls";
import { User_Action_Types } from "../../Constants/User_Constants/UserConstants";

export const getWalletAction = () => async (dispatch) => {
  dispatch({
    type: User_Action_Types.GET_WALLET_DETAILS_REQUEST,
  });
  try {
    GetWalletDetailsApi()
      .then((data) => {
        dispatch({
          type: User_Action_Types.GET_WALLET_DETAILS_SUCCESS,
          payload: data.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: User_Action_Types.GET_WALLET_DETAILS_FAIL,
          payload: err.response.data,
        });
      });
  } catch (error) {}
};
