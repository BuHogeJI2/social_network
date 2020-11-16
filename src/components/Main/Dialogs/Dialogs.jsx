import React from 'react'
import css from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <Dialog name={d.name} id={d.id} />)
    let messagesElements = props.state.messages.map(m => <Message id={m.id} message={m.message} />)

    return (
        <div className={css.dialogs}>
            <div className={css.dialogs_block}>
                <h2>Messaging</h2>
                <div className={css.dialog_items}>
                    {dialogsElements}
                </div>
            </div>
            <div className={css.messages_block}>
                <h2>From Name</h2>
                <div className={css.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>
    )
}

export default Dialogs