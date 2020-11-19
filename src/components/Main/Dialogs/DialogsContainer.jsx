import React from 'react'
import {addNewMessageActionCreator, changeDialogsTextareaActionCreator} from "../../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: () => {
            dispatch(addNewMessageActionCreator());
        },
        changeTextareaText: (text) => {
            dispatch(changeDialogsTextareaActionCreator(text));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
