import React, { Component } from 'react'
import { FLAMINGO } from '../themes'

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
        <h1 className="load-label">Auto Loading Progress Bar</h1>
        <div className="progress-bar" style={{ borderColor: FLAMINGO.color }}>
          <div className="bar" style={{ width: this.state.initialFill, background: FLAMINGO.color }}/>
        </div>
        <button 
          className="load-btn"
          style={{ backgroundColor: FLAMINGO.color, border: FLAMINGO.color }}
          onClick={this.autoLoad}>
          Load
        </button>
        <button
          className="reset-button"
          style={{ backgroundColor: FLAMINGO.color, border: FLAMINGO.color }}
          onClick={this.resetBar}>
          Reset
        </button>
      </div>
    )
  }
}
