import React, { Component } from 'react'
import FormUserDetails from './components/FormUserDetails'
import FormConfigDetails from './components/FormConfigDetails'
import StepExampleGroup from './components/Step'
class FormStep extends Component {
  constructor() {
    super()
    this.state = {
      step: 1,
      type: '',
      contry: '',
      gender: '',
    }
  }

  // Proceed to next step
  nextStep = val => {
    const { step } = this.state
    this.setState({
      step: step + 1,
    })
    this.setState({
      type: val,
    })
  }
  nextSteps = () => {
    const { step } = this.state
    this.setState({
      step: step + 1,
    })
  }
  // Go back to prev step
  prevStep = () => {
    const { step } = this.state
    this.setState({
      step: step - 1,
    })
  }
  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value })
  }

  render() {
    const { step } = this.state
    const { type, contry, gender } = this.state
    const values = { type, contry, gender }
    switch (step) {
      case 1:
        return (
          <div>
            <StepExampleGroup />
            <FormUserDetails
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          </div>
        )
      case 2:
        return (
          <div>
            <StepExampleGroup />
            <FormConfigDetails
              type={this.state.type}
              nextStep={this.nextSteps}
              prevStep={this.prevStep}
            />
          </div>
        )
      case 3:
        return <h1>Confirm</h1>
      case 4:
        return <h1>Succes and noorcare code</h1>
    }
  }
}

export default FormStep
