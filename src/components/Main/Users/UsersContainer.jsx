import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setStateAC, unfollowAC} from "../../../redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: () => dispatch(followAC(userId)),
        unfollow: () => dispatch(unfollowAC(userId)),
        setState: () => dispatch(setStateAC(users)),
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;