import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import TabScreen from './TabScreen';

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <TabScreen/>
    </NavigationContainer>
  );
}
