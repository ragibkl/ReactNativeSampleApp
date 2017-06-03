import React, { Component } from 'react'
import {
  StyleSheet,
  Button,
  Text,
  View
} from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

import { logout } from '../../actions/userProfile'

class Page2 extends Component {
  handleOnPressLogout () {
    this.props.onLogout()
    Actions.welcome({type: 'reset'})
  }
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Page 2!
        </Text>
        <Text style={styles.instructions}>
          Hi {this.props.name}!
        </Text>
        <Text style={styles.instructions}>
          This is Page 2. Press button below to 'pop' to previous page.
        </Text>
        <Text style={styles.instructions}>
          Press logout to empty your 'name' and reset to the Welcome page.
        </Text>
        <View style={styles.button}>
          <Button
            onPress={() => Actions.pop()}
            title='Back'
          />
        </View>
        <View style={styles.button}>
          <Button
            onPress={() => this.handleOnPressLogout()}
            title='Logout'
          />
        </View>
      </View>
    )
  }
}

function mapStateToProps (state) {
  return {
    name: state.userProfile.name
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onLogout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page2)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  button: {
    alignSelf: 'stretch',
    marginHorizontal: 20,
    margin: 10
  }
})
