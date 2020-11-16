import {renderEntireTree} from "../Render";

let state = {
    profilePage: {
        posts: [
            {text: 'Why your code is too bad?', id: 1},
            {text: 'You have to work harder', id: 2},
            {text: 'Dont be a lazy peace of shit', id: 3},
            {text: 'Go WORK!', id: 4},
        ],
        newPostText: 'New post text',
        friends: [
            {id: 1, name: 'Alesya', img: 'https://www.ifsw.org/wp-content/uploads/2018/03/friends.png'},
            {id: 2, name: 'Nikita', img: 'https://www.ifsw.org/wp-content/uploads/2018/03/friends.png'},
            {id: 3, name: 'Vlad', img: 'https://www.ifsw.org/wp-content/uploads/2018/03/friends.png'},
            {id: 4, name: 'Andrew', img: 'https://www.ifsw.org/wp-content/uploads/2018/03/friends.png'},
            {id: 5, name: 'IT-Kamasutra', img: 'https://www.ifsw.org/wp-content/uploads/2018/03/friends.png'},
        ],
    },
    dialogsPage: {
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
        inputMessage: 'Input message'
    },
}

export let addPost = () => {

    let newPost = {
        text: state.profilePage.newPostText,
        id: 5,
    }

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
}

export let changeNewPostText = (textareaText) => {

    state.profilePage.newPostText = textareaText;
    renderEntireTree(state)
}

export let changeInputMessageText = (newInputText) => {
    state.dialogsPage.inputMessage = newInputText;
    renderEntireTree(state);
}

export let addNewMessage = () => {

    let newMessage = {
        id: 4,
        message: state.dialogsPage.inputMessage,
    }

    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.inputMessage = '';
    renderEntireTree(state);
}

export default state