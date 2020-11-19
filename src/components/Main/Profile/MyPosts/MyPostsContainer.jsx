import React from 'react'
import {
    addNewPostActionCreator,
    changeProfileTextareaActionCreator,
} from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: () => {
            dispatch(addNewPostActionCreator());
        },
        changeProfileTextarea: (text) => {
            dispatch(changeProfileTextareaActionCreator(text));
        }
    }

}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
