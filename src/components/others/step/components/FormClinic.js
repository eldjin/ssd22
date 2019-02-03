import React, { Component } from 'react'
import {
  Container,
  Form,
  Image,
  Icon,
  Header,
  Dropdown,
} from 'semantic-ui-react'

const countryOptions = [
  { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
]
export default class FormClinic extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })
  render() {
    // const { value } = this.state
    return (
      <Container>
        <div class="formBbody">
          <div>
            <Header as="h2" icon textAlign="center">
              <Icon name="hospital outline" circular />
              <Header.Content>Clinic</Header.Content>
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
            </Form.Group>
            <div class="formBbodyS">
              <Dropdown
                placeholder="Select Spetialty"
                fluid
                multiple
                search
                selection
                options={countryOptions}
              />
            </div>
            <Form.Group widths="equal">
              <Dropdown
                placeholder="Select Contry"
                fluid
                multiple
                search
                selection
                options={countryOptions}
              />

              <Dropdown
                placeholder="Select multy area or location"
                fluid
                multiple
                search
                selection
                options={countryOptions}
              />
            </Form.Group>

            <Form.TextArea
              label="Bio"
              placeholder="Tell us more about your Brund Or Activity..."
            />

            <Form.Button>Submit</Form.Button>
            <Form.Button>Submit</Form.Button>
          </Form>
        </div>
      </Container>
    )
  }
}
