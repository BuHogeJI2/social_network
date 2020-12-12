import css from './Avatar.module.css'
import Preloader from "../../../../Common/Preloader/Preloader";
import React from "react";

const Avatar = ({photo, updateProfilePhoto, isFetching, isOwner}) => {

	const onPhotoChange = (e) => {
		if (e.target.files.length) {
			updateProfilePhoto(e.target.files[0])
		}
	}

	if (isFetching) return <Preloader />

	return (
		<div className={css.avatar}>
			<img src={photo} alt=""/>
			{
				isOwner && <input onChange={onPhotoChange} type="file"/>
			}
		</div>
	)
}

export default Avatar