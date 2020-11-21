const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_STATE = 'SET_STATE';

let initialState = {
    users: [
        {
            id:1,
            followed: true,
            status: "User's status",
            photoUrl: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
            fullName: 'Dmitry',
            location: {
                country: 'Belarus',
                city: 'Minsk',
            }
        },
        {
            id:2,
            followed: false,
            status: "User's status",
            photoUrl: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
            fullName: 'Alesya',
            location: {
                country: 'Belarus',
                city: 'Minsk',
            }
        },
        {
            id:3,
            followed: true,
            status: "User's status",
            photoUrl: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
            fullName: 'Nikita',
            location: {
                country: 'Belarus',
                city: 'Minsk',
            }
        },
        {
            id:4,
            followed: true,
            status: "User's status",
            photoUrl: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
            fullName: 'Andrew',
            location: {
                country: 'Russia',
                city: 'Moscow',
            }
        },
    ]
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
                users: [...state.users, ...action.users]
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