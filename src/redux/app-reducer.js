import React from 'react'
import {getMe} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS'

const initialState = {
    initialized: false,
}

const appReducer = (state=initialState, action) => {

    switch (action.type) {

        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true,
            }
        }

        default: {
            return state;
        }

    }

}

export const setInitializedSuccess = () => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getMe());

    Promise.all([promise]).then(()=> {
        dispatch(setInitializedSuccess());
    })

}

export default appReducer;