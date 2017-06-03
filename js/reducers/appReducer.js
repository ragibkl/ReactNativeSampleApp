import { combineReducers } from 'redux'

import userProfile from './userProfile'

const appReducer = combineReducers({
  // other reducers here
  userProfile
})

export default appReducer
