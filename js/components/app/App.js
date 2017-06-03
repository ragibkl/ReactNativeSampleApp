import React, { Component } from 'react'
import { connect } from 'react-redux'

import AppRoutes from './AppRoutes'

// Main app component. Marks the app completely loaded.
// Best place to declare background task, or initiate data fetch for logged in users
class App extends Component {
  shouldComponentUpdate (nextProps, nextState) {
    // Since this is the main component, we don't want this component to get re-rendered unnecessarily
    return false
  }
  render () {
    return (
      <AppRoutes />
    )
  }
}

function mapStateToProps (state) {
  return {
    isLoggedIn: !!state.userProfile.name
  }
}

export default connect(mapStateToProps)(App)
