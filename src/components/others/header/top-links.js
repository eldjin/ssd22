import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { uData } from '../../../utils/utils'
import { Icon, Label, Menu, Button, Dropdown, Image } from 'semantic-ui-react'
const options = [
  { key: 'user', text: 'Account', icon: 'user' },
  { key: 'settings', text: 'Settings', icon: 'settings' },
  { key: 'sign-out', text: 'Sign Out', icon: 'sign out' },
]
const trigger = (
  <span>
    <Image
      avatar
      src="https://react.semantic-ui.com/images/avatar/small/stevie.jpg"
    />{' '}
    user Name
  </span>
)

const HeaderTopLinks = () => {
  let id = uData('session')
  let username = uData('username')

  return (
    <Fragment>
      <Dropdown
        trigger={trigger}
        options={options}
        pointing="top left"
        icon={null}
      />
      <nav class="nav nav-pills nav-justified">
        {/* <NavLink
          to="/notifications"
          activeClassName="ha_active"
          className="nav-link"
        >
          <i class="fas fa-cart-arrow-down" />
        </NavLink>
        <NavLink
          to="/notifications"
          activeClassName="ha_active"
          className="nav-link"
        >
          <i class="far fa-bell" />
        </NavLink>
        <NavLink
          to="/notifications"
          activeClassName="ha_active"
          className="nav-link"
        >
          <i class="far fa-comment-alt" />
        </NavLink> */}
      </nav>

      {/* <NavLink
        to={`/profile/${username}`}
        activeClassName="ha_active"
        className="sp"
      >
        <img src={`/users/${id}/avatar.jpg`} alt="avatar" className="sp_img" />
        <span className="sp_span">{username}</span>
      </NavLink> */}
    </Fragment>
  )
}

export default HeaderTopLinks
