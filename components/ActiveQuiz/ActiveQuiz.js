import React from 'react'
import classes from './ActiveQuiz.module.css'
import AnswersList from "./AnswersLisr/AnswersList"

const ActiveQuiz = props => (
    <div className={classes.ActiveQuiz}>
        <p className={classes.Question}>
            <span>
                <strong>2.</strong>&nbsp;
                {props.question}
            </span>

            <small>4 из 12</small>
        </p>
        <AnswersList
        answers = {props.answers} />
    </div>
)

export default ActiveQuiz