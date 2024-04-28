import { View, Text } from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/StackNavigator';
import DrawerNavigation from './src/DrawerNavigation';
import BottomTabNavigation from './src/BottomTabNavigator';

export default function App() {
  return (
 <NavigationContainer>
   <BottomTabNavigation/>
    {/*<StackNavigation/>*/}
   {/*<DrawerNavigation/>*/}
 </NavigationContainer>
  )
}