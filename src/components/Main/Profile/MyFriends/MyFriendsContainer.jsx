import React from 'react'
import MyFriends from "./MyFriends";

const MyFriendsContainer = (props) => {

    return <MyFriends friends={props.store.getState().profilePage.friends}/>
}

export default MyFriendsContainer;