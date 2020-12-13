import * as axios from "axios";

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '340ed39f-3b20-4650-9ee2-17994569da32',
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
            return response.data;
        })
    },

    unfollowUser(userId) {
        return axiosInstance.delete(`follow/${userId}`).then(response => {
            return response.data;
        })
    },
}

export const profileAPI = {
    getProfileData(userId) {
        return axiosInstance.get(`profile/${userId}`).then(response => {
            return response.data;
        });
    },

    getStatus(userId) {
        return axiosInstance.get(`profile/status/${userId}`).then(response => response.data);
    },

    updateStatus(status) {
        return axiosInstance.put(`profile/status`, {status: status});
    },

    updateProfile(data) {
        return axiosInstance.put('profile', data);
    },

    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append('image', photoFile);

        return axiosInstance.put('/profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => response.data);


    }
}

export const authAPI = {
    logInMe() {
        return axiosInstance.get('auth/me');
    },

    logIn(email, password, rememberMe = false, captcha = null) {
        return axiosInstance.post(`auth/login`, {email, password, rememberMe, captcha});
    },

    logOut() {
        return axiosInstance.delete('auth/login');
    },

    getCaptcha() {
        return axiosInstance.get('security/get-captcha-url');
    }
}
