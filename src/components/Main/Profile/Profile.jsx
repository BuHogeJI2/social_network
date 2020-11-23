import React from 'react'
import css from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import MyFriendsContainer from "./MyFriends/MyFriendsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
	return (
		<section className={css.profile}>
			<div className={css.main_column}>
				<ProfileInfo profileData={props.profilePage.profileData} />
				<MyPostsContainer />
			</div>
			<div className={css.right_column}>
				<MyFriendsContainer />
			</div>
		</section>
	)
}

export default Profile;
