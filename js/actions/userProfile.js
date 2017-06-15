export function loadName (name = '') {
  const action = {
    type: 'LOAD_NAME',
    payload: name
  }
  return action
}

export function logout () {
  const action = {
    type: 'LOGOUT'
  }
  return action
}
