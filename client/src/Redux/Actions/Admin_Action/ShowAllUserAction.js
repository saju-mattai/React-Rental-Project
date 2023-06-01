import { Admin_Action_Types } from "../../Constants/Admin_Constants/AdminConstants";

import { SearchUserApi, ShowAllUSerApi } from "../../../API/Admin/ApiCalls";

export const ShowAllUSerAction = (currentPage, limit) => async (dispatch) => {
  dispatch({
    type: Admin_Action_Types.SHOW_ALL_USER_REQUEST,
  });
  try {
    ShowAllUSerApi(currentPage, limit)
      .then((data) => {
        dispatch({
          type: Admin_Action_Types.SHOW_ALL_USER_SUCCESS,
          payload: data.data,
        });
      })
      .catch((err) => {
        console.log(err);

        dispatch({
          type: Admin_Action_Types.SHOW_ALL_USER_FAIL,
          payload: err.response.data,
        });
      });
  } catch (error) {}
};

export const searchUserAction = (searchdata) => async (dispatch) => {
  dispatch({
    type: Admin_Action_Types.SEARCH_USER_REQUEST,
  });
  SearchUserApi(searchdata)
    .then((data) => {
      dispatch({
        type: Admin_Action_Types.SEARCH_USER_SUCCESS,
        payload: data.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: Admin_Action_Types.SEARCH_USER_FAIL,
        payload: err.response,
      });
    });
};
