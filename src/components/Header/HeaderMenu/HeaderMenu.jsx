import React from 'react'
import css from './HeaderMenu.module.css'
import {NavLink} from "react-router-dom";

const HeaderMenu = (props) => {
    return (
        <nav className={css.nav_container}>
            <NavLink to='/profile' className={css.item}>
                <img src="https://cdn.iconscout.com/icon/free/png-512/account-profile-avatar-man-circle-round-user-30452.png" alt=""/>
                <p>Profile</p>
            </NavLink>
            <NavLink to='/dialogs' className={css.item}>
                <img src="https://cdn2.iconfinder.com/data/icons/business-management-2-11/66/134-512.png" alt=""/>
                <p>Dialogs</p>
            </NavLink>
            <NavLink to='/users' className={css.item}>
                <img src="https://image.flaticon.com/icons/png/512/32/32441.png" alt=""/>
                <p>Users</p>
            </NavLink>
            <NavLink to='/news' className={css.item}>
                <img src="https://icons-for-free.com/iconfiles/png/512/events+news+newspaper+icon-1320086461674084705.png" alt=""/>
                <p>News</p>
            </NavLink>
            <NavLink to='/music' className={css.item}>
                <img src="https://cdn4.iconfinder.com/data/icons/rounded-black-music-player/139/Music-RoundedBlack_musicplayer-512.png" alt=""/>
                <p>Music</p>
            </NavLink>
            <NavLink to='/settings' className={css.item}>
                <img src="https://cdn3.iconfinder.com/data/icons/vector-icons-for-mobile-apps-2/512/Settings_black-512.png" alt=""/>
                <p>Settings</p>
            </NavLink>
        </nav>
    )
}

export default HeaderMenu;