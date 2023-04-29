import { combineReducers } from "redux";

import { AdminLoginReducer } from "./Reducers/Admin/AdminLoginReducer";

import { UserSignUpReducer } from "./Reducers/User/SignUpReducer";
import { UserLoginReducer } from "./Reducers/User/UserLoginReducer";
import { ShowAllUSerReducer } from "./Reducers/Admin/ShowAllUserReducer";

const Reducers = combineReducers({
    AdminLoginReducer: AdminLoginReducer,
    ShowAllUSerReducer:ShowAllUSerReducer,



    UserSignUpReducer: UserSignUpReducer,
    UserLoginReducer: UserLoginReducer
})


export default Reducers