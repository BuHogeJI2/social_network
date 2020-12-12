import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {
	addProfileData,
	getProfileStatus,
	setProfileData, updateProfileData, updateProfileEditMode,
	updateProfilePhoto,
	updateProfileStatus
} from "../../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

	componentDidMount = () => {
		let userId = this.props.match.params.userId;
		if (!userId) userId = this.props.meId;
		this.props.addProfileData(userId);
		this.props.getProfileStatus(userId);
	}

	render() {
		return <Profile profilePage={this.props.profilePage}
						updateProfilePhoto={this.props.updateProfilePhoto}
						updateProfileStatus={this.props.updateProfileStatus}
						updateProfileData={this.props.updateProfileData}
						updateProfileEditMode={this.props.updateProfileEditMode}
						isOwner={!this.props.match.params.userId}
		/>
	}
}

let mapStateToProps = (state) => ({
	profilePage: state.profilePage,
})

export default compose(
	withAuthRedirect,
	connect(mapStateToProps, {setProfileData, addProfileData, getProfileStatus,
			updateProfileStatus, updateProfilePhoto, updateProfileData, updateProfileEditMode}),
	withRouter
)(ProfileContainer);

