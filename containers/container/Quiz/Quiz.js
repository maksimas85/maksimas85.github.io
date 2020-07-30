import React, {Component} from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../../components/FinishedQuiz/FinishedQuiz'

class Quiz extends Component {
    state = {
        results: {}, // {[id]: 'success' or 'error'}
        isFinished: false,
        activeQuestion: 0,
        answerState: null, //to highlighting the answer {[id]: 'success' or 'error'}
        quiz: [
            {
                question: 'С помощью чего можно проверить, принадлежит ли объект классу?',
                rightAnswerId: 3,
                id: 1,
                answers: [
                    {text: 'Функции isinstance', id: 1},
                    {text: 'Метода isinstance', id: 2},
                    {text: 'Оператора instanceof', id: 3},
                    {text: 'Метода instanceof', id: 4}
                ]
            },
            {
                question: 'Атрибут alt у img...',
                rightAnswerId: 3,
                id: 2,
                answers: [
                    {text: 'Не обязателен', id: 1},
                    {text: 'Обязателен, с осмысленным значением', id: 2},
                    {text: 'Обязателен, но может быть без значения', id: 3},
                    {text: 'Такого атрибута не существует', id: 4}
                ]
            }
        ]
    }



    //answerId = (props.answer.id) from AnswerItem
    onAnswerClickHandler = answerId => {
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0] //Object.keys - возвращает массив из собственных перечисляемых свойств переданного объекта
            if (this.state.answerState[key] === 'success') {
                return
        //возвращаем return, что бы не заходить в данную функцию и не выполнять перемещение по вопросам
            }
        }

        const question = this.state.quiz[this.state.activeQuestion]
        const results = this.state.results

        if (question.rightAnswerId === answerId) {
            if (!results[question.id]) {               // если ответ выбран правильно, т.е results[answerId] пустой
                results[question.id] = 'success'       // присваиваем success
            }

            this.setState({
                answerState: {[answerId]: 'success'},
                results
            })

            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    this.setState({
                        isFinished: true
                    })
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null //clear highlighting the answer
                    })
                }
                window.clearTimeout(timeout)
            }, 1000)
        } else {
            results[question.id] = 'error'
            this.setState({
                answerState: {[answerId]: 'error'},
                results
            })
        }
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    RetryHandler = () => {
        this.setState({
            activeQuestion: 0,
            answerState: null,
            isFinished: false,
            results: {}
        })
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>

                    {
                        this.state.isFinished
                            ? <FinishedQuiz
                                results = {this.state.results}
                                quiz = {this.state.quiz}
                                quizLength={this.state.quiz.length}
                                onRetry = {this.RetryHandler}
                              />
                            : <ActiveQuiz
                                answers={this.state.quiz[this.state.activeQuestion].answers}
                                question={this.state.quiz[this.state.activeQuestion].question}
                                onAnswerClick={this.onAnswerClickHandler}
                                quizLength={this.state.quiz.length}
                                answerNumber={this.state.activeQuestion + 1}
                                state={this.state.answerState}
                            />
                    }
                </div>
            </div>
        )
    }
}

export default Quiz