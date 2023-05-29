import { User_Action_Types } from "../../Constants/User_Constants/UserConstants";

export const getWalletReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case User_Action_Types.GET_WALLET_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case User_Action_Types.GET_WALLET_DETAILS_SUCCESS:
      return {
        loading: false,
        WalletData: payload,
      };
    case User_Action_Types.GET_WALLET_DETAILS_FAIL:
      return {
        loading: false,
        WalletDataErr: payload,
      };

    default:
      return state;
  }
};
