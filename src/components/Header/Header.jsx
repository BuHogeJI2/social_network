import css from './Header.module.css'

const Header = () => {
	return (
		<header className={css.header}>
			<a href="https://reactjs.org/"><img src="https://cdn.worldvectorlogo.com/logos/react.svg" alt="logo" /></a>
		</header>
	);
}

export default Header;