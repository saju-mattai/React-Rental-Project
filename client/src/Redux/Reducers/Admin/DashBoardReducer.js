import { Admin_Action_Types } from "../../Constants/Admin_Constants/AdminConstants";

export const getDashBoardDetailsReducer = (state = {} , {type,payload}) => {
    switch(type) {
        case Admin_Action_Types.GET_DASHBOARD_DETAILS_REQ:
            return {
                loading : true
            }
        case Admin_Action_Types.GET_DASHBOARD_DETAILS_SUCCESS:
            return{
                loading : false,
                dashBoardData : payload
            }  
        case Admin_Action_Types.GET_DASHBOARD_DETAILS_FAILED:
            return{
                loading : false,
                dashBoardDataError : payload
            }      
        default : return state    
    }
}
