import React from 'react';
import { View, Text } from 'react-native';
import './global.css';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/login';
import SignupScreen from './screens/signup';
import GettingStarted from './screens/gettingstarted';
import WeightTracker from './screens/weightTracker';
import KickCounter from './screens/kickcounter';
import MoodTracker from './screens/moodTracker';
import SplashScreen from './screens/splashScreen';
import RemindersScreen from './screens/reminders';
import SymptomsTracker from './screens/symptoms';
import DrawerMenu from './screens/drawermenu';
import Home from './screens/home';
import { NavigationContainer } from '@react-navigation/native';
function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <Stack.Navigator>
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="GettingStarted"
            component={GettingStarted}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="WeightTracker"
            component={WeightTracker}
            options={{ headerShown: true, headerTitle: 'Weight Tracker' }}
          ></Stack.Screen>
          <Stack.Screen
            name="KickCounter"
            component={KickCounter}
            options={{ headerShown: true, headerTitle: 'Kick Counter' }}
          ></Stack.Screen>
          <Stack.Screen
            name="MoodTracker"
            component={MoodTracker}
            options={{ headerShown: true, headerTitle: 'Mood Tracker' }}
          ></Stack.Screen>
          <Stack.Screen
            name="symptomsTracker"
            component={SymptomsTracker}
            options={{ headerShown: true, headerTitle: 'Symptoms Tracker' }}
          ></Stack.Screen>
          <Stack.Screen
            name="remindersScreen"
            component={RemindersScreen}
            options={{ headerShown: true, headerTitle: 'Reminders' }}
          ></Stack.Screen>
          <Stack.Screen
            name="DrawerMenu"
            component={DrawerMenu}
            options={{ headerShown: false }}
          ></Stack.Screen>
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

export default App;
