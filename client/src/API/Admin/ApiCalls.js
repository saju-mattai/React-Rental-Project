import axios from 'axios'

const API = axios.create({ baseURL: "http://localhost:3000/api/admin" })

const Admin = JSON.parse(localStorage.getItem("AdminInfo"));

const ID = Admin?.id;
const config = {
    headers: {
        "Content-Type": "application/json"
    }
}
const configFormData = {
    headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer" + " " + Admin?.token,
    },
};


export const AdminLoginApi = (email, password) => API.post('/adminlogin', { email, password }, config)
export const ShowAllUSerApi = () => API.get('/ShowAllUSer', {}, config)
export const BlockUnblockApi = (id) => API.put(`/blockunblock?id=${id}`, config)
export const AdminAddVehicleApi = (formData) => API.post('/addvehicle', formData, configFormData)