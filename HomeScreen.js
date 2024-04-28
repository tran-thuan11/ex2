import { View, Text, StyleSheet } from 'react-native'
import { Button, Drawer } from 'react-native-paper'
import React from 'react'
const HomeScreen= ({navigation}) =>{
  return (
    <View style={myStyles.container}>
      <Text>Home Screen</Text>
      <Button mode='contained' onPress={() => navigation.navigate("Details")}>Go to details</Button>
    </View>
  )
}
export default HomeScreen;
const myStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})