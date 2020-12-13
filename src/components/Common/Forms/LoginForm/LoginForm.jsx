import React from 'react'
import {Field, reduxForm} from "redux-form";
import {Input} from "../FormControls/FormControls";
import {maxLength, required} from "../../../../utils/validators/validators";
import {connect} from "react-redux";
import {logIn} from "../../../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import css from '../FormControls/FormConstrols.module.css'


let maxLength50 = maxLength(50);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'email'} validate={[required, maxLength50]} component={Input} type={'email'}
                   placeholder={'Login'}/>
            <Field name={'password'} validate={[required, maxLength50]} component={Input} type={'password'}
                   placeholder={'password'}/>
            <Field name={'rememberMe'} component={Input} type={'checkbox'}/>
            {props.captchaUrl &&
                <div>
                    <img src={props.captchaUrl}/>
                    <Field name={'captcha'} validate={[required]} component={Input} placeholder={'captcha symbols'}/>
                </div>
            }
            {
                props.error &&
                <div className={css.error_block}>
                    {props.error}
                </div>
            }
            <button>Log in</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'loginForm'})(LoginForm)

const Login = (props) => {

    const onSubmit = (values) => {
        props.logIn(values);
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login Form</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl,
    }
}

export default connect(mapStateToProps, {logIn})(Login);