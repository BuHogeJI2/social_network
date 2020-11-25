import {usersAPI} from "../api/api";

const SET_FOLLOW = 'SET_FOLLOW';
const SET_UNFOLLOW = 'SET_UNFOLLOW';
const SET_STATE = 'SET_STATE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_FOLLOWING_IN_PROGRESS = 'SET_FOLLOWING_IN_PROGRESS';

let initialState = {
    users: [],
    pageSize: 10,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        }
        case SET_UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        }

        case SET_STATE: {
            return {
                ...state,
                users: action.users
            }
        }

        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalCount: action.totalCount,
            }
        }

        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.pageNumber,
            }
        }

        case SET_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching,
            }
        }

        case SET_FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFollowing
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id => id !== action.userId)

            }
        }

        default: {
            return state;
        }
    }

}

export const setFollow = (userId) => {return {type: SET_FOLLOW, userId} }
export const setUnfollow = (userId) => { return {type: SET_UNFOLLOW, userId} }
export const setState = (users) => { return {type: SET_STATE, users} }
export const setTotalCount = (totalCount) => {return {type: SET_TOTAL_COUNT, totalCount}}
export const setCurrentPage = (pageNumber) => {return {type: SET_CURRENT_PAGE, pageNumber}}
export const setIsFetching = (isFetching) => {return {type: SET_IS_FETCHING, isFetching}}
export const setFollowingInProgress = (isFollowing, userId) => {return {type: SET_FOLLOWING_IN_PROGRESS, isFollowing, userId}}

export const getUsers = (pageSize, currentPage) => (dispatch) => {
    dispatch(setIsFetching(true));
    usersAPI.getPage(pageSize, currentPage).then(data => {
        dispatch(setIsFetching(false));
        dispatch(setState(data.items));
        dispatch(setTotalCount(data.totalCount));
    })
}

export const pageClick = (pageSize, pageNumber) => (dispatch) => {
    dispatch(setIsFetching(true));
    dispatch(setCurrentPage(pageNumber));
    usersAPI.getPage(pageSize, pageNumber).then(data => {
        dispatch(setIsFetching(false));
        dispatch(setState(data.items));
        dispatch(setTotalCount(data.totalCount));
    })
}

export const unfollowUser = (userId) => (dispatch) => {
    dispatch(setFollowingInProgress(true, userId));
    usersAPI.unfollowUser(userId).then(data => {
        dispatch(setFollowingInProgress(false, userId));
        data.resultCode === 0 && dispatch(setUnfollow(userId));
    })
}

export const followUser = (userId) => (dispatch) => {
    dispatch(setFollowingInProgress(true, userId));
    usersAPI.followUser(userId).then(data => {
        dispatch(setFollowingInProgress(false, userId));
        data.resultCode === 0 && dispatch(setFollow(userId));
    })
}

export default usersReducer;