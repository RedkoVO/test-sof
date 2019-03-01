import axios from 'axios'
import qs from 'qs'

import { GET_QUESTIONS, POST_ANSWER } from './types'
import gC from '../../constants'

/* GET QUESTIONS */
export const getQuestions = () => dispatch =>
  axios({
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    url: `${gC.API_URL}/req/answers_list`
  })
    .then(response => {
      dispatch(createGetQuestionsSuccess(response.data))

      return response.data
    })
    .catch(error => {
      console.log('GET_QUESTIONS error', error)
    })

export const createGetQuestionsSuccess = data => {
  return {
    type: GET_QUESTIONS,
    payload: {
      answersList: data.answers_list,
      success: data.success
    }
  }
}
/* ********** */

/* POST ANSWER */
export const postAnswer = data => dispatch =>
  axios({
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify(data),
    url: `${gC.API_URL}/req/answer_post`
  })
    .then(response => {
      dispatch(createPostAnswerSuccess(response.data))

      return response.data
    })
    .catch(error => {
      console.log('POST_ANSWER error', error)
    })

export const createPostAnswerSuccess = data => {
  return {
    type: POST_ANSWER,
    payload: {
      success: data.success
    }
  }
}
/* ********** */