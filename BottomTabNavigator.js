import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-paper';
import React from 'react';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} 
            options={{ tabBarIcon:({color}) => <Icon source={'home'} size={30} color={color}/>}}/>
            <Tab.Screen name="Details" component={DetailsScreen} 
             options={{ tabBarIcon:({color}) => <Icon source={'star'} size={30} color={color}/>}}/>
        </Tab.Navigator>
    )

}
export default BottomTabNavigation;