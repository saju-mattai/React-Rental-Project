import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8080/api/user" });

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

export const searchVehicleApi = (searchTerm) =>
  API.get("/searchvehicle?searchTerm=" + searchTerm, config);

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
export const CancelMyRideApi = (id,cancelReason) =>
  API.put(`/cancelride?bookingid=${id}&userid=${ID}&cancelReason=${cancelReason} `, config);
export const GetCanceledBikeApi = () => API.get("/getcancelledbike", config);
export const GetOnrideBikeApi = () => API.get("/getonride", config);
export const ApplyCouponApi = (data) =>
  API.post("/applycoupon", { data }, config);

export const filterByBrandApi = (data) =>
  API.post("/filterbybrand", { data }, config);

export const filterByModelApi = (data) =>
  API.post("/filterbymodel", { data }, config);

export const GetAllUserApi = (id) => API.get("/getalluser?id=" + id, config);

export const sendMessageApi = (data) => API.post("/addmsg", { data }, config);

export const getMessageApi = (from,to) => API.post("/getmsg",{from,to}, config);
