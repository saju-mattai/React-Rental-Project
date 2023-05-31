import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3000/api/user" });

const user = JSON.parse(localStorage.getItem("UserInfo"));
const configTOken = {
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer" + " " + user?.token,
  },
};

const ID = user?.id;
const config = {
  headers: {
    "Content-Type": "application/json",
  },
};
const configFormData = {
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: "Bearer" + " " + user?.token,
  },
};
console.log(user, "ddddddddddddddddddddddddddddddd");

export const UserSignUpApi = (name, email, place, password, phone) =>
  API.post("/signup", { name, email, place, password, phone }, config);
export const UserLoginApi = (email, password) =>
  API.post("/login", { email, password }, config);
export const uploadprofileApi = (id, formData) =>
  API.post("/addprofile?id=" + ID, formData, configFormData);
export const EditUserApi = (name, email, phone, place, id) =>
  API.post("/edituser?id=" + ID, { name, email, phone, place }, config);
export const LoginOtpApi = (phone) =>
  API.post("/otplogin?phone=" + phone, config);
export const GetAllVehicleApi = () => API.get("/getallvehilce", config);


export const BookingApi = (ReqObj) =>
  API.post("/booking", { ReqObj }, configTOken);



export const BookinSavegApi = (Obj) =>
  API.post("/savebooking", { Obj }, config);

export const AddBikeApi = (formData) =>
  API.post("/adduserbike?id=" + ID, formData, configFormData);
export const GetAllUserVehicleApi = () =>
  API.get("/getalluservehilce?id=" + ID, config);
export const GetWalletDetailsApi = (userId) =>
  API.get("/getwallet?id=" + userId, config);
export const GetRentedBikeApi = () => API.get("/getrentedbike", config);
export const CancelMyRideApi = (id) =>
  API.put(`/cancelride?bookingid=${id}&userid=${ID}`, config);
export const ApplyCouponApi = (data) =>
  API.post("/applycoupon", { data }, config);
