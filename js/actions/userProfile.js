export function loadName (name = '') {
  return {
    type: 'LOAD_NAME',
    payload: name
  }
}

export function logout () {
  return {
    type: 'LOGOUT'
  }
}
