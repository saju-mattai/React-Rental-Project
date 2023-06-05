import { filterByBrandApi, filterByModelApi } from "../../../API/User/ApiCalls";
import { User_Action_Types } from "../../Constants/User_Constants/UserConstants";

export const filterByBrandAction = (data) => async (dispatch) => {
    dispatch({
        type:User_Action_Types.USER_FILTER_BY_BRAND_REQUEST
    })
    filterByBrandApi(data).then((data)=>{
        dispatch({
            type:User_Action_Types.USER_FILTER_BY_BRAND_SUCCESS,
            payload:data.data
        })
    }).catch((err)=>{
        dispatch({
            type:User_Action_Types.USER_FILTER_BY_BRAND_FAIL,
            payload:err.response.data
        })
    })
};

export const filterByModelAction = (data) => async (dispatch) => {
    console.log(data);
    dispatch({
        type:User_Action_Types.USER_FILTER_BY_MODEL_REQUEST
    })
    filterByModelApi(data).then((data)=>{
        console.log(data);
        dispatch({
            type:User_Action_Types.USER_FILTER_BY_MODEL_SUCCESS,
            payload:data.data
        })
    }).catch((err)=>{
        dispatch({
            type:User_Action_Types.USER_FILTER_BY_MODEL_FAIL,
            payload:err.response.data
        })
    })
};