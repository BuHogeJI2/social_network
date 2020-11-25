import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {addProfileData, setProfileData} from "../../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

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

export default withAuthRedirect(connect(mapStateToProps, {
	setProfileData, addProfileData,
})(withRouter(ProfileContainer)));
