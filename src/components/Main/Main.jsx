import React from 'react'
import css from './Main.module.css'
import {Route} from "react-router-dom";
import DialogsContainer from "./Dialogs/DialogsContainer";
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import Login from "../Common/Forms/LoginForm/LoginForm";


const Main = () => {

    return (
        <main>
            <div className={css.content_wrapper}>
                <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                <Route path='/dialogs' render={() => <DialogsContainer />}/>
                <Route path='/users' render={ () => <UsersContainer /> } />
                <Route path={'/login'} render={ () => <Login /> } />
            </div>
        </main>
    )
}

export default Main
