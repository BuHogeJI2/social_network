import React from 'react'
import css from './Users.module.css'
import Paginator from "../../Common/Paginator/Paginator";
import User from "./User/User";

const Users = (props) => {
    return <div className={css.users_block}>
        <h2>Users ({props.usersPage.users.length})</h2>
        {
            props.usersPage.users.map(u => <User user={u}
                                                 unfollowUser={props.unfollowUser}
                                                 followUser={props.followUser}
                                                 followingInProgress={props.followingInProgress}/>)
        }
        <div className={css.pagination_block}>
            <Paginator getPages={props.getPages}
                       currentPage={props.currentPage}
                       pageClick={props.pageClick}
                       getPagesCount={props.getPagesCount} />
        </div>
    </div>
}

export default Users;