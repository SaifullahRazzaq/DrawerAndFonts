import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react'
import HomeScreen from './Module/Home';
import SettingScreen from './Module/Setting';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './src/DrawerContent';
// const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer({ navigation }) {
  return (
    <NavigationContainer>
      <Drawer.Navigator  useLegacyImplementation={false} drawerContent={() => <DrawerContent navigation={navigation} />}>
        <Drawer.Screen name="Article" component={SettingScreen} />
        <Drawer.Screen name="Feed" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default MyDrawer;