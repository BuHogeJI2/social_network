import React from 'react'
import Header from "./Header";
import {setAuthData} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import * as axios from 'axios'

class HeaderContainer extends React.Component {

	componentDidMount() {
		axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
			withCredentials: true,
		}).then(response => {
			let {id, email, login} = response.data.data;
			this.props.setAuthData(id, email, login);
		});
	}

	render() {
		return <Header {...this.props} />;
	}
}

let mapStateToProps = (state) => {
	return {
		authData: state.auth,
	}
}

export default connect(mapStateToProps, {
	setAuthData,
})(HeaderContainer);