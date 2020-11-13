import React from 'react'
import css from './Header.module.css'
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import {NavLink} from "react-router-dom";

const Header = () => {
	return (
		<header>
			<div className={css.content}>
				<NavLink to='/'>
					<img src="https://cdn.auth0.com/blog/react-js/react.png" alt="react logo"/>
				</NavLink>
				<HeaderMenu/>
			</div>
			<hr/>
		</header>
	);
}

export default Header;