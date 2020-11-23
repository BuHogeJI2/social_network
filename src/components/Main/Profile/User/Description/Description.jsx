import css from './Description.module.css'

const Description = (props) => {
	return (
		<div className={css.description}>
			<h2 className={css.name}>{props.profileData.fullName}</h2>
			<div className={css.row}>
				<div className={css.key}>Date of birth:</div>
				<div className={css.value}>3 october</div>
			</div>
			<div className={css.row}>
				<div className={css.key}>City:</div>
				<div className={css.value}>Minsk</div>
			</div>
			<div className={css.row}>
				<div className={css.key}>Education:</div>
				<div className={css.value}>BSAC'2020</div>
			</div>
			<div className={css.row}>
				<div className={css.key}>Web site:</div>
				<div className={css.value}>https://github.com/BuHogeJI2</div>
			</div>
		</div>
	)
}

export default Description