// Sample userProfile reducer
const initial = {
  name: ''
}

function userProfile (state = initial, action) {
  switch (action.type) {
    case 'LOAD_NAME':
      return {
        ...state,
        name: action.payload
      }
    default:
      return state
  }
}

export default userProfile
