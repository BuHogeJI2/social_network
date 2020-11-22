import React from 'react'
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setState,
    setTotalCount,
    unfollow
} from "../../../redux/users-reducer";
import * as axios from "axios";
import Preloader from "../../Common/Preloader/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(response => {
            this.props.setIsFetching(false);
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
        this.props.setIsFetching(true);
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`).then(response => {
            this.props.setIsFetching(false);
            this.props.setState(response.data.items);
            this.props.setTotalCount(response.data.totalCount);
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

    }
}

export default connect(mapStateToProps, {
    follow, unfollow, setState, setTotalCount, setCurrentPage, setIsFetching,
})(UsersContainer);