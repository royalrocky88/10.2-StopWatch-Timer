// Write your code here
import {Component} from 'react'

import './index.css'

class StopWatch extends Component {
  state = {isTimeRunning: false, isSeconds: 0}

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  onTimer = () => {
    const {isSeconds} = this.state

    const minutes = Math.floor(isSeconds / 60)
    const seconds = Math.floor(isSeconds % 60)

    const stringMinute = minutes < 10 ? `0${minutes}` : minutes
    const stringSecond = seconds < 10 ? `0${seconds}` : seconds

    return `${stringMinute}:${stringSecond}`
  }

  onStart = () => {
    this.timeInterval = setInterval(this.updateTimer, 1000)
    this.setState({isTimeRunning: true})
  }

  updateTimer = () => {
    this.setState(oldValue => ({
      isSeconds: oldValue.isSeconds + 1,
    }))
  }

  onStop = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimeRunning: false})
  }

  onReset = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimeRunning: false, isSeconds: 0})
  }

  render() {
    const {isTimeRunning} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading-card">Stopwatch</h1>
          <div className="box-card">
            <div className="timer-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="time-img"
              />
              <p className="timer-head-card">Timer</p>
            </div>
            <h1 className="timer-card">{this.onTimer()}</h1>
            <div className="btn-card">
              <button
                type="button"
                className="start-btn"
                onClick={this.onStart}
                disabled={isTimeRunning}
              >
                Start
              </button>
              <button type="button" className="stop-btn" onClick={this.onStop}>
                Stop
              </button>
              <button
                type="button"
                className="reset-btn"
                onClick={this.onReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StopWatch
