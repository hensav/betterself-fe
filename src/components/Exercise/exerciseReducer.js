import {
  DECREMENT_TIME,
  DECREMENT_TIME_ENDED,
  START_EXERCISE,
  EXERCISE_STARTED,
  EXERCISE_START_FAILED,
  CHANGE_EXERCISE, CHANGE_TIME
} from './exerciseActions'

export default function (state = {
  loading: false,
  data: "",
  time: 0,
  timerText: 'Plank',
  error: false,
  activeExercise: 'Plank',
  activeTime: 10000
}, action) {
  switch(action.type) {
    case DECREMENT_TIME : {
      return {
        ...state,
        time: state.time - 1000,
        timerText: state.time - 1000
      }
    }
    case DECREMENT_TIME_ENDED : {
      return {
        ...state,
        timerText: state.activeExercise
      }
    }
    case START_EXERCISE : {
      return {
        ...state,
        data: action.payload,
        loading: true,
        timerText: state.activeExercise
      }
    }
    case EXERCISE_STARTED : {
      return {
        ...state,
        data: action.payload,
        loading: false,
        time: action.payload.time,
      }
    }
    case EXERCISE_START_FAILED : {
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: true
      }
    }
    case CHANGE_EXERCISE : {
      return {
        ...state,
        activeExercise: action.payload
      }
    }
    case CHANGE_TIME : {
      return {
        ...state,
        activeTime: action.payload
      }
    }
    default : {
      return {
        ...state
      }
    }
  }
}
