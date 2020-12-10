import React from 'react'
import MyPosts from "./MyPosts";
import {addNewPost} from "../../../../redux/profile-reducer";



const MyPostsContainer = ({profilePage}) => {

    return <MyPosts profilePage={profilePage} addNewPost={addNewPost}/>

}

export default MyPostsContainer;