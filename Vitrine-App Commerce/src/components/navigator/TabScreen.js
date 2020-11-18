import React from 'react'

//React-Navigation Imports
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
// import Icon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Feather';
Icon.loadFont();

//Import Telas da aplicacao
import Home from '../../components/screen/Home';
import Ad from '../../components/screen/Ad';
import Publications from '../screen/Publications/index-NEW';

import {footerColor, white} from '../../assets/helper/Colors';

const Tab = createMaterialBottomTabNavigator();

function TabScreen() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor={white}
            barStyle={{backgroundColor: footerColor}}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({color}) => (
                    // <Icon name="ios-home" color={color} size={26} />
                    <Icon name="home" color={color} size={24} />
                    ),
                }}
            />
            <Tab.Screen
                name="Anúncios"
                component={Ad}
                options={{
                    tabBarLabel: 'Anunciar',
                    tabBarIcon: ({color}) => (
                    // <Icon name="ios-megaphone" color={color} size={26} />
                    <Icon name="volume-2" color={color} size={24} />
                    ),
                }}
            />
            <Tab.Screen
                name="Publicações"
                component={Publications}
                options={{
                    tabBarLabel: 'Publicações',
                    tabBarIcon: ({color}) => (
                    // <Icon name="ios-eye" color={color} size={26} />
                    <Icon name="eye" color={color} size={24} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default TabScreen
