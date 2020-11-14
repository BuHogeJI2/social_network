import React from 'react'
import css from './Profile.module.css'
import Background from './Background/Background'
import Avatar from './User/Avatar/Avatar'
import Description from './User/Description/Description'
import MyPosts from './MyPosts/MyPosts'

const Profile = (props) => {
	return (
		<section className={css.profile}>

			<div className={css.profile_block}>
				<Background />
				<Avatar />
				<Description />
			</div>
			<MyPosts posts={props.state.posts} />
		</section>
	)
}

export default Profile;