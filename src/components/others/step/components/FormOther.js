import React, { Component } from 'react'
import { Container, Form, Image, Icon, Header, Button } from 'semantic-ui-react'
const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]
export default class FormOther extends Component {
  state = {}
  // continue = e => {
  //   e.preventDefault()
  //   this.props.nextStep()
  // }
  continue = e => {
    console.log(this.props)
    e.preventDefault()
    this.props.nextStep()
  }

  back = e => {
    e.preventDefault()
    this.props.prevStep()
  }

  handleChange = (e, { value }) => this.setState({ value })
  render() {
    console.log(this.props)
    // const { value } = this.state
    return (
      <Container>
        <div class="formBbody">
          <div>
            <Header as="h2" icon textAlign="center">
              <Icon name="info" circular />
              <Header.Content>Other</Header.Content>
            </Header>
            <Image
              centered
              size="large"
              src="https://react.semantic-ui.com/images/wireframe/centered-paragraph.png"
            />
          </div>
          <Form>
            <Form.Group widths="equal">
              <Form.Input fluid label="Contry" placeholder="contry" />
              <Form.Input
                fluid
                label="Phone Number"
                placeholder="Phone Number"
              />
              <Form.Select
                fluid
                label="Gender"
                options={options}
                placeholder="Gender"
              />
            </Form.Group>
            <Form.TextArea
              label="Other"
              placeholder="Tell us more about you Activity..."
            />
            <Form.TextArea
              label="Bio"
              placeholder="Tell us more about you..."
            />

            <div class="formBb">
              <Button
                animated
                onClick={e => {
                  e.preventDefault()
                  this.props.nextStep()
                }}
              >
                <Button.Content visible>Continue</Button.Content>
                <Button.Content hidden>
                  <Icon name="arrow right" />
                </Button.Content>
              </Button>
              <Button animated onClick={this.back}>
                <Button.Content visible>Back</Button.Content>
                <Button.Content hidden>
                  <Icon name="arrow left" />
                </Button.Content>
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    )
  }
}
