/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import index from './src/screen/index1.js';
import test from './src/screen/splash_screen.js';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => test);
