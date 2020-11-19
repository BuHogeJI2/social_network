import React from 'react'
import css from './Main.module.css'
import {Route} from "react-router-dom";
import Profile from "./Profile/Profile";
import DialogsContainer from "./Dialogs/DialogsContainer";


const Main = () => {

    return (
        <main>
            <div className={css.content_wrapper}>
                <Route path='/profile' render={() => <Profile />}/>
                <Route path='/dialogs' render={() => <DialogsContainer />}/>
            </div>
        </main>
    )
}

export default Main
