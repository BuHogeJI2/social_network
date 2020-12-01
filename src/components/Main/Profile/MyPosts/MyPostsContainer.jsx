import React from 'react'
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addNewPost} from "../../../../redux/profile-reducer";

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
    }
}


const MyPostsContainer = connect(mapStateToProps, {addNewPost})(MyPosts)

export default MyPostsContainer;
