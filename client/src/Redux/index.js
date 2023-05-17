import { combineReducers } from "redux";

import { AdminLoginReducer } from "./Reducers/Admin/AdminLoginReducer";
import { ShowAllUSerReducer } from "./Reducers/Admin/ShowAllUserReducer";
import { addvehicleReducer } from "./Reducers/Admin/AddVehicleReducer";


import { UserSignUpReducer } from "./Reducers/User/SignUpReducer";
import { UserLoginReducer } from "./Reducers/User/UserLoginReducer";
import { ShowAllVehicleReducer } from "./Reducers/Admin/ShowAllVehicleReducer";
import {GetAllVehicleReducer} from "./Reducers/User/GetAllVehicleReducer"
// import { EditUserReducer } from "./Reducers/User/EditUserReducer";
import { BookingReducer } from "./Reducers/User/BookingReducer";
import { UserAddBikeReducer } from "./Reducers/User/UserAddBikeReducer";
import { ShowUserVehicleReducer } from "./Reducers/Admin/ShowAllUserVehicleReducer";

const Reducers = combineReducers({
    //ADMIN
    AdminLoginReducer: AdminLoginReducer,
    ShowAllUSerReducer: ShowAllUSerReducer,
    addvehicleReducer: addvehicleReducer,
    ShowAllVehicleReducer: ShowAllVehicleReducer,
    ShowUserVehicleReducer:ShowUserVehicleReducer,


    // USER
    UserSignUpReducer: UserSignUpReducer,
    UserLoginReducer: UserLoginReducer,
    GetAllVehicleReducer:GetAllVehicleReducer,
    BookingReducer:BookingReducer,
    UserAddBikeReducer:UserAddBikeReducer,
    // ProfileUploadReducer: ProfileUploadReducer,
    // EditUserReducer: EditUserReducer
})


export default Reducers