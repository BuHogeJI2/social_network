import React from 'react'
import Header from "./Header";
import {getMe, logOut} from "../../redux/auth-reducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {

	componentDidMount() {
		this.props.getMe();
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

export default connect(mapStateToProps, {getMe, logOut})(HeaderContainer);