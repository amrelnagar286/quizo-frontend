import React from 'react'

import './EndQuiz.scss'
const EndQuiz = ({correctAnswers, totalQuestions, canRestart, restart}) => {
    return (
        <div className='end-quiz'>
            <div className="result">
                <span>{correctAnswers}</span> / {totalQuestions}
            </div>
            {
                canRestart &&
                <div className="quiz__restart-btn">
                    <div 
                        className="btn"
                        onClick={restart}
                    >
                        Restart
                    </div>
                </div>
            }
        </div>
    )
}

export default EndQuiz
