import {authAPI} from "../api/api";
import React from "react";
import {stopSubmit} from "redux-form";

const SET_AUTH_DATA = 'auth/SET_AUTH_DATA';
const SET_CAPTCHA_URL = 'auth/SET_CAPTCHA_URL';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_AUTH_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: action.data.isAuth,
            }
        }

        case SET_CAPTCHA_URL: {
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        }
        default:
            return state;
    }
}


export const setAuthData = (id, email, login, isAuth) => ({type: SET_AUTH_DATA, data: {id, email, login, isAuth}});
export const setCaptchaUrl = (captchaUrl) => ({type: SET_CAPTCHA_URL, captchaUrl})

export const getMe = () => async (dispatch) => {

    let response = await authAPI.logInMe();

    if (!response.data.resultCode) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthData(id, email, login, true));
    } else {
        dispatch(setAuthData(null, null, null, false))
    }

}

export const logIn = (values) => async (dispatch) => {
    let response = await authAPI.logIn(values.email, values.password, values.rememberMe, values.captcha)

    if (!response.data.resultCode) {
        dispatch(getMe())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        let errorMessage = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        dispatch(stopSubmit('loginForm', {_error: errorMessage}))
    }
}

export const logOut = () => async (dispatch) => {
    let response = await authAPI.logOut()

    if (!response.data.resultCode) dispatch(setAuthData(null, null, null, false));
}

export const getCaptchaUrl = () => async (dispatch) => {
    let response = await authAPI.getCaptcha();
    dispatch(setCaptchaUrl(response.data.url));
}

export default authReducer;