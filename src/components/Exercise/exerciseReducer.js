import {
  DECREMENT_TIME,
  DECREMENT_TIME_ENDED,
  START_EXERCISE,
  EXERCISE_STARTED,
  EXERCISE_START_FAILED,
  CHANGE_EXERCISE,
  CHANGE_TIME,
  PREP_TIME_ENDED,
  PREP_TIME_STARTED,
  DECREMENT_PREP_TIME,
  EXERCISE_ENDED,
  ADD_RIPPLE,
  REMOVE_RIPPLE
} from './exerciseActions'

export default function (state = {
  loading: false,
  started: false,
  data: "",
  time: 0,
  timerText: 'Plank',
  error: false,
  activeExercise: 'Plank',
  activeTime: 10000,
  prepTime: 5000,
  soundPlaying: false,
  sound: "beep1",
  ripple: false
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
        timerText: state.activeExercise,
        started: false,
        prepTime: 5000,
        soundPlaying: true,
        sound: "beep2"
      }
    }
    case EXERCISE_ENDED : {
      return {
        ...state,
        soundPlaying: false,
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
        started: true,
        data: action.payload,
        loading: false,
        time: action.payload.time,
      }
    }
    case PREP_TIME_STARTED : {
      return {
        ...state,
        started: true
      }
    }
    case DECREMENT_PREP_TIME : {
      return {
        ...state,
        prepTime: state.prepTime - 1000,
        timerText: state.prepTime - 1000,
        soundPlaying: true,
        sound: "beep1"
      }
    }
    case PREP_TIME_ENDED : {
      return {
        ...state,
        prepTime: 5000,
        soundPlaying: false
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
        activeExercise: action.payload,
        prepTime: 5000

      }
    }
    case CHANGE_TIME : {
      return {
        ...state,
        activeTime: action.payload,
        prepTime: 5000

      }
    }
    default : {
      return {
        ...state
      }
    }
  }
}
