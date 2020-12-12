import React from 'react'
import css from "./ProfileInfo.module.css";
import Background from "../User/Background/Background";
import Avatar from "../User/Avatar/Avatar";
import Description from "../User/Description/Description";
import Preloader from "../../../Common/Preloader/Preloader";

const ProfileInfo = ({profileData, status, updateProfileStatus, updateProfilePhoto, isFetching, isOwner}) => {
    if (!profileData) return <Preloader />
    return (
        <div className={css.profile_block}>
            <Background img={profileData.photos.large} />
            <Avatar photo={profileData.photos.small}
                    updateProfilePhoto={updateProfilePhoto}
                    isFetching={isFetching}
                    isOwner={isOwner}
            />
            <Description profileData={profileData} status={status}
                         updateProfileStatus={updateProfileStatus}/>
        </div>
    )
}

export default ProfileInfo;