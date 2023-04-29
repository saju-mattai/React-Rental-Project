import axios from 'axios'

const API = axios.create({ baseURL: "http://localhost:3000/api/admin" })


const config = {
    headers: {
        "Content-Type": "application/json"
    }
}


export const AdminLoginApi = (email, password) => API.post('/adminlogin', { email, password }, config)
export const ShowAllUSerApi = () => API.get('/ShowAllUSer', {}, config)
export const BlockUnblockApi = (id) => API.put(`/blockunblock?id=${id}`, config)