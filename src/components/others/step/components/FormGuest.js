import React, { Component } from 'react'
import { Container, Form, Image, Icon, Header } from 'semantic-ui-react'
const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]
export default class FormGuest extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })
  render() {
    // const { value } = this.state
    return (
      <Container>
        <div class="formBbody">
          <div>
            <Header as="h2" icon textAlign="center">
              <Icon name="settings" circular />
              <Header.Content>User Info</Header.Content>
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
              label="Bio"
              placeholder="Tell us more about you..."
            />

            <Form.Button>Submit</Form.Button>
            <Form.Button>Submit</Form.Button>
          </Form>
        </div>
      </Container>
    )
  }
}
