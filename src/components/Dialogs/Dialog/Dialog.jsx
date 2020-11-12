import React from 'react'
import css from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (
        <div className={css.dialog}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

export default Dialog