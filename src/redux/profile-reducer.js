import {profileAPI} from "../api/api";

const ADD_NEW_POST = 'profile/ADD_NEW_POST';
const SET_PROFILE_DATA = 'profile/SET_PROFILE_DATA';
const SET_PROFILE_STATUS = 'profile/SET_PROFILE_STATUS';
const DELETE_POST = 'profile/DELETE_POST';

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
                posts: [...state.posts, {text: action.newPostText, id: 5}],
            }
        }

        case DELETE_POST: {
            return {
                ...state,
                posts: [...state.posts.filter(p => p.id !== action.postId)]
            }
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

export const addNewPost = (newPostText) => ({type: ADD_NEW_POST, newPostText});
export const deletePost = (postId) => ({type: DELETE_POST, postId});

export const setProfileData = (profileData) => ({type: SET_PROFILE_DATA, profileData});
export const setProfileStatus = (status) => ({type: SET_PROFILE_STATUS, status});

export const addProfileData = (userId) => async (dispatch) => {
    let data = await profileAPI.getProfileData(userId)
    dispatch(setProfileData(data));
}

export const getProfileStatus = (userId) => async (dispatch) => {
    let data = await profileAPI.getStatus(userId)
    dispatch(setProfileStatus(data));
}

export const updateProfileStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (!response.data.resultCode) dispatch(setProfileStatus(status))

}

export default profileReducer;