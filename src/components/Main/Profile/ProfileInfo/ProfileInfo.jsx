import React from 'react'
import css from "./ProfileInfo.module.css";
import Background from "../User/Background/Background";
import Avatar from "../User/Avatar/Avatar";
import Description from "../User/Description/Description";

const ProfileInfo = (props) => {
    return (
        <div className={css.profile_block}>
            <Background img={props.profileData.photos.large} />
            <Avatar photo={props.profileData.photos.small} />
            <Description profileData={props.profileData} />
        </div>
    )
}

export default ProfileInfo;