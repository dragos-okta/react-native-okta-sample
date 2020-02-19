/* Short index JS */
import React from 'react';
import { Provider } from 'react-redux';
import { Root } from 'native-base';
import store from './store';

import Navigator from './config/routes';
import colors from './config/colors';

<script src="http://192.168.0.185:8097" />;
console.disableYellowBox = true;

export default () => (
  <Root>
    <Provider store={store}>
      <Navigator onNavigationStateChange={null} />
    </Provider>
  </Root>
);
