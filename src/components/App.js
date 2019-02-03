/**
 * @author Faiyaz Shaikh <www.shtakkar@gmail.com>
 * GitHub repo: https://github.com/yTakkar/React-Instagram-Clone-2.0
 */

import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUnreadNotifications } from '../actions/notification'
import { getUnreadMessages } from '../actions/message'

import Header from './others/header/header'
import NotiSpeak from './others/noti-speak'
import SideBar from './others/sidebar/sidebar'
import AppRoutes from './App-routes'
import NciCard from './others/ncicard/ncicard'
import Suggested from './others/suggested.1/suggested'
import FormStep from './others/step/FormStep'

class App extends Component {
  state = {
    completed: true,
  }
  componentDidMount = () => {
    let { dispatch } = this.props
    dispatch(getUnreadNotifications())
    dispatch(getUnreadMessages())
  }

  render() {
    let { unreadNotifications, unreadMessages } = this.props

    return (
      <Router>
        <div className="app">
          {this.state.completed ? (
            <div>
              <Header />
              <NotiSpeak un={unreadNotifications} />
              <SideBar un={unreadNotifications} uc={unreadMessages} />
              <AppRoutes />

              <div id="rightBox">
                <NciCard />
                <Suggested when="home" />
              </div>
            </div>
          ) : (
            <div className="stepContainer">
              <FormStep />
            </div>
          )}
        </div>
      </Router>
    )
  }
}

const mapStateToProps = store => ({
  unreadNotifications: store.Notification.unreadNotifications,
  unreadMessages: store.Message.unreadMessages,
})

export default connect(mapStateToProps)(App)
export { App as PureApp }
