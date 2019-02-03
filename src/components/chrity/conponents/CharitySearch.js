import React, { Component } from 'react'
import { Card, Input, Button, Embed } from 'semantic-ui-react'
export default class CharitySearch extends Component {
  render() {
    return (
      <Card.Group>
        <Card>
          <Card.Content>
            <Card.Header>Advanced Search</Card.Header>

            <Card.Description>
              <div className="sepratorInput" />
              <Input iconPosition="left" placeholder="titlle..." fluid />
              <div className="sepratorInput" />
              <Input
                icon="map"
                iconPosition="left"
                placeholder="Select Contry..."
                fluid
              />
              <div className="sepratorInput" />
              <Input
                icon="location arrow"
                iconPosition="left"
                placeholder="Select City..."
                fluid
              />
              <div className="sepratorInput" />

              <Button basic>Search</Button>
            </Card.Description>
          </Card.Content>
        </Card>

        <Card>
          <Embed
            icon="right circle map"
            placeholder="https://cnet2.cbsistatic.com/img/H_zPLL8-QTZOLxJvgHQ1Jkz0EgY=/830x467/2013/07/10/f0bcef02-67c2-11e3-a665-14feb5ca9861/maps_routemap.png"
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25354.94046166276!2d-121.97574860000002!3d37.40478635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fc9c6db85b8ab%3A0x72af1434e8036575!2sCalifornia&#39;s+Great+America!5e0!3m2!1sen!2sus!4v1509633245458"
          />
        </Card>

        <Card>
          <Card.Content
            header="Warrning"
            description="Clic Location Button to Show In map"
          />
        </Card>
      </Card.Group>
    )
  }
}
