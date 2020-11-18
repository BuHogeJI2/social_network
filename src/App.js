import React from 'react'
import {BrowserRouter} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Main from "./components/Main/Main";


function App(props) {
    return (
        <BrowserRouter>
            <Header/>
            <Main state={props.state} dispatch={props.dispatch} />
        </BrowserRouter>
    )
}

export default App
