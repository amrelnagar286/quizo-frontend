import React, { useEffect, useState } from 'react'

import './Question.scss'

const Question = ({question, totalQuestions, currQuestion, setCorrect, correctAnswers, setNextQuestion, setNextStep}) => {
    const [currAnswer, setCurrAnswer] = useState(0)

    const nextQuestionHandler = () => {
        if(currAnswer !== 0){
            if(question.answers[currAnswer - 1].correct === true){
                setCorrect(correctAnswers + 1)
            }

            if(currQuestion + 1 < totalQuestions){
                setCurrAnswer(0)
                setNextQuestion(currQuestion + 1)
            }else{
                setNextStep(3)
            }
        }
    }
    return (
        <div className='quiz-container'>
            <div className="question">
                <div className="question__number">
                    Question {currQuestion+1} / {totalQuestions}
                </div>
                <div className="question__text">
                    {question.text}
                </div>
            </div>

            <div className="answers">
                {
                    question.answers.map((answer, idx) => {
                        return (
                            <div 
                                className={`answer ${currAnswer - 1 == idx && 'active'}`}
                                onClick={e => setCurrAnswer(idx+1)}
                            >
                                <div className="answer__text">
                                    {answer.text}
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className="next__question">
                <div 
                    className='next-btn'
                    onClick={nextQuestionHandler}
                >
                    {
                        currQuestion + 1 < totalQuestions ?
                        'Next' :
                        'Finish'
                    }
                </div>
            </div>
        </div>
    )
}

export default Question
