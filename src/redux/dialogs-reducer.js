const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

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
}

const dialogsReducer = (state = initialState, action) => {

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

export const addNewMessage = (newMessage) => {
    return {type: ADD_NEW_MESSAGE, newMessage}
}


export default dialogsReducer;