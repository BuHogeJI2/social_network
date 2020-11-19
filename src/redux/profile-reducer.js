const ADD_NEW_POST = 'ADD-NEW-POST';
const CHANGE_TEXTAREA = 'CHANGE-TEXTAREA';
const PROFILE = 'PROFILE';

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
            }
        }
        default:
            return state;
    }
}

export const addNewPostActionCreator = () => {
    return {type: ADD_NEW_POST}
}
export const changeProfileTextareaActionCreator = (value) => {
    return ({
        type: CHANGE_TEXTAREA,
        page: PROFILE,
        value: value,
    })
}

export default profileReducer;