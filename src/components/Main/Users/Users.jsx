import React from 'react'
import css from './Users.module.css'

const Users = (props) => {
    return <div className={css.users_block}>
        <h2>Users</h2>
        {
            props.usersPage.users.map(u => <div>
                <div className={css.user}>
                    <div className={css.user_action_part}>
                        <img src={u.photoUrl} alt=""/>
                        <div>
                            {
                                u.followed ?
                                    <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> :
                                    <button onClick={() => {props.follow(u.id)}}>Follow</button>
                            }
                        </div>
                    </div>
                    <div className={css.user_info_part}>
                        <div className={css.user_location_block}>
                            <div className={css.user_city}>
                                {u.location.city}
                            </div>
                            <div className={css.user_country}>
                                {u.location.country}
                            </div>
                        </div>
                        <div className={css.user_name_block}>
                            {u.fullName}
                        </div>
                        <div className={css.user_status_block}>
                            {u.status}
                        </div>

                    </div>
                </div>
            </div>)
        }
    </div>
}

export default Users;