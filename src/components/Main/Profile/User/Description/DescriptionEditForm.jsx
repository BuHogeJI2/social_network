import React from 'react';
import {Field, reduxForm} from "redux-form";
import css from './Description.module.css'
import {Input, Textarea} from "../../../../Common/Forms/FormControls/FormControls";

const DescriptionEditForm = ({profileData, handleSubmit}) => {
    return (
        <form className={css.description} onSubmit={handleSubmit}>
            <div className={css.form_row}>
                Full Name:
                <Field name={'fullName'} component={Input} type={'text'} placeholder={'Enter your name'} />
            </div>
            <div className={css.form_row}>
                About me:
                <Field name={'aboutMe'} component={Input} type={'text'} placeholder={'Enter text about yourself'} />
            </div>
            <div className={css.form_row}>
                Looking for a job: <Field name={'lookingForAJob'} component={Input} type={'checkbox'} />
            </div>
            <div className={css.form_row}>
                Looking for a job description:
                <Field name={'lookingForAJobDescription'} component={Textarea} type={'text'} placeholder={'Your text'} />
            </div>
            <div>
                Contacts:
                {Object.keys(profileData.contacts).map(key => {
                    return <div key={key} className={css.form_row}>
                        {key}: <Field component={Input} type={'text'} name={'contacts.'+key} placeholder={key}/>
                    </div>
                })}
            </div>
            <button>Save</button>
        </form>
    )
}

const DescriptionEditReduxForm = reduxForm({form: 'profile_edit_form'})(DescriptionEditForm)
export default DescriptionEditReduxForm