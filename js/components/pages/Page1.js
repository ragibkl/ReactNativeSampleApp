import React, { Component } from 'react'
import {
  StyleSheet,
  Button,
  Text,
  View
} from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

class Page1 extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Page 1!
        </Text>
        <Text style={styles.instructions}>
          Hi {this.props.name}!
        </Text>
        <Text style={styles.instructions}>
          This is a sample React Native mobile app.
        </Text>
        <Text style={styles.instructions}>
          If this is the 1st page that you see when starting the app, it means that you have been previously logged in.
          Your name was loaded/rehydrated into redux using redux-persist.
        </Text>
        <Text style={styles.instructions}>
          Head to Page 2 to logout.
        </Text>
        <View style={styles.button}>
          <Button
            onPress={() => Actions.page2()}
            title='Page 2'
          />
        </View>
        <View style={styles.button}>
          <Button
            onPress={() => Actions.posts1()}
            title='Posts'
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

export default connect(mapStateToProps)(Page1)

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
