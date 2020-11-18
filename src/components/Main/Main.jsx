import React from 'react'
import css from './Main.module.css'
import {Route} from "react-router-dom";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";


const Main = (props) => {
    return (
        <main>
            <div className={css.content_wrapper}>
                <Route path='/profile'
                       render={() => <Profile profile={props.state.profilePage} dispatch={props.dispatch}/>}/>
                <Route path='/dialogs'
                       render={() => <Dialogs dialogs={props.state.dialogsPage} dispatch={props.dispatch} />}/>
            </div>
        </main>
    )
}

export default Main