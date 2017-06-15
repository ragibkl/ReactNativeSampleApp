// Sample userProfile reducer
const initial = {
  postsList: []
}

function post (state = initial, action) {
  switch (action.type) {
    case 'LOAD_POSTS':
      return {
        ...state,
        postsList: action.payload
      }
    case 'CLEAR_POSTS':
      return {
        ...initial
      }
    case 'LOGOUT':
      return {
        ...initial
      }
    default:
      return state
  }
}

export default post
