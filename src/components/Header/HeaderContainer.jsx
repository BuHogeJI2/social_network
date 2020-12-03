import React from 'react'
import Header from "./Header";
import {logOut} from "../../redux/auth-reducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {

	render() {
		return <Header {...this.props} />;
	}
}

let mapStateToProps = (state) => {
	return {
		authData: state.auth,
	}
}

export default connect(mapStateToProps, {logOut})(HeaderContainer);