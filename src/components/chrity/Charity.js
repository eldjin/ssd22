import React, { Component } from 'react'
import { FadeIn } from 'animate-components'
import CharitySearch from './conponents/CharitySearch'
import CharityList from './conponents/CharityList'
export default class Charity extends Component {
  render() {
    return (
      <FadeIn duration="300ms">
        <div className="senapati">
          <div className="srajkumar settings_srajkumar">
            <div className="settings_nav_div">
              <CharitySearch />
            </div>
          </div>
          <div className="prajkumar settings_prajkumar">
            <CharityList />
          </div>
        </div>
      </FadeIn>
    )
  }
}
