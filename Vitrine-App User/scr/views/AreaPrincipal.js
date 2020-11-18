import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import { appStyles } from '../../assets/css/AppStyle';
// import Home from './Home';
import Publicacoes from './Publicacoes';
import Preferencias from './Preferencias';

export default function AreaPrincipal() {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator
      activeColor='#594A46'
      inactiveColor='#594A46'
      barStyle={appStyles.bar__principal}
      >
      {/* <Tab.Screen name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon name="home" color={focused ? '#E98E1E' : '#594A46'} size={25} />
          )
          ,
        }} 
      /> */}
      <Tab.Screen name="Publicações"
        component={Publicacoes}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon name="eye" color={focused ? '#E98E1E' : '#594A46'} size={25} />
          ),
        }}
      />
      <Tab.Screen name="Preferências"
        component={Preferencias}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon name="settings" color={focused ? '#E98E1E' : '#594A46'} size={25} />
          )
        }}
      />
    </Tab.Navigator>
  );
}