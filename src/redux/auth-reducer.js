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
                isAuth: true,
            }
        }
        default:
            return state;
    }
}


export const setAuthData = (id, email, login) => ({type: SET_AUTH_DATA, data: {id, email, login}});

export const logIn = () => (dispatch) => {

    authAPI.logIn().then(data => {
        let {id, email, login} = data.data;
        dispatch(setAuthData(id, email, login));
    })

}

export default authReducer;