import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Welcome from '../pages/Welcome';

export default createAppContainer(
  createStackNavigator(
    {
      Welcome,
    }, {
      initialRouteName: 'Welcome'
    }
  )
);
