import React, { Component } from 'react'
import Layout from './hoc/Layout/Layout'
import {Route, Switch} from 'react-router-dom'
import Quiz from './containers/container/Quiz/Quiz'
import Auth from './containers/container/Auth/Auth'
import QuizCreator from './containers/container/QuizCreator/QuizCreator'
import QuizList from './containers/container/QuizList/QuizList'


class App extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path = '/auth' component = {Auth} />
                    <Route path = '/quiz-creator' component= {QuizCreator} />
                    <Route path = '/quiz/:id' component = {Quiz} />
                    <Route path = '/' component = {QuizList} />
                </Switch>
            </Layout>
        );
    }
}

export default App