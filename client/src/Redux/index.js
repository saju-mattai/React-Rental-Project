import { combineReducers } from "redux";

import { AdminLoginReducer } from "./Reducers/Admin/AdminLoginReducer";
import { ShowAllUSerReducer } from "./Reducers/Admin/ShowAllUserReducer";
import { addvehicleReducer } from "./Reducers/Admin/AddVehicleReducer";


import { UserSignUpReducer } from "./Reducers/User/SignUpReducer";
import { UserLoginReducer } from "./Reducers/User/UserLoginReducer";
import { ProfileUploadReducer } from "./Reducers/User/ProfileUploadReducer";
import { ShowAllVehicleReducer } from "./Reducers/Admin/ShowAllVehicleReducer";
// import { EditUserReducer } from "./Reducers/User/EditUserReducer";

const Reducers = combineReducers({
    //ADMIN
    AdminLoginReducer: AdminLoginReducer,
    ShowAllUSerReducer: ShowAllUSerReducer,
    addvehicleReducer: addvehicleReducer,
    ShowAllVehicleReducer: ShowAllVehicleReducer,


    // USER
    UserSignUpReducer: UserSignUpReducer,
    UserLoginReducer: UserLoginReducer,
    ProfileUploadReducer: ProfileUploadReducer,
    // EditUserReducer: EditUserReducer
})


export default Reducers