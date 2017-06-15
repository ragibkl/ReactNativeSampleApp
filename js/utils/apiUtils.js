/* global fetch, FormData */
import {
  // Alert,
  NetInfo
} from 'react-native'

import { alertError } from './commonUtils'

// helper to make the url encoded search parameters
export function getEncodedURL (url, urlParams = {}) {
  if (Object.keys(urlParams).length) {
    const urlParamsString = Object.keys(urlParams).map((k) => {
      return encodeURIComponent(k) + '=' + encodeURIComponent(urlParams[k])
    }).join('&')
    return '{}?{}'.format(url, urlParamsString)
  } else {
    return url
  }
}

function getRequestBodyFromHeader (options) {
  let body = options.body
  const contentType = options['Content-Type']

  switch (contentType) {
    case 'application/json':
      return JSON.stringify(body)
    case 'multipart/form-data':
      const formData = new FormData()
      for (let i in body) {
        if (body.hasOwnProperty(i)) {
          formData.append(i, body[i])
        }
      }
      return formData
    default:
      return body
  }
}

function customFetch (url, options = {}) {
  const method = options.method || 'GET'
  let headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    ...options.headers
  }
  let body = method !== 'GET' && options.body
    ? getRequestBodyFromHeader({...options, headers: headers})
    : undefined
  url = getEncodedURL(url, options.searchParams)

  return fetch(url, {
    ...options,
    method: method,
    headers: headers,
    body: body
  })
  .then((response) => response.json())
  .catch((e) => {
    alertError('fetch error', 'Error: {}'.format(e.toString()))
    return Promise.reject(e)
    // Alert.alert(
    //   'fetch error',
    //   'Error: {}'.format(e.toString()),
    //   [
    //     {text: 'Dismiss', onPress: () => null}
    //   ]
    // )
  })
}

export function apiFetch (url, options) {
  return NetInfo.isConnected.fetch()
  .then(isConnected => {
    if (isConnected) {
      return customFetch(url, options)
    } else {
      console.log('apiFetch error: Not connected to internet')
      alertError('apiFetch error', 'Not connected to internet')
      // Alert.alert(
      //   'apiFetch error',
      //   'Not connected to internet',
      //   [
      //     {text: 'Dismiss', onPress: () => null}
      //   ]
      // )
      const e = new Error('not connected')
      return Promise.reject(e)
    }
  })
}
