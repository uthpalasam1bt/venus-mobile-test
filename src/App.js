import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import Home from './screens/home';
import Schemes from './screens/schemes';
import Scheme from './screens/scheme';
import Tasks from './screens/tasks';
import Reports from './screens/reports';
import Multiclient from './screens/multiclient';
import Notifications from './screens/notifications';
import MyProfile from './screens/myprofile';
import SchemeInfomation from './screens/scheme/schemeInfomation';
import SchemeUpdates from './screens/scheme/schemeUpdates';
import SchemeUserManagement from './screens/scheme/schemeUserManagement';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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

const SchemeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="schemeInfomation"
        component={SchemeInfomation}
        options={{
          tabBarIcon: () => <Icon name="layout" color="#2BABE2" size={20} />,
        }}
      />
      <Tab.Screen
        name="schemeUpdates"
        component={SchemeUpdates}
        options={{
          tabBarIcon: () => <Icon name="team" color="#2BABE2" size={20} />,
        }}
      />
      <Tab.Screen
        name="schemeUserManagement"
        component={SchemeUserManagement}
        options={{
          tabBarIcon: () => <Icon name="idcard" color="#2BABE2" size={20} />,
        }}
      />
    </Tab.Navigator>
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
        <Stack.Screen
          name="scheme"
          component={SchemeTabs}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
