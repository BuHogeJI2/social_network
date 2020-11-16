import ReactDOM from "react-dom";
import React from 'react'
import App from "./App";
import {addNewMessage, addPost, changeInputMessageText, changeNewPostText} from "./redux/state";

export let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={state}
                addPost={addPost}
                changeTextarea={changeNewPostText}
                changeInputMessageText={changeInputMessageText}
                addNewMessage={addNewMessage}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}


