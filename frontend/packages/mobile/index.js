/**
 * @format
 */

import {AppRegistry, YellowBox} from 'react-native';
import App from 'components/src/App';
import {name as appName} from './app.json';

YellowBox.ignoreWarnings();

AppRegistry.registerComponent(appName, () => App);
