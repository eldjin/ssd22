import React from 'react'
import PropTypes from 'prop-types'
import AppLink from '../link/link'

const HeaderOptions = ({ toggleOptions }) => {
  let clicked = () => toggleOptions()

  return (
    <div>
      <ul className="o_ul">
        <button class="dropdown-item" type="button" onClick={clicked}>
          <AppLink
            url="/settings"
            className="o_a"
            alt="Settings"
            label="Settings"
          />
        </button>
        <button class="dropdown-item" type="button" onClick={clicked}>
          <AppLink
            url="/edit-profile"
            className="o_a"
            alt="Edit"
            label="Edit"
          />
        </button>
        {/* <li className="o_li">
          <a href="/help" className="o_a" alt="Help">
            Help
          </a>
        </li>
        <li className="o_li">
          <a href="/about">About</a>
        </li>
        <li className="o_li">
          <a href="/developer">Developer</a>
        </li> */}
        <li className="o_li o_divider">
          <hr className="menu_divider" />
        </li>
        <button class="dropdown-item" type="button">
          <a href="/logout" className="o_a" alt="Settings">
            Logout
          </a>
        </button>
      </ul>
    </div>
  )
}

HeaderOptions.propTypes = {
  toggleOptions: PropTypes.func.isRequired,
}

export default HeaderOptions
