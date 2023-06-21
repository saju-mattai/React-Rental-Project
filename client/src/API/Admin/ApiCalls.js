import axios from 'axios'

const API = axios.create({ baseURL: "https://bikerental.store/api/admin" })

const Admin = JSON.parse(localStorage.getItem("AdminInfo"));


const ID = Admin?.id;
const config = {
    headers: {
        "Content-Type": "application/json"
    }
}
const configToken = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer" + " " + Admin?.token,
    },
  };
const configFormData = {
    headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer" + " " + Admin?.token,
    },
};



export const AdminLoginApi = (email, password) => API.post('/adminlogin', { email, password }, config)
export const ShowAllUSerApi = (currentPage,limit) => API.get(`/ShowAllUSer?page=${currentPage}&limit=${limit}`, config)
export const SearchUserApi = (searchdata)=>API.get(`/searchuser?searchdata=${searchdata}`,config)
export const BlockUnblockApi = (id) => API.put(`/blockunblock?id=${id}`, config)
export const AdminAddVehicleApi = (formData) => API.post('/addvehicle', formData, configFormData)
export const editVehicleApi = (formData,id) => API.post('/editvehicle?id='+id,formData, configFormData)




export const ShowAllVehicleApi = (currentPage,limit) => API.get(`/showvehicle?page=${currentPage}&limit=${limit}`, config)
export const SearchVehicelApi = (searchdata)=>API.get(`/searchvehicle?searchdata=${searchdata}`,config)

export const DeleteVehicleApi = (id) => API.delete('/deletevehicle?id='+id, config)
export const ShowUSerVehicleApi = () => API.get('/showuserbikes', config)
export const SearchUserVehicleApi = (searchdata)=>API.get(`/searchuservehicle?searchdata=${searchdata}`,config)
export const BikeAcceptApi = (id) => API.put(`/bikeaccept?id=${id}`, config)
export const BikeRejectApi = (id) => API.put(`/bikereject?id=${id}`, config)
export const AddCouponApi = (Coupon) => API.post('/addcoupon', { Coupon}, config)
export const GetBookingDetailsApi = () => API.get(`/getbookingdetails`, config)
export const AddLocationApi = (data) => API.post('/addlocation', { data}, config)
export const GetLocationApi = () => API.get('/getlocation', config)
export const GetSalesReportApi = () => API.get('/getsalesreport', config)
export const DeleteLocationApi = (id) => API.delete('/deletelocation?id='+id, config)
export const EditLocationApi=(data,location)=>API.post('/editlocation',{data,location},config)
export const GetCouponApi = () => API.get(`/getcoupon`, config)
export const DeleteCouponApi = (id) => API.delete('/deletecoupon?id='+id, config)




export const getDashBoardDetailsApi = () =>
  API.get("/getdashboard", configToken);







