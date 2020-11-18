import React from 'react';
import ReactDOM from 'react-dom';
import state, {addNewMessage, addPost, changeInputMessageText, changeNewPostText, subscribe} from "./redux/state";
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";


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

subscribe(renderEntireTree);

renderEntireTree(state);
reportWebVitals();
