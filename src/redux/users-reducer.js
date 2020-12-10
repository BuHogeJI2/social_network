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

let setFollowUnfollow = (user, userId, followed) => {
    if (user.id === userId) {
        return {...user, followed}
    }
    return user;
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => setFollowUnfollow(u, action.userId, true)),
            }
        }
        case SET_UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => setFollowUnfollow(u, action.userId, false)),
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

export const setFollow = (userId) => {
    return {type: SET_FOLLOW, userId}
}
export const setUnfollow = (userId) => {
    return {type: SET_UNFOLLOW, userId}
}
export const setState = (users) => {
    return {type: SET_STATE, users}
}
export const setTotalCount = (totalCount) => {
    return {type: SET_TOTAL_COUNT, totalCount}
}
export const setCurrentPage = (pageNumber) => {
    return {type: SET_CURRENT_PAGE, pageNumber}
}
export const setIsFetching = (isFetching) => {
    return {type: SET_IS_FETCHING, isFetching}
}
export const setFollowingInProgress = (isFollowing, userId) => {
    return {type: SET_FOLLOWING_IN_PROGRESS, isFollowing, userId}
}

export const requestUsers = (pageSize, currentPage) => (dispatch) => {
    requestUsersWithPageClickFlow(dispatch, pageSize, currentPage);
}

export const pageClick = (pageSize, pageNumber) => (dispatch) => {
    dispatch(setCurrentPage(pageNumber));
    requestUsersWithPageClickFlow(dispatch, pageSize, pageNumber);
}

const requestUsersWithPageClickFlow = async (dispatch, pageSize, secArg) => {
    dispatch(setIsFetching(true));
    let data = await usersAPI.getPage(pageSize, secArg);
    dispatch(setIsFetching(false));
    dispatch(setState(data.items));
    dispatch(setTotalCount(data.totalCount));

}

export const unfollowUser = (userId) => (dispatch) => {
    followUnfollowUserFlow(userId, usersAPI.unfollowUser, setUnfollow, dispatch);
}

export const followUser = (userId) => (dispatch) => {
    followUnfollowUserFlow(userId, usersAPI.followUser, setFollow, dispatch);
}

const followUnfollowUserFlow = async (userId, apiMethod, actionCreator, dispatch) => {
    dispatch(setFollowingInProgress(true, userId));
    let data = await apiMethod(userId);
    dispatch(setFollowingInProgress(false, userId));
    data.resultCode === 0 && dispatch(actionCreator(userId));
}

export default usersReducer;