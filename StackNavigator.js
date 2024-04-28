import { View, Text } from 'react-native';
import React from 'react';
import HomeScreen from '../src/HomeScreen';
import DetailsScreen from '../src/DetailsScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import CustomNavigationBar from '../src/CustomNavigationBar';


const Stack = createStackNavigator();

const StackNavigation = () =>{
  return(
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          header: (props) => <CustomNavigationBar {...props} />,
        }}>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
export default StackNavigation;