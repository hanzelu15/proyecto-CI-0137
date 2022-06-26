import axios from 'axios';


const gpiAPI = axios.create({
    baseURL: 'http://localhost:7500/api'
});

gpiAPI.interceptors.request.use( config =>{
    config.headers ={
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }
    return config;
})

export default gpiAPI;