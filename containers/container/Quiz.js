import React, {Component} from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz"

class Quiz extends Component {
    state = {
        quiz: [
            {
                question: 'Какого цвета небо?',
                answers: [
                    {text: 'Черный', id: 1},
                    {text: 'Зеленый', id: 2},
                    {text: 'Синий', id: 3},
                    {text: 'Красный', id: 4}
                ]
            }
        ]
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>
                    <ActiveQuiz
                        answers = {this.state.quiz[0].answers}
                        question = {this.state.quiz[0].question}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz