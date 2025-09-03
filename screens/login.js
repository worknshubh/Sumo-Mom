import React from 'react';
import { View, Text, ImageBackground, TextInput, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonPrimary from '../components/button';
import '../global.css';
import { useNavigation } from '@react-navigation/native';
function LoginScreen() {
  const navigation = useNavigation();
  function redirecttootp() {
    //if username and pass is correct then redirect to otp screen
    Alert.alert('why 2');
  }
  return (
    <SafeAreaView className="flex-1" style={{ flex: 1 }}>
      <ImageBackground
        source={require('../assets/images/loginpage.png')}
        className="flex-1 bg-cover justify-between p-8"
        style={{ flex: 1 }}
      >
        <View>
          <Text className="text-3xl font-bold">You're a Sumo Mom</Text>
          <Text>Enter your Login Credentials</Text>
        </View>

        <View className="flex flex-col">
          <TextInput
            placeholder="Enter Your Mobile Number"
            placeholderTextColor="#000"
            className="text-lg border-b-2 border-black my-5 text-black"
            keyboardType="number-pad"
          ></TextInput>

          <TextInput
            placeholder="Enter Your Password"
            placeholderTextColor="#000"
            className="text-lg border-b-2 border-black my-5 text-black"
          ></TextInput>
        </View>

        <View>
          <ButtonPrimary name="Login Now" redirectnow={redirecttootp} />
          <Text
            className="my-4 text-center text-white font-semibold active:opacity-45"
            onPress={() => {
              navigation.navigate('Signup');
            }}
          >
            Want to become a Sumo Mom?
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default LoginScreen;
