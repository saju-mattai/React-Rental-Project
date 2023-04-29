import axios from 'axios'

const API = axios.create({ baseURL: "http://localhost:3000/api/user" })


const config = {
    headers: {
        "Content-Type": "application/json"
    }
}

export const UserSignUpApi = (name, email, place, password, phone) => API.post('/signup', { name, email, place, password, phone }, config)
export const UserLoginApi = (email, password) => API.post('/login', { email, password }, config)