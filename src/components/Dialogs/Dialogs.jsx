import React from 'react'
import css from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={css.dialog}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

const MessageItem = (props) => {
    return (
        <div className={css.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Alesya'},
        {id: 2, name: 'Nikita'},
        {id: 3, name: 'Vlad'},
        {id: 4, name: 'Andrew'},
        {id: 5, name: 'IT-Kamasutra'},
    ]

    let messages = [
        {id: 1, message: 'Hi!'},
        {id: 1, message: 'When to the gym?'},
        {id: 1, message: 'Where is cities???'},
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = messages.map(m => <MessageItem id={m.id} message={m.message} />)

    return (
        <div className={css.dialogs}>
            <div className={css.dialog_items}>
                {dialogsElements}
            </div>
            <div className={css.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs