import React from 'react'
import css from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.dialogs.map(d => <Dialog name={d.name} id={d.id}/>)
    let messagesElements = props.dialogs.messages.map(m => <Message id={m.id} message={m.message}/>)

    let textareaRef = React.createRef();

    let changeText = () => {
        props.dispatch({
            type: 'CHANGE-TEXTAREA',
            page: 'DIALOGS',
            value: textareaRef.current.value,
        })
    }

    let sendMessage = () => {
        props.dispatch({type: 'ADD-NEW-MESSAGE'});
    }

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
                <textarea ref={textareaRef} onChange={changeText} value={props.dialogs.textarea.value}
                          placeholder='input message'/>
                <button onClick={sendMessage} className={css.btn}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs