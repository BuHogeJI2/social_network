import React from 'react'
import {getMe} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS'

type initialStateType = {
    initialized: boolean
}

const initialState: initialStateType = {
    initialized: false,
}

const appReducer = (state=initialState, action: any) => {

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

type setInitializedSuccessType = {
    type: typeof INITIALIZED_SUCCESS
}

export const setInitializedSuccess = (): setInitializedSuccessType => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getMe());

    Promise.all([promise]).then(()=> {
        dispatch(setInitializedSuccess());
    })

}

export default appReducer;