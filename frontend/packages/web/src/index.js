import { AppRegistry } from 'react-native'

import App from 'components/src/App'

AppRegistry.registerComponent('hack_prepare', () => App)
AppRegistry.runApplication('hack_prepare', {
  rootTag: document.getElementById('root'),
})
