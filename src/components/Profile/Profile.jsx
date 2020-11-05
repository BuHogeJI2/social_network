import css from './Profile.module.css'
import Background from './Background/Background'
import Avatar from './User/Avatar/Avatar'
import Description from './User/Description/Description'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
	return (
		<main className={css.profile_content}>
			<Background />
			<div className={css.user_block}>
				<Avatar />
				<Description />
			</div>
			<MyPosts />
		</main>
	)
}

export default Profile;