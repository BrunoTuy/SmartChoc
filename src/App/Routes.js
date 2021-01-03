import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Welcome from '../pages/Welcome';
import ModoIncubacao from '../pages/ModoIncubacao';

export default createAppContainer(
  createStackNavigator(
    {
      Welcome,
      ModoIncubacao,
    }, {
      initialRouteName: 'Welcome'
    }
  )
);
