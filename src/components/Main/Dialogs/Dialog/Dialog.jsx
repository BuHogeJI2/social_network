import React from 'react'
import css from './Dialog.module.css'
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (
        <NavLink to={`/dialogs/${props.id}`}>
            <div className={css.dialog_block}>
                {props.name}
            </div>
        </NavLink>
    )
}

export default Dialog