import { SearchVehicelApi, ShowAllVehicleApi } from "../../../API/Admin/ApiCalls";
import { Admin_Action_Types } from "../../Constants/Admin_Constants/AdminConstants";

export const ShowAllVehicleAction = (currentPage,limit) => async (dispatch) => {
    dispatch({
        type: Admin_Action_Types.SHOW_ALL_VEHICLE_REQUEST
    })
    ShowAllVehicleApi(currentPage,limit).then((data) => {
        dispatch({
            type: Admin_Action_Types.SHOW_ALL_VEHICLE_SUCCESS,
            payload: data.data
        })
    })
        .catch((err) => {
            dispatch({
                type: Admin_Action_Types.SHOW_ALL_VEHICLE_FAIL,
                payload: err.response
            })
        })
}

export const SearchVehicleAction = (searchdata) => async (dispatch) => {
    dispatch({
        type: Admin_Action_Types.SEARCH_VEHICLE_REQUEST
    })
    SearchVehicelApi(searchdata).then((data) => {
        dispatch({
            type: Admin_Action_Types.SEARCH_VEHICLE_SUCCESS,
            payload: data.data
        })
    })
        .catch((err) => {
            dispatch({
                type: Admin_Action_Types.SEARCH_VEHICLE_FAIL,
                payload: err.response
            })
        })
}