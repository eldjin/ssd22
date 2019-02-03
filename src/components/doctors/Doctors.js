import React, { Component } from 'react'
import { FadeIn } from 'animate-components'
import DocList from './Components/DocList'
import SearchBox from './Components/SearchBox'
export default class Doctors extends Component {
  render() {
    return (
      <FadeIn duration="300ms">
        <div className="senapati">
          <div className="srajkumar settings_srajkumar">
            <div className="settings_nav_div">
              <SearchBox />
            </div>
          </div>
          <div className="prajkumar settings_prajkumar">
            <DocList />
          </div>
        </div>
      </FadeIn>
    )
  }
}
