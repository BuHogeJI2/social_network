import React from 'react'
import {
    addNewPostActionCreator,
    changeProfileTextareaActionCreator,
} from "../../../../redux/profile-reducer";

const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let addNewPost = () => {
        props.dispatch(addNewPostActionCreator())
    }

    let changeProfileTextarea = (text) => {
        props.dispatch(changeProfileTextareaActionCreator(text));
    }

    return (
        <MyPosts
          profilePage={state.profilePage}
          changeProfileTextarea={changeProfileTextarea}
          addNewPost={addNewPost}
        />
    )
}

export default MyPostsContainer
