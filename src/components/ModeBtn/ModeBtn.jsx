import React, { useState } from 'react'
import {FiSun, FiMoon} from 'react-icons/all'

import './ModeBtn.scss'
const ModeBtn = () => {
    const [mode, setMode] = useState()

    return (
        <div className='toggle-mode'>
            <span className="icon">
                {
                    mode == 'dark' ?
                    <FiSun /> :
                    <FiMoon />
                }
            </span>
        </div>
    )
}

export default ModeBtn
