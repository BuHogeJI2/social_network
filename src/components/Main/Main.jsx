import React from 'react'
import css from './Main.module.css'
import {Route} from "react-router-dom";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";


const Main = (props) => {
    return (
        <main>
            <div className={css.content_wrapper}>
                <Route path='/profile' render={() => <Profile
                    profilePage={props.state.profilePage}
                    addPost={props.addPost}
                    changeTextarea={props.changeTextarea}
                />}/>
                <Route path='/dialogs'
                       render={() => <Dialogs
                           dialogsPage={props.state.dialogsPage}
                           changeInputMessageText={props.changeInputMessageText}
                           addNewMessage={props.addNewMessage}
                       />}/>
            </div>
        </main>
    )
}

export default Main