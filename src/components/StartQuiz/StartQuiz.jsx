import React from 'react'

import './StartQuiz.scss'
const StartQuiz = ({startQuiz, title, totalQuestions, owner}) => {
    return (
        <div className='start-quiz'>
            <div className="quiz__title">
                {title}
            </div>
            <div className="quiz__questions">
                {totalQuestions} Questions
            </div>
            <div className="quiz__owner">
                By: {owner.name}
            </div>
            <div className="quiz__start-btn">
                <div 
                    className="btn"
                    onClick={startQuiz}
                >
                    Start
                </div>
            </div>
        </div>
    )
}

export default StartQuiz
