import {
  Alert,
  Dimensions
} from 'react-native'

export function vw (width = 1) {
  const fullWidth = Dimensions.getWidth()
  return Math.round(width / 100 * fullWidth)
}

export function vh (height = 1) {
  const fullHeight = Dimensions.getHeight()
  return Math.round(height / 100 * fullHeight)
}

export function alertError (title = 'Unexpected Error', message = 'Oops! Something went wrong.') {
  Alert.alert(
    title,
    message,
    [{text: 'Dismiss', onPress: () => null}]
  )
}
