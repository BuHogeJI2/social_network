import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import store from "./redux/redux-store";


export let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} dispatch={store.dispatch.bind(store)} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree(store.getState());
store.subscribe( () => {
	let state = store.getState();
	renderEntireTree(state);
} );

reportWebVitals();
