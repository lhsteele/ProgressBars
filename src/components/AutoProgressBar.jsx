import React, { Component } from 'react'

export default class AutoProgressBar extends Component {
  render() {
    return (
      <div className="outer-container">
        <h1 className="auto-load-label">Auto Loading Progress Bar</h1>
        <div className="auto-progress-bar"/>
        <button className="auto-load-btn">Load</button>
      </div>
    )
  }
}
