import {  GetSalesReportApi } from "../../../API/Admin/ApiCalls";
import { Admin_Action_Types } from "../../Constants/Admin_Constants/AdminConstants";

export const SalesReportAction = (data) => async (dispatch) => {
  dispatch({
    type: Admin_Action_Types.GET_SALESREPORT_DETAILS_REQ,
  });
  GetSalesReportApi(data)
    .then((data) => {

      dispatch({
        type: Admin_Action_Types.GET_SALESREPORT_DETAILS_SUCCESS,
        payload: data.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: Admin_Action_Types.GET_SALESREPORT_DETAILS_FAILED,
        payload: err.response.data,
      });
    });
};


