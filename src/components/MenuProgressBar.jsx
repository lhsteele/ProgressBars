import React, { Component } from 'react'
import { PALM } from '../themes'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'

export default class MenuProgressBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fill: 0,
      activeStep: 0,
      completedSteps: []
    }
  };

  addToCompletedSteps = activeStep => {
    const completed = this.state.completedSteps;
    completed.push(activeStep)
    this.setState({ completedSteps: completed })
  };

  incrementBar = () => {
    let currentFill = this.state.fill;
    
    if (currentFill < 500) {
      currentFill += 100
    }
    this.setState({ fill: currentFill })
  };

  incrementStep = () => {
    let currentActiveStep = this.state.activeStep;
    this.addToCompletedSteps(currentActiveStep)

    if (currentActiveStep < 5) {
      currentActiveStep += 1
    } 
    this.incrementBar()
    this.setState({ activeStep: currentActiveStep });
  };

  isStepComplete = step => {
    return this.state.completedSteps.includes(step)
  };

  renderList = () => {
    const list = [];
    for (let i = 0; i < 5; i++) {
      const currentActive = this.state.activeStep
        list.push(
          <li
            key={i}
            className="list-item"
            onClick={this.incrementStep}
            style={{ color: currentActive === i ? '#545454' : '#d3d3d3'}}
          >            
            Step {i + 1}
            {this.isStepComplete(i) ? <CheckCircleOutlineIcon style={{ color: '#4caf50' }} /> : <CheckCircleOutlineIcon style={{ color: '#d3d3d3' }} />}
          </li>
        )
    }
    return list;
  }

  resetBar = () => {
    this.setState({ fill: 0, activeStep: 0, completedSteps: [] })
  };

  render() {
    return (
      <div className="outer-container">
        <h1 className="load-label">Step Progress Bar</h1>
        <div className="progress-bar" style={{ borderColor: PALM.color }}>
          <div className="bar" style={{ width: this.state.fill, background: PALM.color }} />
        </div>
        <ul className="menu-list">
          {this.renderList()}
          <button
            className="reset-button"
            style={{ backgroundColor: PALM.color, border: PALM.color }}
            onClick={this.resetBar}
          >
            Reset
          </button>
        </ul>
      </div>
    )
  }
}
