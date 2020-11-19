import React from 'react'
import {
    addNewPostActionCreator,
    changeProfileTextareaActionCreator,
} from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    debugger
    let state = props.store.getState();

    let addNewPost = () => {
        props.store.dispatch(addNewPostActionCreator())
    }

    let changeProfileTextarea = (text) => {
        props.store.dispatch(changeProfileTextareaActionCreator(text));
    }

    return (
        <MyPosts
          profilePage={state.profilePage}
          changeProfileTextarea={changeProfileTextarea}
          addNewPost={addNewPost}
        />
    )
}

export default MyPostsContainer;
