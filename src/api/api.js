import * as axios from "axios";

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '740823bc-d109-4a7e-9f6b-27edd2218c83',
    }
})

export const usersAPI = {

    getPage(pageSize, currentPage) {
        return axiosInstance.get(`users?count=${pageSize}&page=${currentPage}`).then(response => {
            return response.data
        })
    },

    followUser(userId) {
        return axiosInstance.post(`follow/${userId}`).then(response => {
            return response.data
        })
    },

    unfollowUser(userId) {
        return axiosInstance.delete(`follow/${userId}`).then(response => {
            return response.data
        })
    },
}
