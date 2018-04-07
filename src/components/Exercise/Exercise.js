import React from "react"
import RoundButton from '../Buttons/RoundButon'
import beep1 from '../../media/beep1.wav'
import beep2 from '../../media/beep2.wav'

const ProgressBar = require('react-progressbar.js')
const Circle = ProgressBar.Circle;

require("./Exercise.scss")

const buttons = [
  {key: 10000, text: 10},
  {key: 20000, text: 20},
  {key: 30000, text: 30}
]
const exercises = [
  {key: 'plank', text: 'Plank', exercise: 'Plank'},
  {key: 'handStand', text: 'Hand stand', exercise: 'Hand stand'},
]

const toPercent = (total, portion) => (portion/total).toFixed(2)
const toSeconds = ms =>  typeof ms === 'string' ? ms : Math.floor((ms/1000) % 60)

class Exercise extends React.Component {
  componentDidMount () {
    this.beep1 = new Audio(beep1)
    this.beep2 = new Audio(beep2)
  }

  playSound(sound){
    if(sound === "beep1") this.beep1.play()
    if(sound === "beep2") this.beep2.play()
  }

  ripple(){

  }
  render () {
    const {
      data,
      loading,
      time,
      timerText,
      error,
      activeExercise,
      activeTime,
      started,
      soundPlaying,
      sound,
      prepTimer,
      changeExercise,
      changeTime,
      ripple
    } = this.props

    soundPlaying ? this.playSound(sound) : null
    console.log(ripple, "ripple")

    return (
      <div className={"TestComponent__wrapper"}>
        <div>
          {
            exercises.map(x=>
              <RoundButton
                text={x.text}
                key={x.key}
                callback={() => !started && changeExercise(x.exercise)}
                active={activeExercise === x.exercise}
                disabled={started}
              />)
          }
        </div>
        <div className={"Timer__wrapper"}>
          <div
            className={"TestComponent__timer"}
            onClick={() => !started  && prepTimer(activeExercise, activeTime)}
          >
            <Circle
              progress={toPercent(data.time, time)}
              text={error ? "No connection" : toSeconds(timerText)}
              options={{
                strokeWidth: 0.6,
                trailColor: error ? 'red' : '#f4f4f4',
                duration: 800,
                easing: 'easeOut',
                text:{
                  style: {
                    fontSize: '20px',
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    padding: 0,
                    margin: 0,
                    transform: {
                      prefix: true,
                      value: 'translate(-50%, -50%)'
                    }
                  }
                }
              }}
              initialAnimate={true}
              containerClassName={'.progressbar'}
              className={"TestComponent__timer"}
            />
          </div>
        </div>
        <div>
          {
            buttons.map(x=>
              <RoundButton
                text={x.text}
                key={x.key}
                callback={() => !started && changeTime(x.key)}
                active={activeTime === x.key}
                disabled={started}
              />)
          }
        </div>
      </div>
    )
  }
}

export default Exercise
