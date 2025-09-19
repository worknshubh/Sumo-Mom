import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import '../global.css';
function SplashScreen({ navigation }) {
  useEffect(() => {
    redirect();
  }, []);
  async function redirect() {
    const token = await AsyncStorage.getItem('token');
    setTimeout(() => {
      if (token) {
        navigation.replace('DrawerMenu');
      } else {
        navigation.replace('Login');
      }
    }, 1000);
  }
  return (
    <View className="flex-1 justify-center items-center">
      <LottieView
        source={require('../assets/loader/splash.json')}
        autoPlay
        loop={false}
        className="flex-1"
        style={{ height: 980, width: 720 }}
      ></LottieView>
    </View>
  );
}

export default SplashScreen;
