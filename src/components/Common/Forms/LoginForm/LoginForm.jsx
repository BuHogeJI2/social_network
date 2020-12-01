import React from 'react'
import {Field, reduxForm} from "redux-form";
import {authAPI} from "../../../../api/api";
import {Redirect} from "react-router-dom";



const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <Field name={'email'} component={'input'} type={'email'} placeholder={'Login'} />
            <Field name={'password'} component={'input'} type={'password'} placeholder={'password'} />
            <Field name={'rememberMe'} component={'input'} type={'checkbox'} />
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