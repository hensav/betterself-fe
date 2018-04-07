export const START_EXERCISE = "START_EXERCISE"
export const EXERCISE_STARTED = "EXERCISE_STARTED"
export const EXERCISE_START_FAILED = "EXERCISE_START_FAILED"
export const EXERCISE_ENDED = "EXERCISE_ENDED"

export const DECREMENT_TIME_STARTED = "DECREMENT_TIME_STARTED"
export const DECREMENT_TIME = "DECREMENT_TIME"
export const DECREMENT_TIME_ENDED = "DECREMENT_TIME_ENDED"

export const CHANGE_EXERCISE = "CHANGE_EXERCISE"
export const CHANGE_TIME = "CHANGE_TIME"

export const PREP_TIME_STARTED = "PREP_TIME"
export const DECREMENT_PREP_TIME = "DECREMENT_PREP_TIME"
export const PREP_TIME_ENDED = "PREP_TIME_ENDED"

export const REMOVE_RIPPLE = "REMOVE_RIPPLE"
export const ADD_RIPPLE = "ADD_RIPPLE"

import axios from "axios"

export const startExercise = (exercise, time) => {
  return (dispatch) => {
    dispatch({
      type: START_EXERCISE,
      payload: exercise
    })
    axios.get("http://localhost:3000/api/exercise/new?exercise=" + exercise + '&time=' + time)
      .then(({data}) => {
        dispatch({
          type: EXERCISE_STARTED,
          payload: data
        })
        exerciseTimer(time)(dispatch)
      })
      .catch(err => {
        console.log("no api connection")
        dispatch({
          type: EXERCISE_START_FAILED,
          payload: err
        })
      })
  }
}

let exerciseCounter = null
export const exerciseTimer = (time) => {
  return (dispatch) => {
    dispatch({
      type: DECREMENT_TIME_STARTED
    })
    exerciseCounter = setInterval(() => {
      console.log("DECREMENT_TIME")
      dispatch ({
        type: "DECREMENT_TIME"
      })
    }, 1000)
    setTimeout(()=>{
      clearInterval(exerciseCounter)
      dispatch({
        type: DECREMENT_TIME_ENDED
      })
      dispatch({
        type: EXERCISE_ENDED
      })
    }, time)
  }
}
 let prepCounter = null
export const prepTimer = (exercise, time) => {
  return (dispatch) => {
    dispatch({
      type: PREP_TIME_STARTED,
    })
    prepCounter = setInterval(() => {
      console.log("DECREMENT_PREP_TIME")
      dispatch ({
        type: DECREMENT_PREP_TIME
      })
    }, 1000)
    setTimeout(()=>{
      clearInterval(prepCounter)
      dispatch({
        type: PREP_TIME_ENDED
      })
      console.log(PREP_TIME_ENDED)
      startExercise(exercise, time)(dispatch)
    }, 5000)
  }
}

export const changeExercise = (exercise) => {
  console.log("changeExercise triggered", exercise)
  clearInterval(prepCounter)
  clearInterval(exerciseCounter)
  return {
    type: CHANGE_EXERCISE,
    payload: exercise
  }
}

export const changeTime = (time) => {
  console.log("time change triggered", time)
  clearInterval(prepCounter)
  clearInterval(exerciseCounter)
  return {
    type: CHANGE_TIME,
    payload: time
  }
}
