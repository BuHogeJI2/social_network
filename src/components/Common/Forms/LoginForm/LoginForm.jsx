import React from 'react'
import {Field, reduxForm} from "redux-form";
import {authAPI} from "../../../../api/api";
import {Redirect} from "react-router-dom";
import {Input} from "../FormControls/FormControls";
import {maxLength, required} from "../../../../utils/validators/validators";


let maxLength50 = maxLength(50);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <Field name={'email'} validate={[required, maxLength50]} component={Input} type={'email'} placeholder={'Login'} />
            <Field name={'password'} validate={[required, maxLength50]} component={Input} type={'password'} placeholder={'password'} />
            <Field name={'rememberMe'} component={Input} type={'checkbox'} />
            <button>Log in</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'loginForm'})(LoginForm)

const Login = (props) => {

    const onSubmit = (values) => {
        authAPI.logIn(values.email, values.password, values.rememberMe).then(response => {
            if (response.data.resultCode === 0) return <Redirect to={'/profile'}/>
        })
    }

    return (
        <div>
            <h1>Login Form</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login;