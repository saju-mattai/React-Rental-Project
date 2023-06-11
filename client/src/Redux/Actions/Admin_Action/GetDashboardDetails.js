import { getDashBoardDetailsApi } from "../../../API/Admin/ApiCalls";
import { Admin_Action_Types } from "../../Constants/Admin_Constants/AdminConstants";


export const getDashBoardDetailsAction = () => async(dispatch) => {
    dispatch({
        type : Admin_Action_Types.GET_DASHBOARD_DETAILS_REQ
    })

    getDashBoardDetailsApi().then((data) => {
        console.log('DasHBOARD API',data.data);
        dispatch({
            type : Admin_Action_Types.GET_DASHBOARD_DETAILS_SUCCESS,
            payload : data.data
        })
    })

    .catch((err) => {
        console.log("DASHBOARD API ERROR",err);
        dispatch({
            type : Admin_Action_Types.GET_DASHBOARD_DETAILS_FAILED,
            payload : err.response
        })
    })
}