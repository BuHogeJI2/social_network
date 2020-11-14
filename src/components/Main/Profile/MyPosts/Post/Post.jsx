import React from 'react'
import css from './Post.module.css'

const Post = (props) => {
	return (
		<div className={css.post}>
			<div className={css.from_block}>
				<div className={css.img_block}>
					<img src="https://cdn.onlinewebfonts.com/svg/img_530986.png" alt=""/>
				</div>
				<div className={css.from_name}>
					Name Lastname
				</div>
			</div>
			<div className={css.message}>
				{props.text}
			</div>
		</div>
	)
}

export default Post