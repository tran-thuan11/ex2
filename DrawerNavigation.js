import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from '../src/HomeScreen';
import DetailsScreen from '../src/DetailsScreen';
import CustomDrawerNavigation from '../src/CustomNavigationBar';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () =>{
    return(
        <Drawer.Navigator drawerContent={(props) => <CustomDrawerNavigation {...props}/>}>
            <Drawer.Screen name='Home' component={HomeScreen}/>
            <Drawer.Screen name='Details' component={DetailsScreen}/>
        </Drawer.Navigator>
    )
}
export default DrawerNavigation;