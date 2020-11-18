let store = {

    _state: {
        profilePage: {
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
                value: 'Input text',
            },
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
            textarea: {
                value: 'Input text',
            },
        },
    },
    _subscriber() {
        console.log('No subscribers (observers');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._subscriber = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD-NEW-POST') {
            let newPost = {
                text: this._state.profilePage.textarea.value,
                id: 5,
            }

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.textarea.value = '';
            this._subscriber(this._state);

        } else if (action.type === 'ADD-NEW-MESSAGE') {
            let newMessage = {
                id: 4,
                message: this._state.dialogsPage.textarea.value,
            }

            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.textarea.value = '';
            this._subscriber(this._state)

        } else if (action.type === 'CHANGE-TEXTAREA') {
            if (action.page === 'PROFILE') {
                this._state.profilePage.textarea.value = action.value;
                this._subscriber(this._state)
            } else if (action.page === 'DIALOGS') {
                this._state.dialogsPage.textarea.value = action.value;
                this._subscriber(this._state)
            }
        }
    },

}

export default store;