import React, { Component } from 'react'
import {
  Icon,
  Container,
  Form,
  Button,
  Grid,
  Card,
  Image,
  Radio,
} from 'semantic-ui-react'

export default class FormUserDetails extends Component {
  state = {}
  continue = e => {
    e.preventDefault()
    this.props.nextStep(this.state.value)
  }

  thandleChange = (e, { value }) => {
    this.setState({ value })
  }

  render() {
    return (
      <Container>
        <div class="formBbody">
          <Form>
            <Form.Field>
              Please Select Acout Type: <b>{this.state.value}</b>
            </Form.Field>
            <Grid textAlign="center" columns={5}>
              <Grid.Row>
                <Grid.Column>
                  <Card>
                    <Card.Content>
                      <Card.Header>User Guest</Card.Header>
                      <Image
                        src="https://www.chaarat.com/wp-content/uploads/2017/08/placeholder-user.png"
                        avatar
                      />

                      <Card.Description>
                        Daniel is a comedian living in Nashville.
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <Form.Field>
                        <Radio
                          name="type"
                          value="guest"
                          checked={this.state.value === 'guest'}
                          onChange={this.thandleChange}
                        />
                      </Form.Field>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column>
                  <Card>
                    <Card.Content>
                      <Card.Header>pharmacy</Card.Header>
                      <Image
                        src="https://b.kisscc0.com/20180813/kqe/kisscc0-bowl-of-hygieia-pharmacy-pharmacist-staff-of-herme-caducee-5b7150e581fdc3.1174499015341529335325.png"
                        avatar
                      />

                      <Card.Description>
                        Daniel is a comedian living in Nashville.
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <Form.Field>
                        <Radio
                          name="radioGroup"
                          value="pharmacy"
                          checked={this.state.value === 'pharmacy'}
                          onChange={this.thandleChange}
                        />
                      </Form.Field>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column>
                  <Card>
                    <Card.Content>
                      <Card.Header>Clinic</Card.Header>
                      <Image
                        src="https://previews.123rf.com/images/avdeev3000/avdeev30001506/avdeev3000150600317/41697722-hospital-building-clinic-icon-vector-image-for-healthcare-and-medical-.jpg"
                        avatar
                      />

                      <Card.Description>
                        Daniel is a comedian living in Nashville.
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <Form.Field>
                        <Radio
                          name="radioGroup"
                          value="clinic"
                          checked={this.state.value === 'clinic'}
                          onChange={this.thandleChange}
                        />
                      </Form.Field>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column>
                  <Card>
                    <Card.Content>
                      <Card.Header>Doctor</Card.Header>
                      <Image
                        src="https://previews.123rf.com/images/tribalium123/tribalium1231209/tribalium123120900003/15039352-medical-doctor-symbol-medical-symbol-caduceus-snake-with-stick-medicine-emblem-blue-medical-sign-pha.jpg"
                        avatar
                      />
                      <Card.Description>
                        Daniel is a comedian living in Nashville.
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <Form.Field>
                        <Radio
                          name="radioGroup"
                          value="doctor"
                          checked={this.state.value === 'doctor'}
                          onChange={this.thandleChange}
                        />
                      </Form.Field>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column>
                  <Card>
                    <Card.Content>
                      <Card.Header>Other</Card.Header>
                      <Image
                        src="http://www.decalsplanet.com/img_b/vinyl-decal-sticker-8843.jpg"
                        avatar
                      />
                      <Card.Description>
                        Daniel is a comedian living in Nashville.
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <Form.Field>
                        <Radio
                          name="radioGroup"
                          value="other"
                          checked={this.state.value === 'other'}
                          onChange={this.thandleChange}
                        />
                      </Form.Field>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Form>
        </div>

        <div class="formBb">
          <Button animated onClick={this.continue}>
            <Button.Content visible>Next</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content>
          </Button>
        </div>
      </Container>
    )
  }
}
