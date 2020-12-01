import {profileAPI, usersAPI} from "../api/api";

const ADD_NEW_POST = 'ADD-NEW-POST';
const CHANGE_TEXTAREA = 'CHANGE-TEXTAREA';
const PROFILE = 'PROFILE';
const SET_PROFILE_DATA = 'SET_PROFILE_DATA';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';

let initialState = {
    posts: [
        {text: 'Why your code is too bad?', id: 1},
        {text: 'You have to work harder', id: 2},
        {text: 'Dont be a lazy peace of shit', id: 3},
        {text: 'Go WORK!', id: 4},
    ],
    friends: [
        {id: 1, name: 'Alesya', img: 'https://www.ifsw.org/wp-content/uploads/2018/03/friends.png'},
        {id: 2, name: 'Nikita', img: 'https://www.ifsw.org/wp-content/uploads/2018/03/friends.png'},
        {id: 3, name: 'Vlad', img: 'https://www.ifsw.org/wp-content/uploads/2018/03/friends.png'},
        {id: 4, name: 'Andrew', img: 'https://www.ifsw.org/wp-content/uploads/2018/03/friends.png'},
        {id: 5, name: 'IT-Kamasutra', img: 'https://www.ifsw.org/wp-content/uploads/2018/03/friends.png'},
    ],
    textarea: {
        value: '',
    },
    profileData: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_NEW_POST: {
            return {
                ...state,
                posts: [...state.posts, {text: state.textarea.value, id: 5}],
                textarea: {value: ''},
            }
        }

        case CHANGE_TEXTAREA: {
            if (action.page === PROFILE) {
                return {
                    ...state,
                    textarea: {value: action.value}
                }
            } break;
        }

        case SET_PROFILE_DATA: {
            return {
                ...state,
                profileData: action.profileData,
            }
        }

        case SET_PROFILE_STATUS: {
            return {
                ...state,
                status: action.status,
            }
        }

        default: {
            return state;
        }
    }
}

export const addNewPostActionCreator = () => ({type: ADD_NEW_POST})
export const changeProfileTextareaActionCreator = (value) => {
    return ({
        type: CHANGE_TEXTAREA,
        page: PROFILE,
        value: value,
    })
}

export const setProfileData = (profileData) => ({type: SET_PROFILE_DATA, profileData})
export const setProfileStatus = (status) => ({type: SET_PROFILE_STATUS, status})

export const addProfileData = (userId) => (dispatch) => {
    if (!userId) userId = 12833;
    usersAPI.getProfileData(userId).then(data => {
        dispatch(setProfileData(data));
    })
}

export const getProfileStatus = (userId) => (dispatch) => {
    if (!userId) userId = 12833;
    profileAPI.getStatus(userId).then(data => {
        dispatch(setProfileStatus(data));
    })
}

export const updateProfileStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setProfileStatus(status))
        }
    })
}

export default profileReducer;