/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Splash from './src/Splash';
import Routing from './src/Routing';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Routing);
