import React, { Component } from 'react'
import {
  StyleSheet,
  Button,
  Text,
  TextInput,
  View
} from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

import { loadName } from '../../actions/userProfile'

class Welcome extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: ''
    }
  }
  handleOnPressSubmit () {
    const name = this.state.name
    this.props.onLoadName(name)
    Actions.page1({type: 'reset'})
  }
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          This is a sample React Native mobile app.
        </Text>
        <Text style={styles.instructions}>
          If this is the 1st page that you see when starting the app, it means that you are not logged in.
          Your name is blank.
        </Text>
        <Text style={styles.instructions}>
          Enter your name to continue:
        </Text>
        <TextInput
          style={styles.input}
          placeholder='Type name here!'
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
        />
        <View style={styles.button}>
          <Button
            onPress={() => this.handleOnPressSubmit()}
            title='Submit'
          />
        </View>
      </View>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onLoadName: (name) => dispatch(loadName(name))
  }
}

export default connect(undefined, mapDispatchToProps)(Welcome)

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
  input: {
    alignSelf: 'stretch',
    marginHorizontal: 20
  },
  button: {
    alignSelf: 'stretch',
    marginHorizontal: 20,
    margin: 10
  }
})
