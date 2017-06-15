import { combineReducers } from 'redux'

import posts from './posts'
import userProfile from './userProfile'

const appReducer = combineReducers({
  // other reducers here
  posts,
  userProfile
})

export default appReducer
