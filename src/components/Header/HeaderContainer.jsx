import React from 'react'
import Header from "./Header";
import {logIn, setAuthData} from "../../redux/auth-reducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {

	componentDidMount() {
		this.props.logIn();
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
	setAuthData, logIn,
})(HeaderContainer);