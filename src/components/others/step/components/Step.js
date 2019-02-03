import React from 'react'
import { Icon, Step, Container } from 'semantic-ui-react'

const StepExampleGroup = () => (
  <Container>
    <Step.Group>
      <Step>
        <Icon active name="user" />
        <Step.Content>
          <Step.Title>Acount</Step.Title>
          <Step.Description>Choose your Acount options</Step.Description>
        </Step.Content>
      </Step>

      <Step>
        <Icon name="info" />
        <Step.Content>
          <Step.Title>Config</Step.Title>
          <Step.Description>step config acount</Step.Description>
        </Step.Content>
      </Step>

      <Step disabled>
        <Icon name="info" />
        <Step.Content>
          <Step.Title>Confirm and create noorcare code</Step.Title>
        </Step.Content>
      </Step>
      <Step disabled>
        <Icon name="info" />
        <Step.Content>
          <Step.Title>Confirm and create noorcare code</Step.Title>
        </Step.Content>
      </Step>
    </Step.Group>
  </Container>
)

export default StepExampleGroup
