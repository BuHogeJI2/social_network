import React from 'react'
import css from './User.module.css'
import userPhoto from '../../../../assets/images/user_photo_not_found.png'
import {NavLink} from "react-router-dom";

const User = (props) => {
    return (
        <div className={css.user}>
            <div className={css.user_action_part}>
                <NavLink to={`profile/${props.user.id}`}>
                    <img src={props.user.photos.small ? props.user.photos.small : userPhoto} alt=""/>
                </NavLink>
                <div>
                    {
                        props.user.followed ?
                            <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                    onClick={() => props.unfollowUser(props.user.id)}>Unfollow</button> :
                            <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                    onClick={() => props.followUser(props.user.id)}>Follow</button>
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
                    {props.user.name}
                </div>
                <div className={css.user_status_block}>
                    {props.user.status ? props.user.status : 'No status'}
                </div>

            </div>
        </div>
    )
}

export default User;