import React, { Component } from 'react'

export default class ManualProgressBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initialFill: 50
    };
    this.increment = undefined;
  };

  incrementBar = () => {
    let currentFill = this.state.initialFill
    if (currentFill <= 500) {
      currentFill += 50;
    }
    this.setState({ initialFill: currentFill })
  };

  resetBar = () => {
    this.setState({ initialFill: 50 })
  };

  render() {
    return (
      <div className="outer-container">
        <h1 className="load-label">Manual Progress Bar</h1>
        <div className="progress-bar">
          <div className="bar" style={{ width: this.state.initialFill }} />
        </div>
        <button
          className="load-btn"
          onClick={this.incrementBar}>
          Go
        </button>
        <button
          className="reset-button"
          onClick={this.resetBar}>
          Reset
        </button>
      </div>
    )
  }
}
