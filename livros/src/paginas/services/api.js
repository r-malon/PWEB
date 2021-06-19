import axios from 'axios';
const api = axios.create({
    baseURL: 'http://10.3.18.89:3333'
})

export default api;