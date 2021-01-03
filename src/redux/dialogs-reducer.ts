const ADD_NEW_MESSAGE = 'dialogs/ADD_NEW_MESSAGE';

type DialogsItems = {
    id: null | number
    name: null | string
}

type MessagesItems = {
    id: null | number
    message: null | string
}


type initialStateType = {
    dialogs: Array<DialogsItems>
    messages: Array<MessagesItems>
}

let initialState: initialStateType = {
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
}

const dialogsReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case ADD_NEW_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: action.newMessage}],
            }
        }

        default:
            return state;
    }
}

type addNewMessageType = {
    type: typeof ADD_NEW_MESSAGE
    newMessage: null | string
}

export const addNewMessage = (newMessage: null | string): addNewMessageType => {
    return {type: ADD_NEW_MESSAGE, newMessage}
}

export default dialogsReducer;