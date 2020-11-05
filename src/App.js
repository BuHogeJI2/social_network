import React from 'react'
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Dialogs from "./components/Dialogs/Dialogs";


function App() {
    return (
        <div className="wrapper">
            <Header/>
            <Sidebar/>
            <div className='wrapper-content'>
                <Profile/>
                {/*<Dialogs/>*/}
            </div>
        </div>
    )
}

export default App
