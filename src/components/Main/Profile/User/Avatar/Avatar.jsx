import css from './Avatar.module.css'

const Avatar = (props) => {
	return (
		<div className={css.avatar}>
			<img src={props.photo} alt=""/>
		</div>
	)
}

export default Avatar