import {usersAPI} from "../api/api";

const SET_FOLLOW = 'SET_FOLLOW';
const SET_UNFOLLOW = 'SET_UNFOLLOW';
const SET_STATE = 'SET_STATE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_FOLLOWING_IN_PROGRESS = 'SET_FOLLOWING_IN_PROGRESS';

type photosType = {
    small: string
    large: string
}
type userType = {
    id: number
    name: string
    status: string
    photos: photosType
    followed: boolean
}

let initialState = {
    users: [] as Array<userType>,
    pageSize: 10 as number,
    totalCount: 0 as number,
    currentPage: 1 as number,
    isFetching: false as boolean,
    followingInProgress: [] as [] | Array<number>,
}

export type initialStateType = typeof initialState;

let setFollowUnfollow = (user: userType, userId: number, followed: boolean) => {
    if (user.id === userId) {
        return {...user, followed}
    }
    return user;
}

const usersReducer = (state = initialState, action: any) => {

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

type setFollowType = {
    type: typeof SET_FOLLOW
    userId: number
}

type setUnfollowType = {
    type: typeof SET_UNFOLLOW
    userId: number
}

type setStateType = {
    type: typeof SET_STATE
    users: Array<userType>
}

type setTotalCountType = {
    type: typeof SET_TOTAL_COUNT
    totalCount: number
}

type setCurrentPageType = {
    type: typeof SET_CURRENT_PAGE
    pageNumber: number
}

type setIsFetchingType = {
    type: typeof SET_IS_FETCHING
    isFetching: boolean
}

type setFollowingInProgressType = {
    type: typeof SET_FOLLOWING_IN_PROGRESS
    isFollowing: boolean
    userId: number
}

export const setFollow = (userId: number): setFollowType => {
    return {type: SET_FOLLOW, userId}
}
export const setUnfollow = (userId: number): setUnfollowType => {
    return {type: SET_UNFOLLOW, userId}
}
export const setState = (users: Array<userType>): setStateType => {
    return {type: SET_STATE, users}
}
export const setTotalCount = (totalCount: number): setTotalCountType => {
    return {type: SET_TOTAL_COUNT, totalCount}
}
export const setCurrentPage = (pageNumber: number): setCurrentPageType => {
    return {type: SET_CURRENT_PAGE, pageNumber}
}
export const setIsFetching = (isFetching: boolean): setIsFetchingType => {
    return {type: SET_IS_FETCHING, isFetching}
}
export const setFollowingInProgress = (isFollowing: boolean, userId: number): setFollowingInProgressType => {
    return {type: SET_FOLLOWING_IN_PROGRESS, isFollowing, userId}
}

export const requestUsers = (pageSize: number, currentPage: number) => (dispatch: any) => {
    requestUsersWithPageClickFlow(dispatch, pageSize, currentPage);
}

export const pageClick = (pageSize: number, pageNumber: number) => (dispatch: any) => {
    dispatch(setCurrentPage(pageNumber));
    requestUsersWithPageClickFlow(dispatch, pageSize, pageNumber);
}

const requestUsersWithPageClickFlow = async (dispatch: any, pageSize: number, secArg: number) => {
    dispatch(setIsFetching(true));
    let data = await usersAPI.getPage(pageSize, secArg);
    dispatch(setIsFetching(false));
    dispatch(setState(data.items));
    dispatch(setTotalCount(data.totalCount));

}

export const unfollowUser = (userId: number) => (dispatch: any) => {
    followUnfollowUserFlow(userId, usersAPI.unfollowUser, setUnfollow, dispatch);
}

export const followUser = (userId: number) => (dispatch: any) => {
    followUnfollowUserFlow(userId, usersAPI.followUser, setFollow, dispatch);
}

const followUnfollowUserFlow = async (userId: number, apiMethod: any, actionCreator: any, dispatch: any) => {
    dispatch(setFollowingInProgress(true, userId));
    let data = await apiMethod(userId);
    dispatch(setFollowingInProgress(false, userId));
    data.resultCode === 0 && dispatch(actionCreator(userId));
}

export default usersReducer;