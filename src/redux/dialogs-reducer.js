const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const CHANGE_TEXTAREA = 'CHANGE-TEXTAREA';
const DIALOGS = 'DIALOGS';

let initialState = {
    dialogs: [
        {id: 1, name: 'Alesya'},
        {id: 2, name: 'Nikita'},
        {id: 3, name: 'Vlad'},
        {id: 4, name: 'Andrew'},
        {id: 5, name: 'IT-Kamasutra'},
    ],
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'When to the gym?'},
        {id: 3, message: 'Where is cities???'},
    ],
    textarea: {
        value: '',
    },
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_NEW_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: state.textarea.value}],
                textarea: {value: ''},
            }
        }
        case CHANGE_TEXTAREA: {
            if (action.page === DIALOGS) {
                return {
                    ...state,
                    textarea: {value: action.value},
                }
            } break;
        }
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