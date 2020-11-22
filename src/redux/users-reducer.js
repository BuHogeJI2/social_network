const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_STATE = 'SET_STATE';

let initialState = {
    users: []
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
                users: [...action.users]
            }
        }

        default: {
            return state;
        }
    }

}

export const followAC = (userId) => {return {type: FOLLOW, userId} }
export const unfollowAC = (userId) => { return {type: UNFOLLOW, userId} }
export const setStateAC = (users) => { return {type: SET_STATE, users} }

export default usersReducer;