import css from './Description.module.css'

const Description = () => {
	return (
		<div className={css.description}>
			<table>
				<tr><th scope='col'className={css.name}>Dmitry Demidovich</th></tr>
				<tr><th scope='col'></th></tr>
				<tr>
					<th scope='col'>Date of birth:</th>
					<td>3 october</td>
				</tr>
				<tr>
					<th scope='col'>City:</th>
					<td>Minsk</td>
				</tr>
				<tr>
					<th scope='col'>Education:</th>
					<td>BSAC'2020</td>
				</tr>
				<tr>
					<th scope='col'>Web site:</th>
					<td>https://github.com/BuHogeJI2</td>
				</tr>
			</table>
		</div>
	)
}

export default Description