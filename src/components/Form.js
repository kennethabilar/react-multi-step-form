import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'
import Confirm from './Confirm'
import Success from './Success'

class Form extends Component {
    state = {
        step: 1,
        username: '',
        email: '',
        firstname: '',
        lastname: ''
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({ step: step + 1 })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({ step: step - 1 })
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value })
    }

    render() {
        const { username, email, firstname, lastname } = this.state
        const values = { username: username, email: email, firstname: firstname, lastname: lastname }
        const { step } = this.state

        switch(step) {
            case 1:
                return (
                    <FormUserDetails
                        values={values}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                    />
                )
            case 2:
                return (
                    <FormPersonalDetails
                        values={values}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                    />
                )
            case 3:
                return (
                    <Confirm
                        values={values}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                    />
                )
            case 4:
                return (
                    <Success />
                )
            default:
                return (<h2>Page does not exist</h2>)
        }
    }
}

export default Form
