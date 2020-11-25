import {authAPI} from "../api/api";

const SET_AUTH_DATA = 'SET_AUTH_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
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
        default:
            return state;
    }
}


export const setAuthData = (id, email, login, isAuth) => ({type: SET_AUTH_DATA, data: {id, email, login, isAuth}});

export const getMe = () => (dispatch) => {

    authAPI.logInMe().then(response => {
        if (!response.data.resultCode) {
            let {id, email, login} = response.data.data;
            dispatch(setAuthData(id, email, login, true));
        } else {
            dispatch(setAuthData(null, null, null, false))
        }

    })

}

export default authReducer;