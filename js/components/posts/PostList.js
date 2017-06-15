import React, { Component } from 'react'
import {
  StyleSheet,
  Button,
  FlatList,
  Text,
  View
} from 'react-native'

import { apiFetch } from '../../utils/apiUtils'

export default class PostList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      posts: []
    }
  }
  handleOnPressFetch () {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    apiFetch(url).then((data) => this.setState({posts: data}))
  }
  handleOnPressClear () {
    this.setState({posts: []})
  }
  renderPost (post) {
    return (
      <View style={styles.postContainer}>
        <Text style={styles.postText}>
          id: {post.id}
        </Text>
        <Text style={styles.postText}>
          title: {post.title}
        </Text>
      </View>
    )
  }
  renderPosts () {
    const data = this.state.posts
    return (
      <FlatList
        keyExtractor={(post, i) => post.id}
        data={data}
        renderItem={(post) => this.renderPost(post.item)}
      />
    )
  }
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Posts
        </Text>
        <Text style={styles.instructions}>
          Lists of posts:
        </Text>
        { this.renderPosts() }
        <View style={styles.button}>
          <Button
            onPress={() => this.handleOnPressFetch()}
            title='Fetch Posts'
          />
        </View>
        <View style={styles.button}>
          <Button
            onPress={() => this.handleOnPressClear()}
            title='Clear Posts'
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 45,
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
  postContainer: {
    margin: 10
  },
  postText: {
    fontSize: 12
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
