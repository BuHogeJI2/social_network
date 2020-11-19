import React from 'react'
import {addNewMessageActionCreator, changeDialogsTextareaActionCreator} from "../../../redux/dialogs-reducer";

const DialogsContainer = (props) => {

    let changeTextareaText = (text) => {
        props.store.dispatch(changeDialogsTextareaActionCreator(text));
    }

    let sendMessage = () => {
        props.store.dispatch(addNewMessageActionCreator());
    }

    return (
      <Dialogs
        changeTextareaText={changeTextareaText}
        addNewMessage={sendMessage}
        dialogsPage={props.store.getState().dialogsPage}
      />
    )
}

export default DialogsContainer
