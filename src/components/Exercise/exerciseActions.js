export const START_EXERCISE = "START_EXERCISE"
export const EXERCISE_STARTED = "EXERCISE_STARTED"
export const EXERCISE_START_FAILED = "EXERCISE_START_FAILED"

export const DECREMENT_TIME = "DECREMENT_TIME"
export const DECREMENT_TIME_ENDED = "DECREMENT_TIME_ENDED"

import axios from "axios"

let counter = null

export const startExercise = (exercise, time) => {
  return (dispatch) => {
    dispatch({
      type: START_EXERCISE
    })
    axios.get("http://localhost:3000/api/exercise/new?exercise=" + exercise + '&time=' + time)
      .then(({data}) => {
        dispatch({
          type: EXERCISE_STARTED,
          payload: data
        })
        clearInterval(counter)
        counter = setInterval(() => {
          console.log('decr. timer')
          dispatch({
            type: DECREMENT_TIME
          })
        }, 1000)
      })
      .catch(err => {
        dispatch({
          type: EXERCISE_START_FAILED,
          payload: err
        })
      })
  }
}

export const decrement = () => {
  return (dispatch) => {
    setInterval(() => {
      dispatch ({
        type: "DECREMENT_TIME"
      })
    }, 1000)
  }
}

export const endTimer = () => {
  clearInterval(counter)
  return (dispatch) => {
    dispatch({
      type: DECREMENT_TIME_ENDED
    })
  }
}
