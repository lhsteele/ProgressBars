import React, { Component } from 'react'
import { PALM } from '../themes'

export default class MenuProgressBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initialFill: 100,
      activeStep: 0
    }
  };

  incrementStep = () => {
    let currentActiveStep = this.state.activeStep;
    if (currentActiveStep < 5) {
      currentActiveStep += 1
    } 
    this.setState({ activeStep: currentActiveStep });
  };

  renderList = () => {
    const list = [];
    for (let i = 0; i < 5; i++) {
        list.push(
          <li
            key={i}
            className="list-item"
            onClick={this.incrementStep}
            style={{ color: this.state.activeStep === i ? '#a9a9a9' : '#d3d3d3'}}
          >
            Step {i + 1}
          </li>
        )
    }
    return list;
  }


  render() {
    return (
      <div className="outer-container">
        <h1 className="load-label">Menu Progress Bar</h1>
        <div className="progress-bar" style={{ borderColor: PALM.color }}>
          <div className="bar" style={{ width: this.state.initialFill, background: PALM.color }} />
        </div>
        <ul className="menu-list">
          {this.renderList()}
        </ul>
      </div>
    )
  }
}
