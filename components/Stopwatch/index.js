// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    minutes: 0,
    seconds: 0,
    isTimerRunning: false,
    stop: false,
  }

  

  onClickedStart = () => {
    this.setState(prevState => ({
      isTimerRunning: !prevState.isTimerRunning,
    }))

  onClickedStop = () => {
    this.setState(prevState => ({
      stop: !prevState.stop,
    }))
  }

  onClickedReset = () => {
    this.setState({
      minutes: 0,
      seconds: 0,
    })
  }

  minutesTimer = () => {
    this.setState(prevState => ({
      minutes: prevState.minutes + 1,
    }))
  }

  secondsTimer = () => {
    const {seconds} = this.state
    if (seconds >= 59) {
      this.setState({
        seconds: 0,
      })
    } else {
      this.setState(prevState => ({
        seconds: prevState.seconds + 1,
      }))
    }
  }


  render() {
    const {minutes, seconds, isTimerRunning} = this.state
    const formattedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const formattedSeconds = seconds > 9 ? seconds : `0${seconds}`
    return (
      <div className="bg-container">
        <div className="stopwatch-card">
          <h1 className="heading">Stopwatch</h1>
          <div className="white-card">
            <div className="timer-img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png "
                alt="stopwatch"
                className="image"
              />
              <h1 className="timer-heading">Timer</h1>
            </div>
            <p className="timer-para">
              {formattedMinutes}:{formattedSeconds}
            </p>
            <div className="btns-sontainer">
              <button
                type="button"
                className="start-btn"
                onClick={this.onClickedStart}
                disabled={isTimerRunning}
              >
                Start
              </button>
              <button
                type="button"
                className="stop-btn"
                onClick={this.onClickedStop}
              >
                Stop
              </button>
              <button
                type="button"
                className="reset-btn"
                onClick={this.onClickedReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Stopwatch
