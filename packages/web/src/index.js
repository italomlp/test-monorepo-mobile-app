import { AppRegistry } from 'react-native';

import App from 'components/src/App';

AppRegistry.registerComponent('monorepoallplatforms', () => App);
AppRegistry.runApplication('monorepoallplatforms', {
  rootTag: document.getElementById('root')
})