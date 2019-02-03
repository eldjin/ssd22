import React, { Component } from 'react'
import Search from '../search/search'
import { NavLink } from 'react-router-dom'
// import HeaderOptions from './header-options'
import HeaderTopLinks from './top-links'
import { Label, Button } from 'semantic-ui-react'
// import HeaderLogo from './logo'

export default class Header extends Component {
  state = {
    showOptions: false,
  }

  toggleOptions = () => this.setState({ showOptions: !this.state.showOptions })

  render() {
    // let { showOptions } = this.state

    return (
      <div id="mastHeadContainer">
        <a class="logoContainer" href="/">
          <img src="/images/noorcare.png" title="noorcare" alt="Site Logo" />
        </a>

        <Search />
        <div>
          <Label.Group tag>
            <NavLink
              to="/charity"
              activeClassName="ha_active"
              className="nav-link"
            >
              <Button circular icon="bullhorn" />
            </NavLink>

            <Label as="a" image>
              <img src="https://react.semantic-ui.com/images/avatar/small/stevie.jpg" />
              Charity
            </Label>
            <NavLink
              to="/doctors"
              activeClassName="ha_active"
              className="nav-link"
            >
              <Button circular icon="doctor" />
            </NavLink>

            <Label as="a" image>
              <img src="https://react.semantic-ui.com/images/avatar/small/stevie.jpg" />
              Doctors
            </Label>
          </Label.Group>
        </div>

        <form class="form-inline navLoginContainer">
          <Button circular icon="shopping basket" />
          <Button circular icon="envelope open outline" />
          <Button circular icon="bell outline" />

          <HeaderTopLinks />
          {/* <div className="btn-group">
            <button
              className="btn btn-secondary btn-sm dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              profile
            </button>
            <div className="dropdown-menu">
              <HeaderOptions toggleOptions={this.toggleOptions} />
            </div>
          </div> */}
        </form>
      </div>
    )
  }
}
