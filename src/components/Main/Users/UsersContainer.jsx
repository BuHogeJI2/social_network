import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setCurrentPageAC, setStateAC, setTotalCountAC, unfollowAC} from "../../../redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(followAC(userId)),
        unfollow: (userId) => dispatch(unfollowAC(userId)),
        setState: (users) => dispatch(setStateAC(users)),
        setTotalCount: (totalCount) => dispatch(setTotalCountAC(totalCount)),
        setCurrentPage: (pageNumber) => dispatch(setCurrentPageAC(pageNumber)),
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;