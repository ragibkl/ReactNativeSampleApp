import React, { Component } from 'react'
import {
  StyleSheet,
  Button,
  FlatList,
  Text,
  View
} from 'react-native'
import { connect } from 'react-redux'

import { fetchPosts, clearPosts } from '../../actions/post'

class PostListReduxThunk extends Component {
  handleOnPressFetch () {
    this.props.onFetchPosts()
  }
  handleOnPressClear () {
    this.props.onClearPosts()
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
    const data = this.props.posts
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

function mapStateToProps (state) {
  const posts = state.posts.postsList
  return {
    posts
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onFetchPosts: (posts) => dispatch(fetchPosts(posts)),
    onClearPosts: () => dispatch(clearPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostListReduxThunk)

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
