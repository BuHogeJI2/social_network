import React from 'react'
import css from './Main.module.css'
import {Route} from "react-router-dom";
import Profile from "./Profile/Profile";
import DialogsContainer from "./Dialogs/Dialogs";


const Main = (props) => {
    return (
        <main>
            <div className={css.content_wrapper}>
                <Route path='/profile'
                       render={() => <Profile store={props.store} />}/>
                <Route path='/dialogs'
                       render={() => <DialogsContainer store={props.store} />}/>
            </div>
        </main>
    )
}

export default Main
