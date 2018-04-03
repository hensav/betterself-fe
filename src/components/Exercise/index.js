import React, { Component } from "react"
import { connect } from "react-redux"
import { startExercise, decrement, endTimer } from "./exerciseActions"
import _Exercise from "./Exercise"

class Exercise extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount(){
  }

  render() {
    return <_Exercise {...this.props}/>
  }
}

const mapStateToProps = (state, ownProps) => {
  return({
    data: state.exercise.data,
    loading: state.exercise.loading,
    time: state.exercise.time,
    timerText: state.exercise.timerText
  })
}

export default connect(mapStateToProps, { startExercise, decrement, endTimer })(Exercise)
