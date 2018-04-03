import {
  DECREMENT_TIME,
  DECREMENT_TIME_ENDED,
  START_EXERCISE,
  EXERCISE_STARTED,
  EXERCISE_START_FAILED
} from "./exerciseActions"

export default function (state = {
  loading: false,
  data: "",
  time: 0,
  timerText: 'Plank'
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
        timerText: 'Plank'
      }
    }
    case START_EXERCISE : {
      return {
        ...state,
        data: action.payload,
        loading: true,
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
        loading: false
      }
    }
    default : {
      return {
        ...state
      }
    }
  }
}
