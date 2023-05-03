import axios from 'axios'


const API = axios.create({ baseURL: "http://localhost:3000/api/user" })

const user = JSON.parse(localStorage.getItem("UserInfo"));

const ID = user?.id;
const config = {
    headers: {
        "Content-Type": "application/json"
    }
}
const configFormData = {
    headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer" + " " + user?.token,
    },
};


export const UserSignUpApi = (name, email, place, password, phone) => API.post('/signup', { name, email, place, password, phone }, config)
export const UserLoginApi = (email, password) => API.post('/login', { email, password }, config)
export const uploadprofileApi = (id, formData) => API.post('/addprofile?id='+id,formData,  configFormData)