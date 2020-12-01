import React from 'react'
import css from "./ProfileInfo.module.css";
import Background from "../User/Background/Background";
import Avatar from "../User/Avatar/Avatar";
import Description from "../User/Description/Description";
import Preloader from "../../../Common/Preloader/Preloader";
import {updateProfileStatus} from "../../../../redux/profile-reducer";

const ProfileInfo = (props) => {
    if (!props.profileData) return <Preloader />
    return (
        <div className={css.profile_block}>
            <Background img={props.profileData.photos.large} />
            <Avatar photo={props.profileData.photos.small} />
            <Description profileData={props.profileData} status={props.status}
                         updateProfileStatus={props.updateProfileStatus}/>
        </div>
    )
}

export default ProfileInfo;