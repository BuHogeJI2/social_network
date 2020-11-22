const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_STATE = 'SET_STATE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_IS_FETCHING = 'SET_IS_FETCHING';

let initialState = {
    users: [],
    pageSize: 10,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
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

        default: {
            return state;
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
    }

}

export const followAC = (userId) => {return {type: FOLLOW, userId} }
export const unfollowAC = (userId) => { return {type: UNFOLLOW, userId} }
export const setStateAC = (users) => { return {type: SET_STATE, users} }
export const setTotalCountAC = (totalCount) => {return {type: SET_TOTAL_COUNT, totalCount}}
export const setCurrentPageAC = (pageNumber) => {return {type: SET_CURRENT_PAGE, pageNumber}}
export const setIsFetchingAC = (isFetching) => {return {type: SET_IS_FETCHING, isFetching}}


export default usersReducer;