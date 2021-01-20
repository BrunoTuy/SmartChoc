import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Welcome from '../pages/Welcome';
import ModoIncubacao from '../pages/ModoIncubacao';
import ModoFacilPart1 from '../pages/ModoFacilPart1';
import ModoFacilPart2 from '../pages/ModoFacilPart2';

export default createAppContainer(
  createStackNavigator(
    {
      Welcome,
      ModoIncubacao,
      ModoFacilPart1,
      ModoFacilPart2,
    }, {
      initialRouteName: 'Welcome'
    }
  )
);
