import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CgSpinnerTwo } from 'react-icons/all'

import Question from '../../components/Question/Question'
import StartQuiz from '../../components/StartQuiz/StartQuiz'
import EndQuiz from '../../components/EndQuiz/EndQuiz'

import {api, token} from '../../DB/api'

import './QuizPage.scss'
const QuizPage = () => {
    //@ts-ignore
    let {id} = useParams()
    const [quizData, setquizData] = useState({})
    const [error, setError] = useState(false)

    const [currStep, setCurrStep] = useState(1)
    const [currQuestion, setCurrQuestion] = useState(0)
    const [correctAnswers, setCorrectAnswers] = useState(0)

    const startHandler = () => setCurrStep(2)
    const restartHandler = () => {
        setCorrectAnswers(0)
        setCurrQuestion(0)
        setCurrStep(1)
    }

    useEffect(() => {
        api.get(`/quiz?api_token=${token}&id=${id}`).then(res => {
            if(res.data.errors.length == 0){
                setError(false)
                setquizData(res.data.data)
            }else{
                setError(true)
            }
        })
    }, [])

    return (
        <div className='quiz-page'>
            {
                quizData['title'] !== undefined ?
                <div className="container">
                    {
                        currStep == 1 && <StartQuiz 
                            startQuiz={startHandler} 
                            title={quizData['title']}
                            totalQuestions={quizData['questions_count'] !== undefined && quizData['questions_count']}
                            owner={quizData['user'] !== undefined && quizData['user']}
                        />
                    }
                    {
                        currStep == 2 && <Question 
                            question={quizData['questions'][currQuestion] !== undefined && quizData['questions'][currQuestion]}
                            totalQuestions={quizData['questions_count'] !== undefined && quizData['questions_count']}
                            currQuestion={currQuestion}
                            setCorrect={setCorrectAnswers}
                            correctAnswers={correctAnswers}
                            setNextQuestion={setCurrQuestion}
                            setNextStep={setCurrStep}
                        />
                    }
                    {
                        currStep == 3 && <EndQuiz 
                            correctAnswers={correctAnswers}
                            totalQuestions={quizData['questions'].length}
                            canRestart={quizData['options']['one_response']}
                            restart={restartHandler}
                        />
                    }
                </div> :
                <div className="spinner">
                    <span>
                        <CgSpinnerTwo />
                    </span>
                </div>
            }

        </div>
    )
}

export default QuizPage
