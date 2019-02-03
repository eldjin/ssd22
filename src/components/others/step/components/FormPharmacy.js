import React, { Component } from 'react'
import {
  Container,
  Form,
  Image,
  Icon,
  Header,
  Dropdown,
} from 'semantic-ui-react'
const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]
const countryOptions = [
  { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
]
export default class FormPharmacy extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })
  render() {
    // const { value } = this.state
    return (
      <Container>
        <div class="formBbody">
          <div>
            <Header as="h2" icon textAlign="center">
              <Icon name="plus square" circular />
              <Header.Content>Pharmacy</Header.Content>
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
                label="Type Of Medical Drugs"
                options={options}
                placeholder="Type Of Medical Drugs"
              />
            </Form.Group>
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
