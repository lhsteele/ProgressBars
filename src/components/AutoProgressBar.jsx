import React, { Component } from 'react'

export default class AutoProgressBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initialFill: 50
    };
    this.interval = undefined;
  };

  incrementBar = () => {
    let currentFill = this.state.initialFill
    if (currentFill <= 500) {
      currentFill += 50;
    }
    this.setState({ initialFill: currentFill })
  };

  autoLoad = () => {
    this.interval = setInterval(this.incrementBar.bind(this), 1000);
  };

  resetBar = () => {
    if (this.state.initialFill >= 500) {
      clearInterval(this.interval)
    }
    this.setState({ initialFill: 50 })
  };

  render() {
    return (
      <div className="outer-container">
        <h1 className="auto-load-label">Auto Loading Progress Bar</h1>
        <div className="auto-progress-bar">
          <div className="progress-bar" style={{ width: this.state.initialFill }}/>
        </div>
        <button 
          className="auto-load-btn"
          onClick={this.autoLoad}>
          Load
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
