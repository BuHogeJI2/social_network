import React from 'react'
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    setCurrentPage, setFollowingInProgress,
    setIsFetching,
    setState,
    setTotalCount,
    unfollow
} from "../../../redux/users-reducer";
import Preloader from "../../Common/Preloader/Preloader";
import {usersAPI} from "../../../api/api";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true);
        usersAPI.getPage(this.props.pageSize, this.props.currentPage).then(data => {
            this.props.setIsFetching(false);
            this.props.setState(data.items);
            this.props.setTotalCount(data.totalCount);
        })
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
        this.props.setIsFetching(true);
        this.props.setCurrentPage(page);
        usersAPI.getPage(this.props.pageSize, page).then(data => {
            this.props.setIsFetching(false);
            this.props.setState(data.items);
            this.props.setTotalCount(data.totalCount);
        })
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
                follow={this.props.follow}
                unfollow={this.props.unfollow}
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

export default connect(mapStateToProps, {
    follow, unfollow, setState, setTotalCount, setCurrentPage, setIsFetching, setFollowingInProgress,
})(UsersContainer);