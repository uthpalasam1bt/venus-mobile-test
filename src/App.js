import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

import Home from './screens/home';
import Schemes from './screens/schemes';
import Scheme from './screens/scheme';
import Tasks from './screens/tasks';
import Reports from './screens/reports';
import Multiclient from './screens/multiclient';
import Notifications from './screens/notifications';
import MyProfile from './screens/myprofile';

import {FloatingAction} from 'react-native-floating-action';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const MainDrawer = () => {
  return (
    <Drawer.Navigator screenOptions={{drawerPosition: 'right'}}>
      <Drawer.Screen name="home" component={Home} />
      <Drawer.Screen name="schemes" component={Schemes} />
      <Drawer.Screen name="tasks" component={Tasks} />
      <Drawer.Screen name="reports" component={Reports} />
      <Drawer.Screen name="multiclient" component={Multiclient} />
      <Drawer.Screen name="notifications" component={Notifications} />
      <Drawer.Screen name="myprofile" component={MyProfile} />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="mainDrawer"
          component={MainDrawer}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="scheme" component={Scheme} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
