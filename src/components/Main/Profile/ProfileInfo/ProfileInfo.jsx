import React from 'react'
import css from "./ProfileInfo.module.css";
import Background from "../User/Background/Background";
import Avatar from "../User/Avatar/Avatar";
import Description from "../User/Description/Description";
import Preloader from "../../../Common/Preloader/Preloader";

const ProfileInfo = ({editMode, updateProfileEditMode, profileData, status, updateProfileStatus, updateProfilePhoto, isFetching, isOwner, updateProfileData}) => {
    if (!Object.keys(profileData).length) return <Preloader />
    return (
        <div className={css.profile_block}>
            <Background img={profileData.photos.large} />
            <Avatar photo={profileData.photos.small}
                    updateProfilePhoto={updateProfilePhoto}
                    isFetching={isFetching}
                    isOwner={isOwner}
            />
            <Description profileData={profileData}
                         status={status}
                         updateProfileStatus={updateProfileStatus}
                         isOwner={isOwner}
                         updateProfileData={updateProfileData}
                         updateProfileEditMode={updateProfileEditMode}
                         editMode={editMode}
            />
        </div>
    )
}

export default ProfileInfo;