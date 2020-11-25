import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {addProfileData, setProfileData} from "../../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

	componentDidMount = () => {
		let userId = this.props.match.params.userId;
		this.props.addProfileData(userId);
	}

	render() {
		return <Profile profilePage={this.props.profilePage} />
	}
}

let mapStateToProps = (state) => ({
	profilePage: state.profilePage,
})

export default connect(mapStateToProps, {
	setProfileData, addProfileData,
})(withRouter(ProfileContainer));
