const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
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
        case FOLLOW: {
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
        case UNFOLLOW: {
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

export const follow = (userId) => {return {type: FOLLOW, userId} }
export const unfollow = (userId) => { return {type: UNFOLLOW, userId} }
export const setState = (users) => { return {type: SET_STATE, users} }
export const setTotalCount = (totalCount) => {return {type: SET_TOTAL_COUNT, totalCount}}
export const setCurrentPage = (pageNumber) => {return {type: SET_CURRENT_PAGE, pageNumber}}
export const setIsFetching = (isFetching) => {return {type: SET_IS_FETCHING, isFetching}}
export const setFollowingInProgress = (isFollowing, userId) => {return {type: SET_FOLLOWING_IN_PROGRESS, isFollowing, userId}}


export default usersReducer;