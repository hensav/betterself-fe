import React from "react"
const ProgressBar = require('react-progressbar.js')
const Circle = ProgressBar.Circle;

require("./Exercise.scss")

const options = {
  strokeWidth: 1,
  trailColor: '#f4f4f4',
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
}

const toPercent = (total, portion) => (portion/total).toFixed(2)
const toSeconds = ms =>  typeof ms === 'string' ? ms : Math.floor((ms/1000) % 60)

class Exercise extends React.Component {
  componentDidMount () {
  }

  render () {
    const {
      data,
      loading,
      time,
      timerText
    } = this.props

    console.log(this.props)
    if(this.props.time === 0) this.props.endTimer()

    return (
      <div className={"TestComponent__wrapper"}>
        {
          !loading &&
          <div
            className={"TestComponent__timer"}
            onClick={() => this.props.startExercise("plank", 10000)}
          >
            <Circle
              progress={toPercent(data.time, time)}
              text={toSeconds(timerText)}
              options={options}
              initialAnimate={true}
              containerClassName={'.progressbar'}
              className={"TestComponent__timer"}
            />
          </div>
        }
      </div>
    )
  }
}

export default Exercise
