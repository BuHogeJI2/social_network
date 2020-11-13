import React from 'react'
import css from './Profile.module.css'
import Background from './Background/Background'
import Avatar from './User/Avatar/Avatar'
import Description from './User/Description/Description'
import MyPosts from './MyPosts/MyPosts'

const Profile = (props) => {
	return (
		<div>
			<Background />
			<div className={css.user_block}>
				<Avatar />
				<Description />
			</div>
			<MyPosts posts={props.state.posts} />
		</div>
	)
}

export default Profile;