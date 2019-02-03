import React, { Component } from 'react'
import { Button, Card, Image, Icon } from 'semantic-ui-react'

export default class DocList extends Component {
  render() {
    return (
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Image
              floated="right"
              size="tiny"
              circular
              src="https://hcplive.s3.amazonaws.com/v1_media/_image/happydoctor.jpg"
            />
            <Card.Header>Steve Sanders</Card.Header>
            <Card.Meta>Friends of Elliot</Card.Meta>
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui three buttons">
              <Button animated>
                <Button.Content visible>Add To list</Button.Content>
                <Button.Content hidden>
                  <Icon name="arrow right" />
                </Button.Content>
              </Button>
              <Button animated="vertical">
                <Button.Content hidden>Show In Map</Button.Content>
                <Button.Content visible>
                  <Icon name="map" />
                </Button.Content>
              </Button>
              <Button animated="fade">
                <Button.Content visible>Visit Profile</Button.Content>
                <Button.Content hidden>next</Button.Content>
              </Button>
            </div>
          </Card.Content>
        </Card>
        <Card fluid>
          <Card.Content>
            <Image
              floated="right"
              size="tiny"
              circular
              src="https://hcplive.s3.amazonaws.com/v1_media/_image/happydoctor.jpg"
            />
            <Card.Header>Steve Sanders</Card.Header>
            <Card.Meta>Friends of Elliot</Card.Meta>
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui three buttons">
              <Button animated>
                <Button.Content visible>Add To list</Button.Content>
                <Button.Content hidden>
                  <Icon name="arrow right" />
                </Button.Content>
              </Button>
              <Button animated="vertical">
                <Button.Content hidden>Show In Map</Button.Content>
                <Button.Content visible>
                  <Icon name="map" />
                </Button.Content>
              </Button>
              <Button animated="fade">
                <Button.Content visible>Visit Profile</Button.Content>
                <Button.Content hidden>next</Button.Content>
              </Button>
            </div>
          </Card.Content>
        </Card>
        <Card fluid>
          <Card.Content>
            <Image
              floated="right"
              size="tiny"
              circular
              src="https://hcplive.s3.amazonaws.com/v1_media/_image/happydoctor.jpg"
            />
            <Card.Header>Steve Sanders</Card.Header>
            <Card.Meta>Friends of Elliot</Card.Meta>
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui three buttons">
              <Button animated>
                <Button.Content visible>Add To list</Button.Content>
                <Button.Content hidden>
                  <Icon name="arrow right" />
                </Button.Content>
              </Button>
              <Button animated="vertical">
                <Button.Content hidden>Show In Map</Button.Content>
                <Button.Content visible>
                  <Icon name="map" />
                </Button.Content>
              </Button>
              <Button animated="fade">
                <Button.Content visible>Visit Profile</Button.Content>
                <Button.Content hidden>next</Button.Content>
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    )
  }
}
