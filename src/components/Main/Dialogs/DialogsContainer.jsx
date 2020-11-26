import React from 'react'
import {addNewMessageActionCreator, changeDialogsTextareaActionCreator} from "../../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

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

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);