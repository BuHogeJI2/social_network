import React from 'react'
import css from './Users.module.css'
import * as axios from 'axios'
import userPhoto from '../../../assets/images/user_photo_not_found.png'

const Users = (props) => {
    debugger
    if (props.usersPage.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setState(response.data.items);
        })
    }
    debugger

    return <div className={css.users_block}>
        <h2>Users</h2>
        {
            props.usersPage.users.map(u => <div>
                <div className={css.user}>
                    <div className={css.user_action_part}>
                        <img src={u.photos.small ? u.photos.small : userPhoto} alt=""/>
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
    </div>
}

export default Users;