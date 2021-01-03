import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_NEW_POST = 'profile/ADD_NEW_POST';
const SET_PROFILE_DATA = 'profile/SET_PROFILE_DATA';
const SET_PROFILE_STATUS = 'profile/SET_PROFILE_STATUS';
const DELETE_POST = 'profile/DELETE_POST';
const UPDATE_PHOTO_SUCCESS = 'profile/UPDATE_PHOTO_SUCCESS';
const SET_IS_FETCHING = 'profile/SET_IS_FETCHING';
const SET_PROFILE_EDIT_MODE = 'profile/SET_PROFILE_EDIT_MODE';

type PostsType = {
    text: string | null
    id: number | null
}
type FriendsType = {
    id: null | number
    name: null | string
    img: null | string
}
type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
type PhotosType = {
    small: string
    large: string
}
type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}

let initialState = {
    posts: [
        {text: 'Why your code is too bad?', id: 1},
        {text: 'You have to work harder', id: 2},
        {text: 'Dont be a lazy peace of shit', id: 3},
        {text: 'Go WORK!', id: 4},
    ] as Array<PostsType>,
    friends: [
        {id: 1, name: 'Alesya', img: 'https://www.ifsw.org/wp-content/uploads/2018/03/friends.png'},
        {id: 2, name: 'Nikita', img: 'https://www.ifsw.org/wp-content/uploads/2018/03/friends.png'},
        {id: 3, name: 'Vlad', img: 'https://www.ifsw.org/wp-content/uploads/2018/03/friends.png'},
        {id: 4, name: 'Andrew', img: 'https://www.ifsw.org/wp-content/uploads/2018/03/friends.png'},
        {id: 5, name: 'IT-Kamasutra', img: 'https://www.ifsw.org/wp-content/uploads/2018/03/friends.png'},
    ] as Array<FriendsType>,
    textarea: {
        value: '',
    },
    profileData: {} as {} | ProfileType,
    status: '',
    isFetching: false,
    profileEditMode: false,
}

export type initialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any): initialStateType => {

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

        case SET_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching,
            }
        }

        case SET_PROFILE_STATUS: {
            return {
                ...state,
                status: action.status,
            }
        }

        case SET_PROFILE_EDIT_MODE: {
            return {
                ...state,
                profileEditMode: action.editMode,
            }
        }

        case UPDATE_PHOTO_SUCCESS: {
            return {
                ...state,
                profileData: {
                    ...state.profileData,
                    photos: action.photos,
                }
            }
        }

        default: {
            return state;
        }
    }
}

type newPostTextType = {
    type: typeof ADD_NEW_POST
    newPostText: string
}

type deletePostType = {
    type: typeof DELETE_POST
    postId: number
}

type setProfileDataType = {
    type: typeof SET_PROFILE_DATA,
    profileData: null | ProfileType
}

type setProfileStatusType = {
    type: typeof SET_PROFILE_STATUS
    status: string
}

type setIsFetchingType = {
    type: typeof SET_IS_FETCHING
    isFetching: boolean
}

type setProfileEditModeType = {
    type: typeof SET_PROFILE_EDIT_MODE
    editMode: boolean
}

type updateProfilePhotoSuccessType = {
    type: typeof UPDATE_PHOTO_SUCCESS
    photos: PhotosType
}

export const addNewPost = (newPostText: string): newPostTextType => ({type: ADD_NEW_POST, newPostText});
export const deletePost = (postId: number): deletePostType => ({type: DELETE_POST, postId});

export const setProfileData = (profileData: null): setProfileDataType => ({type: SET_PROFILE_DATA, profileData});
export const setProfileStatus = (status: string): setProfileStatusType => ({type: SET_PROFILE_STATUS, status});
export const setIsFetching = (isFetching: boolean): setIsFetchingType => ({type: SET_IS_FETCHING, isFetching})
export const setProfileEditMode = (editMode: boolean): setProfileEditModeType => ({type: SET_PROFILE_EDIT_MODE, editMode})

export const updateProfilePhotoSuccess = (photos: PhotosType): updateProfilePhotoSuccessType => {
    return {type: UPDATE_PHOTO_SUCCESS, photos}
}

export const addProfileData = (userId: number) => async (dispatch: any) => {
    let data = await profileAPI.getProfileData(userId)
    dispatch(setProfileData(data));
}

export const getProfileStatus = (userId: number) => async (dispatch: any) => {
    let data = await profileAPI.getStatus(userId)
    dispatch(setProfileStatus(data));
}

export const updateProfileStatus = (status: string) => async (dispatch: any) => {
    let response = await profileAPI.updateStatus(status);
    if (!response.data.resultCode) dispatch(setProfileStatus(status))

}

export const updateProfilePhoto = (profilePhoto: string) => async (dispatch: any) => {
    dispatch(setIsFetching(true));
    let data = await profileAPI.savePhoto(profilePhoto);
    dispatch(setIsFetching(false));
    if (!data.resultCode) dispatch(updateProfilePhotoSuccess(data.data));
}

export const updateProfileEditMode = (editMode: boolean) => (dispatch: any) => {
    dispatch(setProfileEditMode(editMode))
}

export const updateProfileData = (data: Object) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.id;
    const response = await profileAPI.updateProfile(data);
    if (!response.data.resultCode) {
        dispatch(setProfileEditMode(false));
        dispatch(addProfileData(userId));
    } else {
        if (response.data.messages.length) {
            let contactWithError = response.data.messages[0].split('->')[1].split(')')[0].toLowerCase();
            dispatch(stopSubmit('profile_edit_form', {
                'contacts': {
                    [contactWithError]: response.data.messages[0],
                }
            }))
        }

    }
}

export default profileReducer;