import css from './Description.module.css'
import ProfileStatusWithHooks from "../../ProfileInfo/ProfileStatus/ProfileStatusWithHooks";
import React, {useState} from "react";
import DescriptionEditReduxForm from "./DescriptionEditForm";

const Description = ({editMode, updateProfileEditMode, profileData, status, updateProfileStatus, isOwner, updateProfileData}) => {


    const onSubmit = (data) => {
        updateProfileData(data);
    }

    const onUpdateProfileEditMode = () => {
        updateProfileEditMode(true);
    }

    if (editMode) return <DescriptionEditReduxForm initialValues={profileData} profileData={profileData}
                                                   onSubmit={onSubmit}/>;

    return (
        <div className={css.description}>
            {isOwner && <button onClick={onUpdateProfileEditMode}>Edit</button>}
            <h2 className={css.name}>{profileData.fullName}</h2>
            <ProfileStatusWithHooks status={status} updateProfileStatus={updateProfileStatus}/>
            <div>
                About me: {profileData.aboutMe}
            </div>
            <div>
                Looking for a job: {profileData.lookingForAJob ? 'Yes' : 'No'}
            </div>
            <div>
                {profileData.lookingForAJob &&
                'Looking for a job description: ' + profileData.lookingForAJobDescription}
            </div>
            <div className={css.contacts_block}>
                {Object.keys(profileData.contacts).map(key => {
                    return <Contact key={key} name={key} value={profileData.contacts[key]}/>
                })}
            </div>
        </div>
    )
}

const Contact = ({name, value}) => {
    return (
        <div className={css.contact_block}>
            <b>{name}</b>: {value}
        </div>
    )
}

export default Description