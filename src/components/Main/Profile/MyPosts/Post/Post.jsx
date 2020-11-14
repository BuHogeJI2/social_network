import css from './Post.module.css'

const Post = (props) => {
	return (
		<div className={css.post}>
			<img src="https://static.mk.ru/upload/entities/2016/02/05/articles/detailPicture/f2/64/12/938772744_1186743.jpg" alt=""/>
			<div className={css.message}>
				{props.text}
			</div>
		</div>
	)
}

export default Post