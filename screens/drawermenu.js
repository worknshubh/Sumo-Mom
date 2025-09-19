import React from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomNav from '../screens/bottomnav';
import Home from '../screens/home';
function DrawerMenu() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveBackgroundColor: '#fff',
        drawerActiveTintColor: '#f67280',
      }}
    >
      <Drawer.Screen
        name="bottomNav"
        component={BottomNav}
        options={{ drawerLabel: 'Home', headerTitle: 'Sumo Mom' }}
      ></Drawer.Screen>

      <Drawer.Screen
        name="Profile"
        component={Home}
        options={{ drawerLabel: 'My Profile' }}
      ></Drawer.Screen>

      <Drawer.Screen
        name="AI Assistant"
        component={Home}
        options={{ drawerLabel: 'AI Assistant' }}
      ></Drawer.Screen>

      <Drawer.Screen
        name="Diet & Exercises"
        component={Home}
        options={{ drawerLabel: 'Diet & Exercises' }}
      ></Drawer.Screen>

      <Drawer.Screen
        name="Settings"
        component={Home}
        options={{ drawerLabel: 'Settings' }}
      ></Drawer.Screen>

      <Drawer.Screen
        name="Logout"
        component={Home}
        options={{ drawerLabel: 'Logout' }}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
}

export default DrawerMenu;
