const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const CHANGE_TEXTAREA = 'CHANGE-TEXTAREA';
const DIALOGS = 'DIALOGS';

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.textarea.value,
            }

            state.messages.push(newMessage);
            state.textarea.value = '';

            return state;

        case CHANGE_TEXTAREA:
            if (action.page === DIALOGS) {
                state.textarea.value = action.value;
            }
            return state;

        default:
            return state;
    }

}

export const addNewMessageActionCreator = () => {
    return {type: ADD_NEW_MESSAGE}
}
export const changeDialogsTextareaActionCreator = (value) => {
    return ({
        type: CHANGE_TEXTAREA,
        page: DIALOGS,
        value: value,
    })
}


export default dialogsReducer;