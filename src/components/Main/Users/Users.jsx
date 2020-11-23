import React from 'react'
import css from './Users.module.css'
import userPhoto from '../../../assets/images/user_photo_not_found.png'
import {NavLink} from "react-router-dom";

const Users = (props) => {

    return <div className={css.users_block}>
        <h2>Users ({props.usersPage.users.length})</h2>
        {
            props.usersPage.users.map(u => <div>
                <div className={css.user}>
                    <div className={css.user_action_part}>
                        <NavLink to={`profile/${u.id}`}>
                            <img src={u.photos.small ? u.photos.small : userPhoto} alt=""/>
                        </NavLink>
                        <div>
                            {
                                u.followed ?
                                    <button onClick={() => {
                                        props.unfollow(u.id)
                                    }}>Unfollow</button> :
                                    <button onClick={() => {
                                        props.follow(u.id)
                                    }}>Follow</button>
                            }
                        </div>
                    </div>
                    <div className={css.user_info_part}>
                        <div className={css.user_location_block}>
                            <div className={css.user_city}>
                                {'u.location.city'}
                            </div>
                            <div className={css.user_country}>
                                {'u.location.country'}
                            </div>
                        </div>
                        <div className={css.user_name_block}>
                            {u.name}
                        </div>
                        <div className={css.user_status_block}>
                            {u.status ? u.status : 'No status'}
                        </div>

                    </div>
                </div>
            </div>)
        }
        <div className={css.pagination_block}>
            {
                props.getPages(props.getPagesCount()).map(p => {
                    return <div
                        className={`${css.page_block} ${p === props.currentPage && css.current_page}`}
                        onClick={() => {
                            props.pageClick(p)
                        }}
                    >{p}
                    </div>
                })
            }
        </div>
    </div>
}

export default Users;