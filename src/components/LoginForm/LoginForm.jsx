import React, { useEffect, useState } from 'react'
import {BsEye, BsEyeSlash} from 'react-icons/all'

import './LoginForm.scss'
const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [emailLabel, setEmailLabel] = useState(false)
    const [passLabel, setPassLabel] = useState(false)

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    
    return (
        <div className='login-form'>
            <div className="form__title">
                Login
            </div>
            <div className="form__row">
                <div 
                    className={`box ${emailLabel && 'active'}`}
                >
                    <label 
                        htmlFor="email" 
                        className='email-label' 
                    >
                        Email
                    </label>
                    <input 
                        type="email" 
                        id="email" 
                        autoComplete='off'
                        className='email-input'
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        onFocus={() => {
                            setEmailLabel(true)
                        }}
                        onBlur={() => {
                            if(email === ''){
                                setEmailLabel(false)
                            }
                        }}
                    />
                </div>
            </div>

            <div className="form__row">
                <div 
                    className={`box ${passLabel && 'active'}`}
                >
                    <label 
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <input 
                        type={showPassword ? 'text' : 'password'} 
                        id="password" 
                        autoComplete='off'
                        onChange={e => setPass(e.target.value)}
                        value={pass}
                        onFocus={() => {
                            setPassLabel(true)
                        }}
                        onBlur={() => {
                            if(pass === ''){
                                setPassLabel(false)
                            }
                        }}
                    />
                    <span 
                        className='show-pass'
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {
                            showPassword ?
                            <BsEyeSlash /> :
                            <BsEye />
                        }
                    </span>
                </div>
            </div>

            <div className="form__btn">
                <div className="btn">
                    Login
                </div>
            </div>
        </div>
    )
}

export default LoginForm
