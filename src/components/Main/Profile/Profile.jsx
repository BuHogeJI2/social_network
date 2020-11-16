import React from 'react'
import css from './Profile.module.css'
import Background from './User/Background/Background'
import Avatar from './User/Avatar/Avatar'
import Description from './User/Description/Description'
import MyPosts from './MyPosts/MyPosts'
import MyFriends from "./MyFriends/MyFriends";

const Profile = (props) => {
	return (
		<section className={css.profile}>

			<div className={css.main_column}>
				<div className={css.profile_block}>
					<Background />
					<Avatar />
					<Description />
				</div>
				<MyPosts profilePage={props.profilePage} addPost={props.addPost} changeTextarea={props.changeTextarea} />
			</div>
			<div className={css.right_column}>
				<MyFriends friends={props.profilePage.friends} />
			</div>
		</section>
	)
}

export default Profile;