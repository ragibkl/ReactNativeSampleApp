import { apiFetch } from '../utils/apiUtils'

export function loadPosts (posts = []) {
  const action = {
    type: 'LOAD_POSTS',
    payload: posts
  }
  return action
}

export function clearPosts () {
  const action = {
    type: 'CLEAR_POSTS'
  }
  return action
}

export function fetchPosts () {
  const actionThunk = (dispatch, getState) => {
    dispatch(clearPosts())

    const url = 'https://jsonplaceholder.typicode.com/posts'
    return apiFetch(url).then((data) => dispatch(loadPosts(data)))
  }
  return actionThunk
}
