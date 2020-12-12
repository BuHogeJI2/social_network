import React from 'react'
import css from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../Common/Forms/FormControls/FormControls";
import {maxLength, required} from "../../../utils/validators/validators";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <Dialog key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)

    let sendMessage = (values) => {
        props.addNewMessage(values.newMessageText);
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
                <AddMessageFormRedux onSubmit={sendMessage} />
            </div>
        </div>
    )
}

let maxLength50 = maxLength(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'newMessageText'} component={Textarea} type={'text'}
                   className={css.textarea}
                   validate={[required, maxLength50]}
                   placeholder='input message'/>
            <button className={css.btn}>Send</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'addMessageForm'})(AddMessageForm)

export default Dialogs
