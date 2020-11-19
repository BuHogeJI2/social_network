import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import store from "./redux/redux-store";


export let renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree();

store.subscribe( () => {
	renderEntireTree();
} );

reportWebVitals();
