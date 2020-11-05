import css from './MyPosts.module.css'

const MyPosts = () => {
	return (
		<div className={css.my_posts}>
			<h1>My Posts</h1>
			<textarea name="" id={css.textarea} placeholder="your news"></textarea>
			<button className={css.btn}>Send</button>
		</div>
	)
}

export default MyPosts