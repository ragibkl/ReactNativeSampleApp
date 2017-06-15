import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Scene, Router } from 'react-native-router-flux'

import Welcome from '../welcome/Welcome'
import Page1 from '../pages/Page1'
import Page2 from '../pages/Page2'

import PostList from '../posts/PostList'

// Declare all navigation scenes using react-native-router-flux
// set initial scene based on whether user has logged-in before
class AppRoutes extends Component {
  render () {
    return (
      <Router>
        <Scene key='root'>
          <Scene key='welcome' component={Welcome} title='Welcome' />
          <Scene key='page1' component={Page1} title='Page 1' initial={this.props.isLoggedIn} />
          <Scene key='page2' component={Page2} title='Page 2' />
          <Scene key='posts1' component={PostList} title='Post List' />
        </Scene>
      </Router>
    )
  }
}

function mapStateToProps (state) {
  return {
    isLoggedIn: !!state.userProfile.name
  }
}

export default connect(mapStateToProps)(AppRoutes)
