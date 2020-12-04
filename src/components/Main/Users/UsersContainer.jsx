import React from 'react'
import {connect} from "react-redux";
import Users from "./Users";
import {
    followUser, requestUsers, pageClick, setFollowingInProgress, unfollowUser,
} from "../../../redux/users-reducer";
import Preloader from "../../Common/Preloader/Preloader";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize, getSuperUsersPage,
    getTotalCount,
    getUsersPage
} from "../../../redux/selectors/users-selectors";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.pageSize, this.props.currentPage);
    }

    getPagesCount = () => {
        return Math.ceil(this.props.totalCount / this.props.pageSize);
    }

    getPages = (count) => {
        let result = [];
        for (let i = 1; i <= count; i++) {
            result.push(i);
        }
        return result;
    }

    pageClick = (page) => {
        this.props.pageClick(this.props.pageSize, page)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                usersPage={this.props.usersPage}
                getPages={this.getPages}
                getPagesCount={this.getPagesCount}
                currentPage={this.props.currentPage}
                pageClick={this.pageClick}
                followUser={this.props.followUser}
                unfollowUser={this.props.unfollowUser}
                setFollowingInProgress={this.props.setFollowingInProgress}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        usersPage: getUsersPage(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),

    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {setFollowingInProgress, requestUsers, pageClick, unfollowUser, followUser})
)(UsersContainer);