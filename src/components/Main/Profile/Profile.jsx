import React from 'react'
import css from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import MyFriendsContainer from "./MyFriends/MyFriendsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({profilePage, updateProfileStatus}) => {
	return (
		<section className={css.profile}>
			<div className={css.main_column}>
				<ProfileInfo profileData={profilePage.profileData} status={profilePage.status}
							 updateProfileStatus={updateProfileStatus}/>
				<MyPostsContainer profilePage={profilePage} />
			</div>
			<div className={css.right_column}>
				<MyFriendsContainer friends={profilePage.friends}/>
			</div>
		</section>
	)
}

export default Profile;
