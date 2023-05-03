import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'
import Reducers from ".";


const AdminInfo = JSON.parse(localStorage.getItem("AdminInfo"))
const UserInfo = JSON.parse(localStorage.getItem("UserInfo"))


const initialstate = {
    AdminLoginReducer: { adminLoginData: AdminInfo },
    UserLoginReducer:{loginuserdata :UserInfo}
}

const store = createStore(
    Reducers,
    initialstate,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store