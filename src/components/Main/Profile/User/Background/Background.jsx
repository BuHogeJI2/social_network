import css from './Background.module.css' 

const Background = (props) => {
	return (
		<div className={css.background}>
			<img src={props.img} alt=""/>
		</div>
	)
}

export default Background;