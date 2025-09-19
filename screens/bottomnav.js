import React from 'react';
import { View, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Home from '../screens/home';
function BottomNav() {
  const BottomNav = createBottomTabNavigator();
  return (
    <BottomNav.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#f67280',
        tabBarStyle: {
          position: 'absolute',
          margin: 20,
          borderRadius: 30,
          marginBottom: hp('5%'),
          height: hp('10%'),
        },
      }}
    >
      <BottomNav.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarItemStyle: { margin: 10 },
          tabBarIcon: ({ focused, size }) => {
            return (
              <Image
                source={require('../assets/icons/homeicon.png')}
                style={
                  focused === true
                    ? { height: size, width: size, tintColor: '#f67280' }
                    : { height: size, width: size, tintColor: '#FFB5B5' }
                }
              ></Image>
            );
          },
        }}
      ></BottomNav.Screen>

      <BottomNav.Screen
        name="BodyFuel"
        component={Home}
        options={{
          headerShown: false,
          tabBarItemStyle: { margin: 10 },
          tabBarIcon: ({ focused, size }) => {
            return (
              <Image
                source={require('../assets/icons/bodyfuel.png')}
                style={
                  focused === true
                    ? { height: size, width: size, tintColor: '#f67280' }
                    : { height: size, width: size, tintColor: '#FFB5B5' }
                }
              ></Image>
            );
          },
        }}
      ></BottomNav.Screen>

      <BottomNav.Screen
        name="Profile"
        component={Home}
        options={{
          headerShown: false,
          tabBarItemStyle: { margin: 10 },
          tabBarIcon: ({ focused, size }) => {
            return (
              <Image
                source={require('../assets/icons/user.png')}
                style={
                  focused === true
                    ? { height: size, width: size, tintColor: '#f67280' }
                    : { height: size, width: size, tintColor: '#FFB5B5' }
                }
              ></Image>
            );
          },
        }}
      ></BottomNav.Screen>
    </BottomNav.Navigator>
  );
}

export default BottomNav;
