/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import index from './src/screen/index';
import index from './src/screen/login.js';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => index);
