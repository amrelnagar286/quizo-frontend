//@ts-ignore
import landingImg from '../../assets/imgs/landing-img.svg';
import React from 'react'
import { Link } from 'react-router-dom';

import './HomePage.scss'

const HomePage = () => {
    return (
        <div className='home-page'>
            <div className="landing">
                <div className="left-side">
                    <div className="side__info">
                        <div className="info__title">
                            <div className="title">
                                QUIZO
                            </div>
                        </div>
                        <div className="info__about">
                            <div className="about">
                                A platform for creating online exams
                            </div>
                        </div>
                        <div className="info__btns">
                            <Link to='/register' className="btn">
                                Signup
                            </Link>
                            <Link to='/login' className="btn">
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="right-side">
                    <div className="side__image">
                        <img src={landingImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
