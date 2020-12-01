import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {addProfileData, getProfileStatus, setProfileData, updateProfileStatus} from "../../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

	componentDidMount = () => {
		let userId = this.props.match.params.userId;
		this.props.addProfileData(userId);
		this.props.getProfileStatus(userId);
	}

	render() {
		return <Profile profilePage={this.props.profilePage} updateProfileStatus={this.props.updateProfileStatus} />
	}
}

let mapStateToProps = (state) => ({
	profilePage: state.profilePage,
})

export default compose(
	withAuthRedirect,
	connect(mapStateToProps, {setProfileData, addProfileData, getProfileStatus, updateProfileStatus}),
	withRouter
)(ProfileContainer);

