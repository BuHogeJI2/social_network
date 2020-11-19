import React from 'react'
import css from './Profile.module.css'
import Background from './User/Background/Background'
import Avatar from './User/Avatar/Avatar'
import Description from './User/Description/Description'
import MyPostsContainer from './MyPosts/MyPosts'
import MyFriendsContainer from "./MyFriends/MyFriends";

const Profile = (props) => {
	return (
		<section className={css.profile}>
			<div className={css.main_column}>
				<div className={css.profile_block}>
					<Background />
					<Avatar />
					<Description />
				</div>
				<MyPostsContainer store={props.store} />
			</div>
			<div className={css.right_column}>
				<MyFriendsContainer store={props.store} />
			</div>
		</section>
	)
}

export default Profile;
