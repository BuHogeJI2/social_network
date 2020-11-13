import React from 'react'
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


function App(props) {
    return (
        <BrowserRouter>
            {/*<div className="wrapper">*/}
            <div>
                <Header/>
                <div className='wrapper-content'>
                    <Route path='/profile' render={() => <Profile state={props.state.profilePage}/>}/>
                    <Route path='/dialogs'
                           render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
