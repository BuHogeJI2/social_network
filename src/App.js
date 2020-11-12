import React from 'react'
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <Sidebar/>
                <div className='wrapper-content'>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/news' component={Dialogs}/>
                    <Route path='/music' component={Dialogs}/>
                    <Route path='/settings' component={Dialogs}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
