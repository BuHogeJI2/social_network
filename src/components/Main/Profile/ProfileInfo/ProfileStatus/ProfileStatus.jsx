import React from 'react'
import css from './Profile.module.css'

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status,
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    toggleEditMode = () => {
        if (this.state.editMode) {
            this.setState({editMode: false});
            this.props.updateProfileStatus(this.state.status);
        } else {
            this.setState({editMode: true})
        }

    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value,
        })
    }

    render() {
        return (
            <div className={css.status_block}>
                {
                    this.state.editMode
                        ?
                        <div className={css.status_input_block}>
                            <input autoFocus={true} onBlur={this.toggleEditMode}
                                   onChange={this.onStatusChange} value={this.state.status} type="text"/>
                        </div>
                        :
                        <div onClick={this.toggleEditMode} className={css.status_text_block}>
                            <span>{this.props.status || 'No Status'}</span>
                        </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;