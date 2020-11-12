import React from 'react'
import css from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(d => <Dialog name={d.name} id={d.id} />)
    let messagesElements = props.messages.map(m => <Message id={m.id} message={m.message} />)

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