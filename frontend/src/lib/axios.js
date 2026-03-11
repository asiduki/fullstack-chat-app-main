import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: `${import.meta.env.FRONTEND_URL}/api`,
    withCredentials: true,
})
