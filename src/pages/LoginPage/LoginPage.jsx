import React, {useEffect} from 'react'

import LoginForm from '../../components/LoginForm/LoginForm'

import './LoginPage.scss'
const LoginPage = () => {
    
    return (
        <div className='login-page'>
            <div className="container">

                <LoginForm />

            </div>
        </div>
    )
}

export default LoginPage
