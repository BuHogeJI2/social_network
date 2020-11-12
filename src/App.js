import React from 'react'
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


function App(props) {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <Sidebar/>
                <div className='wrapper-content'>
                    <Route path='/profile' render={() => <Profile posts={props.posts} />}/>
                    <Route path='/dialogs' render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
