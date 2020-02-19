/**
 * @format
 */
// To see all the requests in the chrome Dev tools in the network tab.
global.Blob = null

import { AppRegistry } from 'react-native';
import App from './app/index';
import { name as appName } from './app.json';

export default App

AppRegistry.registerComponent(appName, () => App);