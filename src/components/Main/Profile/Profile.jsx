import React from 'react'
import css from './Profile.module.css'
import Background from './User/Background/Background'
import Avatar from './User/Avatar/Avatar'
import Description from './User/Description/Description'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import MyFriendsContainer from "./MyFriends/MyFriendsContainer";

const Profile = () => {

	return (
		<section className={css.profile}>
			<div className={css.main_column}>
				<div className={css.profile_block}>
					<Background />
					<Avatar />
					<Description />
				</div>
				<MyPostsContainer />
			</div>
			<div className={css.right_column}>
				<MyFriendsContainer />
			</div>
		</section>
	)
}

export default Profile;
