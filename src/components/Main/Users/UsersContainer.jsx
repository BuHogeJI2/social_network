import React from 'react'
import {connect} from "react-redux";
import Users from "./Users";
import {
    followUser, getUsers, pageClick, setFollowingInProgress, unfollowUser,
} from "../../../redux/users-reducer";
import Preloader from "../../Common/Preloader/Preloader";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage);
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
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,

    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {setFollowingInProgress, getUsers, pageClick, unfollowUser, followUser})
)(UsersContainer);