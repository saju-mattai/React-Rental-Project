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
    

export const editVehicleApi = (formData,id) => API.post('/editvehicle?id='+id,formData, configFormData)




export const ShowAllVehicleApi = () => API.get('/showvehicle', config)
export const DeleteVehicleApi = (id) => API.delete('/deletevehicle?id='+id, config)

