import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { compose, applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { persistStore, autoRehydrate } from 'redux-persist'

import appReducer from './reducers/appReducer'

import App from './components/app/App'
import Loading from './components/app/Loading'

// declare the redux store
const store = createStore(
  appReducer,
  undefined,
  compose(
    applyMiddleware(thunkMiddleware),
    autoRehydrate()
  )
)

class ReduxApp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true
    }
  }
  handleStoreRehydrateComplete () {
    // handle redux store post-rehydration/post-loading
    setTimeout(() => {
      this.setState({isLoading: false})
    }, 1000)
  }
  componentDidMount () {
    // Init redux persist here
    // Also rehydrates/loads existing data into the store
    persistStore(store, {
      storage: AsyncStorage,
      whitelist: [
        'userProfile'
      ]
    }, () => this.handleStoreRehydrateComplete())
  }
  render () {
    // If the redux store is still loading, we show the loading page
    if (this.state.isLoading) {
      return (
        <Loading />
      )
    }

    // Redux store loading is complete, so the app can be loaded
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

export function setup () {
  return ReduxApp
}
