import React from 'react'
import MyFriends from "./MyFriends";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        friends: state.profilePage.friends,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const MyFriendsContainer = connect(mapStateToProps, mapDispatchToProps)(MyFriends);

export default MyFriendsContainer;