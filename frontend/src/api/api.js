import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timestamp: 5000,
    headers: { 'Content-TYpe': 'application/json' }
})

export default axiosInstance;