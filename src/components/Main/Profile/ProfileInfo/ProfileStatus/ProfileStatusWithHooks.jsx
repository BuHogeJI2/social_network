import React, {useEffect, useState} from 'react'
import css from './Profile.module.css'

const ProfileStatusWithHooks = (props) => {

    useEffect( () => {
        setStatus(props.status)
    }, [props.status] );

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    let activateEditMode = () => {
        setEditMode(true);
    }

    let deactivateEditMode = () => {
        setEditMode(false);
        props.updateProfileStatus(status);
    }

    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }


    return (
        <div className={css.status_block}>
            {
                editMode
                    ?
                    <div className={css.status_input_block}>
                        <input onChange={onStatusChange} value={status} autoFocus={true} onBlur={deactivateEditMode} type="text"/>
                    </div>
                    :
                    <div className={css.status_text_block}>
                        <span onClick={activateEditMode}>{props.status || 'No Status'}</span>
                    </div>
            }
        </div>
    )
}


export default ProfileStatusWithHooks;