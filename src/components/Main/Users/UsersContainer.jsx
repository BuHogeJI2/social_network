import React from 'react'
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setCurrentPageAC, setStateAC, setTotalCountAC, unfollowAC} from "../../../redux/users-reducer";
import * as axios from "axios";

class UsersContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(response => {
            this.props.setState(response.data.items);
            this.props.setTotalCount(response.data.totalCount);
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
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`).then(response => {
            this.props.setState(response.data.items);
            this.props.setTotalCount(response.data.totalCount);
        })
    }

    render() {
        return <Users
            usersPage={this.props.usersPage}
            getPages={this.getPages}
            getPagesCount={this.getPagesCount}
            currentPage={this.props.currentPage}
            pageClick={this.pageClick}
        />
    }

}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);