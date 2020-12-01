import React from 'react'
import css from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import MyFriendsContainer from "./MyFriends/MyFriendsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateProfileStatus} from "../../../redux/profile-reducer";

const Profile = (props) => {
	return (
		<section className={css.profile}>
			<div className={css.main_column}>
				<ProfileInfo profileData={props.profilePage.profileData} status={props.profilePage.status}
							 updateProfileStatus={props.updateProfileStatus}/>
				<MyPostsContainer />
			</div>
			<div className={css.right_column}>
				<MyFriendsContainer />
			</div>
		</section>
	)
}

export default Profile;
