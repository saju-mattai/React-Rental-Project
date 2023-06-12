import { Admin_Action_Types } from "../../Constants/Admin_Constants/AdminConstants";

export const getSalesReportReducer = (state = {} , {type,payload}) => {
    switch(type) {
        case Admin_Action_Types.GET_SALESREPORT_DETAILS_REQ:
            return {
                loading : true
            }
        case Admin_Action_Types.GET_SALESREPORT_DETAILS_SUCCESS:
            return{
                loading : false,
                Data : payload
            }  
        case Admin_Action_Types.GET_SALESREPORT_DETAILS_FAILED:
            return{
                loading : false,
                Error : payload
            }      
        default : return state    
    }
}
