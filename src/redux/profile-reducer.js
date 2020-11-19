const ADD_NEW_POST = 'ADD-NEW-POST';
const CHANGE_TEXTAREA = 'CHANGE-TEXTAREA';
const PROFILE = 'PROFILE';

const profileReducer = (state, action) => {

    switch (action.type) {
        case ADD_NEW_POST:
            let newPost = {
                text: state.textarea.value,
                id: 5,
            }

            state.posts.push(newPost);
            state.textarea.value = '';

            return state;

        case CHANGE_TEXTAREA:
            if (action.page === PROFILE) {
                state.textarea.value = action.value;
            }

            return state;

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