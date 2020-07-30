import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-3bf4e.firebaseio.com/'
})