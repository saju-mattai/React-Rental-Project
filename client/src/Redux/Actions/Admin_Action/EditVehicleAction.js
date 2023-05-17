import { editVehicleApi } from "../../../API/Admin/ApiCalls";
import { Admin_Action_Types } from "../../Constants/Admin_Constants/AdminConstants";
import { message } from "antd";


export const editVehicleAction = (formData,id) => async (dispatch) => {
  for (const [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }

  dispatch({
    type: Admin_Action_Types.UPDATE_VEHICLE_REQUEST,
  });

  try {
    editVehicleApi(formData,id)
      .then((data) => {
        dispatch({
          type: Admin_Action_Types.UPDATE_VEHICLE_SUCCESS,
          payload: data.data,
        });
        message.success("Updated Successfully");

      })
      .catch((err) => {
        dispatch({
          type: Admin_Action_Types.UPDATE_VEHICLE_FAIL,
          payload: err.response,
        });
        message.error("Somethig Went Wrong , Please Try Later ");

      });
  } catch (error) {}
};
